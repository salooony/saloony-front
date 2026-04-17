// next
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { parseJwt } from './jwt';

type DecodedAuthToken = {
  sub?: string;
  email?: string;
  name?: string;
  role?: string;
};

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!
    }),
    FacebookProvider({
      id: 'facebook',
      clientId: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET!
    }),
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          });

          const data = await response.json();

          if (!response.ok) {
            const errorMessage = data.message || data.error || 'Login failed!';
            throw new Error(errorMessage);
          }

          if (data.accessToken) {
            // Decode JWT to extract user info
            const decoded = parseJwt(data.accessToken) as DecodedAuthToken;

            const user = {
              id: decoded?.sub || credentials?.email,
              email: decoded?.email || credentials?.email,
              name: decoded?.name || decoded?.email?.split('@')[0] || credentials?.email?.split('@')[0],
              role: decoded?.role || 'user',
              accessToken: data.accessToken,
              refreshToken: data.refreshToken
            };
            return user;
          }

          // Fallback: Handle old response structure with data.user
          if (data.user) {
            data.user.accessToken = data.serviceToken || data.accessToken;
            data.user.refreshToken = data.refreshToken;
            return data.user;
          }

          throw new Error('Invalid response from server!');
        } catch (e: any) {
          const errorMessage = e?.message || 'Something went wrong!';
          console.error('Login authorize error:', errorMessage);
          throw new Error(errorMessage);
        }
      }
    }),
    CredentialsProvider({
      id: 'register',
      name: 'register',
      credentials: {
        firstname: {
          label: 'Firstname',
          type: 'text',
          placeholder: 'Enter Firstname'
        },
        lastname: {
          label: 'Lastname',
          type: 'text',
          placeholder: 'Enter Lastname'
        },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter Email'
        },
        mobileNumber: {
          label: 'Phone Number',
          type: 'text',
          placeholder: 'Enter Phone Number'
        },
        birthdate: {
          label: 'Date of Birth',
          type: 'text',
          placeholder: 'MM/DD/YYYY'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter Password'
        },
        role: {
          label: 'Role',
          type: 'text',
          placeholder: 'Role'
        },
        language: {
          label: 'Language',
          type: 'text',
          placeholder: 'Language'
        }
      },

      async authorize(credentials) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstname: credentials?.firstname,
              lastname: credentials?.lastname,
              email: credentials?.email,
              password: credentials?.password,
              mobileNumber: credentials?.mobileNumber,
              birthdate: credentials?.birthdate,
              role: credentials?.role,
              language: credentials?.language
            })
          });

          const data = await response.json();

          if (!response.ok) {
            if (response.status === 409) {
              throw new Error('User already exists. Please log in.');
            }
            const errorMessage = data.message || data.error || JSON.stringify(data) || 'Registration failed!';
            throw new Error(errorMessage);
          }

          // Registration successful - return user data
          // Note: Register doesn't return tokens, only user info
          if (data.id) {
            return {
              id: data.id,
              name: `${data.firstname} ${data.lastname}`,
              email: data.email,
              role: data.role || 'user',
              ...data
            };
          }

          // Fallback for different response structures
          const registerData = data?.data ?? data;
          if (registerData?.user) {
            return {
              ...registerData.user,
              name: `${registerData.user.firstname} ${registerData.user.lastname}`,
              role: registerData.user.role || 'user'
            };
          }

          throw new Error(data?.message || 'Registration failed!');
        } catch (e: any) {
          const errorMessage = e?.message || 'Registration failed!';
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.role = user.role;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id as string;
        session.provider = token.provider as string;
        session.token = token;
        // Add user info to session
        if (session.user) {
          session.user.role = token.role;
        }
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_PUBLIC_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
};
