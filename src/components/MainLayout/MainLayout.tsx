import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import Hero from "@/pages/Home/Hero/Hero";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Hero />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
