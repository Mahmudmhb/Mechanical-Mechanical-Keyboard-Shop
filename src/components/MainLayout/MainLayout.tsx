import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>

      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
