import { Button } from "@/components/ui/button";
import Heading from "@/Heading/Heading";

const Products = () => {
  return (
    <div>
      <Heading Heading="Featured Products"></Heading>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Brand:</p>
            <p>Available Quantity:</p>
            <div className="card-actions justify-between">
              <div className="">Price:</div>
              <div className="">Rating :</div>
            </div>
          </div>
          <div className="card-actions ">
            <Button>Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
