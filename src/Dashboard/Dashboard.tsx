import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import ProductTable from "./ProductTable";
import { TProductProps } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  seletetProducts,
  setProducts,
} from "@/Redux/features/products/productsSlice";

const Dashboard = () => {
  // const dispatch = useAppDispatch();
  const findProduct = useAppSelector(seletetProducts);
  // const { data, isLoading } = useGetAllProductsQuery(undefined);
  console.log(findProduct);
  if (!findProduct.length) {
    return <p>Lodding...........</p>;
  }
  // const products = data.data;
  // if (data) {
  //   dispatch(setProducts(products));
  // }

  return (
    <div className="min-h-screen w-5/6 mx-auto">
      <div>
        <div className="overflow-x-auto ">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {findProduct.length && (
                <>
                  {findProduct.map((product: TProductProps) => (
                    <ProductTable key={product._id} product={product} />
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
