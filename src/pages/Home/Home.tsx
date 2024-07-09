import Discover from "@/components/Discover/Discover";
import Products from "../Product/Products";
import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import Brands from "./Brand/Brands";
import Testimonails from "./Testimonials/Testimonails";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Brands />
      <ServiceAdvertisement />
      <Products />
      <Testimonails />
      <Discover />
    </div>
  );
};

export default Home;
