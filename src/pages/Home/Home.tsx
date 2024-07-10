import Discover from "@/components/Discover/Discover";
import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import Brands from "./Brand/Brands";
import Testimonails from "./Testimonials/Testimonails";
import FeaturersProducts from "../Product/FeaturersProducts";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Brands />
      <ServiceAdvertisement />
      <FeaturersProducts />
      <Testimonails />
      <Discover />
    </div>
  );
};

export default Home;
