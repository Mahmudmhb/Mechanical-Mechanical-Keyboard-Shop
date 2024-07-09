import Products from "../Product/Products";
import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import Brands from "./Brand/Brands";
import Hero from "./Hero/Hero";
import Testimonails from "./Testimonials/Testimonails";

const Home = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Hero />
      <Brands />
      <ServiceAdvertisement />
      <Products />
      <Testimonails />
    </div>
  );
};

export default Home;
