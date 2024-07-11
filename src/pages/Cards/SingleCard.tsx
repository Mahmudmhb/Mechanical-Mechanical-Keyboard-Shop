// src/components/SingleCard.tsx

import { useState } from "react";
import { useAppDispatch } from "@/Redux/hooks";

import { TProductProps } from "@/types/types";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "@/Redux/features/products/cardSlice";
import { Button } from "@/components/ui/button";

interface SingleCardProps {
  product: TProductProps;
}

const SingleCard = ({ product }: SingleCardProps) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product._id));
  };

  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>
        <div className="flex gap-5">
          <div className="flex gap-5 items-center border px-5">
            <p
              onClick={() => setQuantity(quantity - 1)}
              className="text-center font-extrabold cursor-pointer"
            >
              <FaMinus className="text-2xl" />
            </p>
            <p className="text-2xl">{quantity}</p>
            <p
              onClick={() => setQuantity(quantity + 1)}
              className="text-center font-extrabold cursor-pointer"
            >
              <FaPlus className="text-2xl" />
            </p>
          </div>
        </div>
      </td>
      <td>{product.price * quantity}</td>
      <td>
        <FaTrash
          className="cursor-pointer text-2xl text-red-500"
          onClick={handleRemoveFromCart}
        />
      </td>
      <td>
        <Button
          onClick={handleAddToCart}
          className=" text-white px-4 py-2 rounded"
        >
          Update Cart
        </Button>
      </td>
    </tr>
  );
};

export default SingleCard;
