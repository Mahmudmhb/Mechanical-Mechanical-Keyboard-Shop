import { baseApi } from "@/Redux/Api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productsApi;
