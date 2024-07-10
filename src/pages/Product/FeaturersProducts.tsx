import Heading from "@/Heading/Heading";
import { TProductProps } from "@/types/types";
import Product from "./Product";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturersProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  if (isLoading) {
    return (
      <div>
        <p>Lodding.......</p>
      </div>
    );
  }
  const products = data?.data;
  return (
    <div>
      <div className=" mx-auto my-20">
        <div className="md:flex  justify-between my-10">
          <Heading Heading="Featured Products"></Heading>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {products?.slice(0, 6).map((product: TProductProps) => (
            <Product key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link to="/products">
            <Button className="bg-primary-gradient ">More Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturersProducts;
