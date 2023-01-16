import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthAPI = createApi({
  reducerPath: 'userAuthAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:8000/authapi/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query:(user)=>{
          return {
              url : 'register',
              method: 'POST',
              body: user,
              headers: {
                  'Content-type': 'application/json',
              }
          }

      }
    }),
  }),
})

export const { useRegisterUserMutation } = userAuthAPI;