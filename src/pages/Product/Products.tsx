import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Heading from "@/Heading/Heading";

const Products = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <label className="input input-bordered my-5 flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="md:flex  justify-between my-10">
        <Heading Heading="Featured Products"></Heading>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">low to high </SelectItem>
              <SelectItem value="high"> high to low</SelectItem>
              <SelectItem value="reset"> reset all</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
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
