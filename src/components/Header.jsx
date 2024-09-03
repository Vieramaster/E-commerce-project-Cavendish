import { useState } from "react";
import { NavLink } from "react-router-dom";
//ICOS
import IcoBarsResponsive from "../icons/IcoBarsResponsive";
import ICoSearch from "../icons/ICoSearch";
import ICoShoppingCart from "../icons/ICoShoppingCart";
import IcoCloseResponsive from "../icons/IcoCloseResponsive";

//COMPONENTS
import SocialBanner from "./SocialBanner";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const openNav = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <span className="h-7 w-full bg-carbon grid place-content-center">
        <h2 className="text-white"> Free U.S. Shipping on Orders $125+</h2>
      </span>
      <header className="relative w-full h-16 flex justify-between px-3 ">
        <div className="flex gap-3 w-auto h-full bg-green-300 flex-1 justify-start items-center ">
          <button onClick={openNav} aria-label="open responsive menu">
            <IcoBarsResponsive className={"w-10 h-10 stroke-white stroke-1"} />
          </button>

          <button aria-label="search button">
            <ICoSearch className={"w-7 h-7 stroke-white"} />
          </button>
        </div>
        <div className="h-full flex-auto bg-red-400 grid place-content-center">
          <a href="#" className="text-white text-3xl">
            ETALON
          </a>
        </div>
        <div className="h-full flex-1 bg-violet-500 flex justify-end">
          <button className="flex gap-2 h-full w-14 items-center ">
            <ICoShoppingCart className={"w-7 h-7 stroke-white"} />
            <span>1</span>
          </button>
        </div>
        <nav
          className={`${
            navbar ? "left-0" : "-left-full"
          } bg-rose-500 absolute w-2/3 max-w-96 duration-500 ease-in-out flex flex-col justify-between h-menuScreen`}
        >
          <div className="w-full h-16 flex justify-end items-center bg-yellow-500">
            <button
              className="w-10 h-10 mr-3 bg-red-500 grid place-content-center"
              onClick={openNav}
              aria-label="close responsive menu"
            >
              <IcoCloseResponsive className={"w-8 h-8 fill-white"} />
            </button>
          </div>
          <div className=" bg-orange-500 flex flex-col justify-between flex-auto py-5 px-3">
            <ul className="text-white text-xl flex flex-col gap-2">
              <li>
                <NavLink to={"/"}>New Arrivals</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Sweaters & hoodies</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Jackets & coats</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>T-shirts & shirts</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Pants</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Shoes</NavLink>
              </li>
            </ul>
            <ul className="text-white text-xl flex flex-col gap-2">
              <li>
                <button>Log in/Register</button>
              </li>
              <li>
                <NavLink to="/stores">Stores</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/partner">Partner with us</NavLink>
              </li>
              <li>
                <NavLink to="/help">Help</NavLink>
              </li>
            </ul>
          </div>

          <SocialBanner svgSize={"w-8 h-8"} classNameUl={"w-full h-12 "} />
        </nav>
      </header>
    </>
  );
}
