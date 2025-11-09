// next
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await axios.post('/api/account/login', {
            password: credentials?.password,
            email: credentials?.email
          });

          if (user) {
            user.data.user['accessToken'] = user.data.serviceToken;
            return user.data.user;
          }
        } catch (e: any) {
          const errorMessage = e?.message || e?.response?.data?.message || 'Something went wrong!';
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
        phonenumber: {
          label: 'Phone Number',
          type: 'text',
          placeholder: 'Enter Phone Number'
        },
        dateofbirth: {
          label: 'Date of Birth',
          type: 'text',
          placeholder: 'MM/DD/YYYY'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter Password'
        }
      },

      async authorize(credentials) {
        try {
          const registerResponse = await axios.post('/api/account/register', {
            firstName: credentials?.firstname,
            lastName: credentials?.lastname,
            email: credentials?.email,
            password: credentials?.password,
            phoneNumber: credentials?.phonenumber,
            dateOfBirth: credentials?.dateofbirth
          });

          const registerData = registerResponse?.data?.data ?? registerResponse?.data;

          // mock API returns either { user, serviceToken } or an array that includes the newly created user
          if (registerData?.user) {
            const registeredUser = { ...registerData.user };
            if (registerData?.serviceToken) {
              registeredUser['accessToken'] = registerData.serviceToken;
            }
            return registeredUser;
          }

          if (Array.isArray(registerData)) {
            const matchedUser = registerData.find((user) => user.email === credentials?.email);
            if (matchedUser) {
              return { ...matchedUser };
            }
          }

          if (registerResponse.status === 409) {
            // or whatever status your API returns
            throw new Error('User already exists. Please log in.');
          }

          throw new Error(registerData?.message || 'Registration failed!');
        } catch (e: any) {
          const errorMessage = e?.response?.data?.message || e?.message || 'Registration failed!';
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
