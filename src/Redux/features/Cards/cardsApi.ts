import { baseApi } from "@/Redux/Api/baseApi";

const cardsAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCardProduct: builder.mutation({
      query: () => ({
        url: "",
      }),
    }),
  }),
});

export const { useAddToCardProductMutation } = cardsAPi;
