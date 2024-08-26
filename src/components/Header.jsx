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
    <header className="bg-esmerald h-20 w-full flex items-center justify-between px-5 relative ">
      <div className="flex w-52 h-3/4 justify-start gap-3  items-center ">
        <img src={logo} alt="logo" className="h-3/4 w-auto" />
        <h1 className="font-Oswald font-bold text-5xl text-white">etalon</h1>
      </div>
      <ResponsiveButton
        svg={openNav ? <IcoCloseResponsive /> : <IcoBarsResponsive />}
        onClick={responsiveClick}
      />

      <nav
        className={`${
          openNav ? "right-0" : "-right-full"
        } bg-red-500 absolute max-w-64 w-3/4 h-screen flex-col items-center   top-20 `}
      >
        <ul className="flex flex-col gap-5 w-full h-full items-center justify-start pt-10">
          <li className="">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <ul className="flex flex-col gap-5 w-full h-full items-center">
              <span>
                <h2>Store</h2>
              </span>
              <li>
                <NavLink to={"/sweaters"}>Sweaters</NavLink>
              </li>
              <li>
                <NavLink to={"/jackets"}>jackets</NavLink>
              </li>
              <li>
                <NavLink to={"/T-shirts"}>T-shirts</NavLink>
              </li>
              <li>
                <NavLink to={"/Hoodies"}>Hoodies</NavLink>
              </li>
              <li>
                <NavLink to={"/Shirts"}>Shirts</NavLink>
              </li>
              <li>
                <NavLink to={"/Pants"}>Pants</NavLink>
              </li>
            </ul>
          </li>
          <li className="">
            <NavLink to={"/NewArrivals"}>New Arrivals</NavLink>
          </li>
          <li className="">
            <NavLink to={"/contact"}>Contact us</NavLink>
          </li>
        </ul>
        <BasketButton />
      </nav>
    </header>
  );
}

/*https://legacy.vteximg.com.br/scripts/json2.js?v=1.0.0.0*/
