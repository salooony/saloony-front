// next
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
// project imports
import axios from 'utils/axios';

const users = [
  {
    id: 1,
    name: 'Jone Doe',
    email: 'info@codedthemes.com',
    password: '123456'
  }
];

declare module 'next-auth' {
  interface User {
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_CLIENT_SECRET!
    }),
    FacebookProvider({
      id: 'facebook',
      clientId: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_CLIENT_SECRET!
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
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_AUTH_URL}auth/login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password
              })
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Login failed!');
          }

          if (data.user) {
            data.user.accessToken = data.serviceToken;
            return data.user;
          }

          throw new Error('Invalid credentials!');
        } catch (e: any) {
          const errorMessage = e?.message || 'Something went wrong!';
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
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_AUTH_URL}users`,
            {
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
            }
          );

          const data = await response.json();
          
          if (!response.ok) {
            if (response.status === 409) {
              throw new Error('User already exists. Please log in.');
            }
            const errorMessage = data.message || data.error || JSON.stringify(data) || 'Registration failed!';
            throw new Error(errorMessage);
          }

          if (data.id) {
            return {
              id: data.id,
              name: `${data.firstname} ${data.lastname}`,
              email: data.email,
              ...data
            };
          }

          const registerData = data?.data ?? data;
          if (registerData?.user) {
            const registeredUser = { ...registerData.user };
            if (registerData?.serviceToken) {
              registeredUser.accessToken = registerData.serviceToken;
            }
            return registeredUser;
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
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.provider = token.provider;
        session.token = token;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_PUBLIC_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
};
