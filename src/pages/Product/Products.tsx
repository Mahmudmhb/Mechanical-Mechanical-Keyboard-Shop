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
  seleteSearchQueray,
  seletetProducts,
  setSearchQuery,
} from "@/Redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { ChangeEvent } from "react";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(seletetProducts);
  const searchProductQuery = useAppSelector(seleteSearchQueray);
  const handleInputSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const searchProduct = products?.filter((product: TProductProps) =>
    product.title
      .toLocaleLowerCase()
      .includes(searchProductQuery.toLocaleLowerCase())
  );
  return (
    <div className="w-11/12  mx-auto my-20">
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
        <Heading Heading="Featured Products"></Heading>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">low to high </SelectItem>
              <SelectItem value="high"> high to low</SelectItem>
              <SelectItem value="reset"> reset all</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {searchProduct?.map((product: TProductProps) => (
          <Product key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
