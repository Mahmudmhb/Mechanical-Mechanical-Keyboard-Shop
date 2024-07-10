import { baseApi } from "@/Redux/Api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
