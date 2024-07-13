import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Heading from "@/Heading/Heading";

import { TProductProps } from "@/types/types";
import Product from "./Product";
import {
  clearFilters,
  selectFilters,
  seleteSearchQueray,
  seletetProducts,
  setSearchQuery,
  setSort,
} from "@/Redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { ChangeEvent } from "react";
import Hero from "../Home/Hero/Hero";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(seletetProducts);
  const filters = useAppSelector(selectFilters);

  const searchProductQuery = useAppSelector(seleteSearchQueray);
  const handleInputSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSortChange = (value: string) => {
    if (value === "low") {
      dispatch(setSort("low-to-high"));
    } else if (value === "high") {
      dispatch(setSort("high-to-low"));
    } else {
      dispatch(clearFilters());
    }
  };
  const searchProduct = products
    ?.filter((product: TProductProps) =>
      product.title
        .toLocaleLowerCase()
        .includes(searchProductQuery.toLocaleLowerCase())
    )
    .filter(
      (product: TProductProps) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    )
    .sort((a, b) => {
      if (filters.sort === "low-to-high") {
        return a.price - b.price;
      } else if (filters.sort === "high-to-low") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  return (
    <div className="w-11/12  mx-auto my-20">
      <Hero></Hero>
      <label className="input input-bordered my-5 flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search Your Product"
          onChange={handleInputSearchQuery}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="md:flex  justify-between my-10">
        <Heading Heading="All Products"></Heading>
        <div>
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
              <SelectItem value="reset">Reset All</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {searchProduct?.map((product: TProductProps) => (
          <Product key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
