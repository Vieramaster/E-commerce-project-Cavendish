import SocialBanner from "./SocialBanner";
import IcoCloseResponsive from "../icons/IcoCloseResponsive";
import { NavLink } from "react-router-dom";

export default function Navbar({ refNavBar, toggleNav, navbar }) {
  return (
    <nav
      ref={refNavBar}
      className={`${
        navbar ? "left-0" : "-left-full"
      } bg-carbon border-r-2  absolute min-h-[600px]  w-2/3 max-w-96 duration-700 ease-in-out flex flex-col justify-between h-menuScreen top-7`}
    >
      <div className="w-full h-16 flex justify-end items-center bg-yellow-500">
        <button
          className="w-10 h-10 mr-3 grid place-content-center"
          onClick={toggleNav}
          aria-label="close responsive menu"
        >
          <IcoCloseResponsive className={"w-8 h-8 fill-yellow"} />
        </button>
      </div>
      <div className="flex flex-col justify-between flex-auto  px-3  ">
        <ul className="text-white text-lg flex flex-col gap-2 lg:text-2xl">
          <li className=" h-12 lg:h-14">
            <NavLink className={"text-3xl lg:text-4xl text-yellow"} to={"/NewArrivals"}>
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Sweaters&Hoodies"}>Sweaters & hoodies</NavLink>
          </li>
          <li>
            <NavLink to={"/Jackets&Coats"}>Jackets & coats</NavLink>
          </li>
          <li>
            <NavLink to={"/T-shirts&Shirts"}>T-shirts & shirts</NavLink>
          </li>
          <li>
            <NavLink to={"/Pants"}>Pants</NavLink>
          </li>
          <li>
            <NavLink to={"/Shoes"}>Shoes</NavLink>
          </li>
        </ul>
        <ul className="text-white text-lg flex flex-col gap-2 mb-3 lg:text-2xl">
          <li>
            <button>Log in/Register</button>
          </li>
          <li>
            <NavLink to="/Stores">Stores</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Partner">Partner with us</NavLink>
          </li>
          <li>
            <NavLink to="/Help">Help</NavLink>
          </li>
        </ul>
      </div>

      <SocialBanner
        svgSize={"w-8 h-8  hover:stroke-yellow duration-300 ease-in-out lg:w-10 lg:h-10" }
        classNameUl={"w-full h-12 lg:h-20"}
      />
    </nav>
  );
}
