import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://assignment-4-server-virid.vercel.app/",
  //   credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
