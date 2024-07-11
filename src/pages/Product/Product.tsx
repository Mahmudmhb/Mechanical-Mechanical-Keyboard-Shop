import { Button } from "@/components/ui/button";

import { TProductProps } from "@/types/types";
import { Link } from "react-router-dom";

const Product = ({ product }: { product: TProductProps }) => {
  //   const signleProducts = useAppSelector(getSigleProduct);

  return (
    <div>
      <div className="card bg-base-100 mx-auto md:w-96 h-[500px]  shadow-xl">
        <figure>
          <img src={product.image} className="h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>Brand:{product.brand}</p>
          <p>Available Quantity:{product.availableQuantity}</p>
          <div className="card-actions justify-between">
            <div className="">Price:{product.price}</div>
            <div className="">Rating :{product.rating}</div>
          </div>
        </div>
        <div className="card-actions items-center justify-center mb-5 ">
          {/* <Button >Buy now</Button> */}
          <Link to={`/product/${product._id}`}>
            <Button className="bg-primary-gradient ">more details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
