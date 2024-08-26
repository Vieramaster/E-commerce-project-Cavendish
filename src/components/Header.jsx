import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.webp";
import BasketButton from "./BasketButton";
import ResponsiveButton from "./ResponsiveButton";
import IcoBarsResponsive from "../icons/IcoBarsResponsive";
import IcoCloseResponsive from "../icons/IcoCloseResponsive";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const responsiveClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="bg-esmerald h-20 w-full flex items-center justify-between px-5 relative">
      <div className="flex w-52 h-3/4 justify-start gap-3  items-center ">
        <img src={logo} alt="logo" className="h-full w-auto" />
        <h1 className="font-Oswald font-bold text-4xl text-white">etalon</h1>
      </div>
      <ResponsiveButton svg={<IcoBarsResponsive />} onClick={responsiveClick} />

      <div
        className={`bg-red-900  absolute z-50 flex flex-col w-1/2 h-screen top-0 justify-between ease-in-out duration-300  ${
          openNav ? "right-0 " : "-right-52"
        } `}
      >
        <div className="h-20 w-full flex justify-end items-center pr-5">
          <ResponsiveButton
            svg={<IcoCloseResponsive />}
            onClick={responsiveClick}
          />
        </div>
        <nav className="bg-green-400 w-full flex-1">
          <ul className="w-full h-full flex flex-col justify-center gap-5 text-center">
            <li className="bg-red-600 w-full h-10  grid place-content-center font-bold text-3xl text-white">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="bg-red-600 w-full h-10  grid place-content-center font-bold text-3xl text-white">
              <NavLink to={"/store"}>Store</NavLink>
            </li>
            <li className="bg-red-600 w-full h-auto  min-h-10 grid place-content-center font-bold text-3xl text-white">
              <NavLink to={"/NewArrivals"}>New Arrivals</NavLink>
            </li>
            <li className="bg-red-600 w-full h-10  grid place-content-center font-bold text-3xl text-white">
              <NavLink to={"/contact"}>Contact us</NavLink>
            </li>
          </ul>
        </nav>
        <BasketButton />
      </div>
    </header>
  );
}
