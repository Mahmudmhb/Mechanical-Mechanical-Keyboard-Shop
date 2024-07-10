import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/Mechanical Keyboard Shop.jpg";
import "./navber.css";

const Navber = () => {
  const nav = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/products"> Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm active dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-2xl shadow"
            >
              {nav}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">{logo}</a> */}
          <div>
            <img className="h-14" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/card">
            <div className="badge ">
              <FaShoppingCart />
              <span className="mb-5"> +99</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
