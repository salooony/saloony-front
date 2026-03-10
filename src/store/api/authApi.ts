// project imports
import { baseApi } from './baseApi';

// types
interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  message: string;
}

// ==============================|| RTK QUERY - AUTH ENDPOINTS ||============================== //

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation<ForgotPasswordResponse, ForgotPasswordRequest>({
      query: (body) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body
      })
    })
  }),
  overrideExisting: false
});

export const { useForgotPasswordMutation } = authApi;
