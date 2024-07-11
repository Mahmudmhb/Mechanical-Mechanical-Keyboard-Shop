import MainLayout from "@/components/MainLayout/MainLayout";
import Dashboard from "@/Dashboard/Dashboard";
import AboutUs from "@/pages/About/AboutUs";
import Cards from "@/pages/Cards/Cards";
import ContactUs from "@/pages/Contact/ContactUs";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Product/Products";
import ProductsDetails from "@/pages/Product/ProductsDetails";
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
        path: "/product/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/products/",
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
      {
        path: "/cards",
        element: <Cards />,
      },
    ],
  },
]);
