import { Button } from "@/components/ui/button";
import Heading from "@/Heading/Heading";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import {
  decrement,
  increment,
  selectCount,
} from "@/Redux/features/products/productsSlice";
import { useGetSignleProductQuery } from "@/Redux/features/products/singleProductApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { TProductProps } from "@/types/types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useAppDispatch();
  const { data: singleProduct, isLoading } = useGetSignleProductQuery(id);
  const product = singleProduct?.data;

  const { data } = useGetAllProductsQuery(undefined);
  const products = data?.data;

  const count = useAppSelector(selectCount);

  if (isLoading) {
    return (
      <>
        <div>
          <p>Lodding...................</p>
        </div>
      </>
    );
  }
  return (
    <div className="w-5/6 mx-auto my-20 ">
      <Heading Heading={product.title} />

      <div className="md:grid grid-cols-5 gap-20 flex">
        <div className="col-span-3">
          <div>
            <img src={product.image} alt="" className="w-full" />
          </div>

          <div className="mt-20">
            <Heading Heading="About Products"></Heading>

            <h1 className="text-2xl text-[#112] my-3">{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="space-y-4 mb-10 col-span-2">
          <div className="space-y-5">
            <h1 className="text-2xl">{product.title}</h1>
            <h3>
              Price: <span className="font-bold">${product.price}</span>
            </h3>
            <h1>Brand: {product.brand} </h1>
            {product?.availableQuantity === 0 ? (
              <>
                <span className="font-bold ">Out Stock</span>
              </>
            ) : (
              <p>Available Quantity: {product?.availableQuantity - count}</p>
            )}

            <h5>Rating: {product.rating}</h5>

            <div className="flex  gap-5">
              <div className="flex gap-5  items-center border px-5">
                {count === 0 ? (
                  <p className=" text-center   font-extrabold">
                    <FaMinus className="text-2xl" />
                  </p>
                ) : (
                  <p
                    onClick={() => dispatch(decrement())}
                    className=" text-center   font-extrabold"
                  >
                    <FaMinus className="text-2xl" />
                  </p>
                )}
                <p className="text-2xl">{count}</p>

                {product?.availableQuantity === count ? (
                  <p className="text-center    font-extrabold">
                    <FaPlus className="text-2xl" />
                  </p>
                ) : (
                  <p
                    onClick={() => dispatch(increment())}
                    className="text-center    font-extrabold"
                  >
                    <FaPlus className="text-2xl" />
                  </p>
                )}
              </div>
              <Button>Add To Cart</Button>
            </div>
          </div>
          <div className="mt-20">
            <Heading Heading="tanding products" />

            <div className="flex flex-col  gap-5">
              {products?.slice(0, 2).map((product: TProductProps) => (
                <>
                  <div
                    key={product._id}
                    className="card bg-base-100  shadow-xl"
                  >
                    <figure>
                      <img src={product.image} />
                    </figure>
                    <div className="card-body">
                      <Link
                        to={`/product/${product._id}`}
                        className="card-title  hover:text-[18px] hover:duration-500"
                      >
                        {product.title}
                      </Link>
                      <h1 className="font-bold">Price : ${product.price}</h1>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
