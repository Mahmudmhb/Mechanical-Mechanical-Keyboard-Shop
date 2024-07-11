import Heading from "@/Heading/Heading";
import { useAppSelector } from "@/Redux/hooks";
import SingleCard from "./SingleCard";
import {
  cardProduct,
  selectTotalPrice,
} from "@/Redux/features/products/cardSlice";
import { Button } from "@/components/ui/button";

const Cards = () => {
  const cartItems = useAppSelector(cardProduct);
  const cartTotalPrice = useAppSelector(selectTotalPrice);

  console.log(cartTotalPrice);

  return (
    <div className="w-5/6 mx-auto my-20 min-h-screen">
      <div>
        <Heading Heading="My Cart" />
      </div>
      <div className="md:grid grid-cols-6 gap-4">
        <div className="overflow-x-auto col-span-4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {cartItems.length > 0 ? (
                cartItems.map((product) => (
                  <SingleCard key={product._id} product={product} />
                ))
              ) : (
                <tr>
                  <td>No items in the cart</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="col-span-2 border my-5 p-5">
          <div>
            <Heading Heading="card summery"></Heading>

            <div className="space-y-4">
              <div className="flex justify-between ">
                <h1>Total Items: </h1>
                <h1>{cartItems?.length}</h1>
              </div>
              <div>
                {cartItems?.map((product) => (
                  <div className="flex justify-between border-t">
                    <h1>
                      Total Card: ( {product?.quantity} X {product.price} )
                    </h1>
                    <h1>{product?.quantity * product.price}</h1>
                  </div>
                ))}
                <h1></h1>
              </div>
              <div className="flex justify-between border-t">
                {" "}
                <h1>Total price:</h1>
                <h1>{cartTotalPrice!}</h1>
              </div>
              {cartItems.length > 0 ? (
                <>
                  <Button className="bg-primary-gradient disabled">
                    Proceed To Checkout
                  </Button>
                </>
              ) : (
                <>
                  <Button>Please Add Products Your Card</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
