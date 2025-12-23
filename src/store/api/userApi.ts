import { RegisterUserRequest, RegisterUserResponse } from '@src/types/auth';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterUserResponse, RegisterUserRequest>({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData
      })
    })
  })
});

export const { useRegisterUserMutation } = userApi;
