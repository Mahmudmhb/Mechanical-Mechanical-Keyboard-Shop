import MainLayout from "@/components/MainLayout/MainLayout";
import Dashboard from "@/Dashboard/Dashboard";
import AboutUs from "@/pages/About/AboutUs";
import ContactUs from "@/pages/Contact/ContactUs";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Product/Products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
