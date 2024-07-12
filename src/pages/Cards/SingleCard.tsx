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
  const [updateCard, setUpdateCard] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    setUpdateCard(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product._id));
  };

  return (
    <tr>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>
        {updateCard ? (
          <>
            <p>{product.quantity}</p>
          </>
        ) : (
          <>
            <div className="flex gap-5">
              <div className="flex gap-5 items-center border px-5">
                {quantity === 0 ? (
                  <p className="text-center font-extrabold">
                    <FaMinus className="text-2xl" />
                  </p>
                ) : (
                  <p
                    onClick={() => setQuantity(quantity - 1)}
                    className="text-center font-extrabold cursor-pointer"
                  >
                    <FaMinus className="text-2xl" />
                  </p>
                )}
                <p className="text-2xl">{quantity}</p>
                {product.availableQuantity === quantity ? (
                  <p className="text-center font-extrabold">
                    <FaPlus className="text-2xl" />
                  </p>
                ) : (
                  <p
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-center font-extrabold cursor-pointer"
                  >
                    <FaPlus className="text-2xl" />
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </td>
      <td>{product.price * quantity}</td>
      <td>
        <FaTrash
          className="cursor-pointer text-2xl text-red-500"
          onClick={handleRemoveFromCart}
        />
      </td>
      <td>
        {updateCard ? (
          <Button className=" text-white px-4 bg-primary-gradient py-2 rounded">
            Updated
          </Button>
        ) : (
          <Button
            onClick={handleAddToCart}
            className=" text-white px-4 py-2 rounded"
          >
            Update Cart
          </Button>
        )}
      </td>
    </tr>
  );
};

export default SingleCard;
