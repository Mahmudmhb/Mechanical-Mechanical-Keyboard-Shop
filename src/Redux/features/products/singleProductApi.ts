import { baseApi } from "@/Redux/Api/baseApi";

const getSignleProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSignleProduct: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetSignleProductQuery } = getSignleProductApi;
