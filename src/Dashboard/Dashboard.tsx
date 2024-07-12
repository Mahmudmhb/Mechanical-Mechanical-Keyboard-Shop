import ProductTable from "./ProductTable";
import { TProductProps } from "@/types/types";
import { useAppSelector } from "@/Redux/hooks";
import { seletetProducts } from "@/Redux/features/products/productsSlice";

const Dashboard = () => {
  const findProduct = useAppSelector(seletetProducts);
  if (!findProduct.length) {
    return <p>Lodding...........</p>;
  }

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
