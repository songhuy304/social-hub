import { createApi } from '@reduxjs/toolkit/query/react';

import { GATEWAY_URL } from '@/shared/constants';
import { fetchAuthBaseQuery } from './common';

export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',

  baseQuery: fetchAuthBaseQuery(`${GATEWAY_URL}/user`),
  tagTypes: ['Authentication'],

  endpoints: (builder) => ({
    login: builder.mutation<void, void>({
      query: (body) => ({
        url: '/api/common/v1/authentications/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Authentication'],
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/api/public/v1/authentications/logout',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authenticationApi;
