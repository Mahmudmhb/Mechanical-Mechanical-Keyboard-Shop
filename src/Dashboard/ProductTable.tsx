import { TProductProps } from "@/types/types";
import { FaTrash } from "react-icons/fa6";

import { useState } from "react";
import ProductModel from "./ProductModel/ProductModel";

import { useAppDispatch } from "@/Redux/hooks";
import { deleteProduct } from "@/Redux/features/products/productsSlice";

const ProductTable = ({ product }: { product: TProductProps }) => {
  const [update, setUpdate] = useState(String);
  const dispatch = useAppDispatch();

  const handleEditBtn = (product: string) => {
    setUpdate(product);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product._id));
    console.log("clicked");
  };
  return (
    <tr>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{product.brand}</td>
      <td className="flex justify-between">
        <div>
          <button>
            {" "}
            <FaTrash
              className="cursor-pointer text-2xl text-red-500"
              onClick={handleDelete}
            />
          </button>
        </div>
        <div>
          <button onClick={() => handleEditBtn(product._id)}>
            <ProductModel update={update}></ProductModel>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
