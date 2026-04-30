// eslint-disable-next-line
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id: string;
    provider: string;
    token: {
      accessToken?: string;
      refreshToken?: string;
    };
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      firstname?: string;
      lastname?: string;
      mobileNumber?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    role?: string;
    accessToken?: string;
    refreshToken?: string;
    firstname?: string;
    lastname?: string;
    mobileNumber?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    role?: string;
    provider?: string;
    accessToken?: string;
    refreshToken?: string;
    firstname?: string;
    lastname?: string;
    mobileNumber?: string;
  }
}
