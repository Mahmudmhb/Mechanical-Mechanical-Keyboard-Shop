import Brands from "./Brand/Brands";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Hero />
      <Brands />
    </div>
  );
};

export default Home;
