import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.webp";
import BasketButton from "./BasketButton";
import ResponsiveButton from "./ResponsiveButton";
import IcoBarsResponsive from "../icons/IcoBarsResponsive";
import IcoCloseResponsive from "../icons/IcoCloseResponsive";
import IcoArrowList from "../icons/IcoArrowList";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [openUl, setOpenUl] = useState(false);

  const responsiveClick = () => {
    setOpenNav(!openNav);
  };

  const toggleSubMenu = () => {
    setOpenUl(!openUl);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpenNav(false);
        setOpenUl(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-esmerald h-32 w-full flex items-center justify-between px-14 relative">
      <div className="flex w-52 h-3/4 justify-start gap-3 items-center">
        <img src={logo} alt="logo" className="h-3/4 w-auto" />
        <h1 className="font-Oswald font-bold text-5xl text-white">etalon</h1>
      </div>
      <ResponsiveButton svg={<IcoBarsResponsive />} onClick={responsiveClick} />
      <nav
        className={`${
          openNav ? "right-0" : "-right-80"
        } bg-red-600 flex flex-col absolute w-3/4 max-w-80 h-screen z-50 top-0 ease-in-out duration-500 
                                    lg:relative lg:max-w-none lg:h-20 lg:z-0 lg:w-auto lg:right-0 lg:duration-0 lg:flex-row`}
      >
        <div className="h-20 w-full bg-green-300 flex justify-end items-center pr-5 lg:hidden">
          <ResponsiveButton
            svg={<IcoCloseResponsive />}
            onClick={responsiveClick}
          />
        </div>
        <ul className="flex flex-1 flex-col justify-start mt-20 gap-5 w-full px-5 overflow-scroll h-auto lg:flex-row lg:h-20 lg:mt-0 lg:items-center lg:overflow-auto">
          <li className="bg-pink-300 place-content-center text-3xl font-bold text-white lg:text-xl  ">
            <button
              className="flex gap-5 items-center justify-between w-full h-14 "
              onClick={toggleSubMenu}
            >
              <h2>Store</h2>
              <IcoArrowList
                addClass={
                  "w-6 h-6 fill-white origin-center lg:rotate-90 lg:w-5 h-5"
                }
              />
            </button>
          </li>
          <li className="bg-pink-300 h-14 place-content-center text-3xl font-bold text-white lg:text-xl">
            <NavLink to={"/New arrivals"}>New arrivals</NavLink>
          </li>
          <li className="bg-pink-300 h-14 place-content-center text-3xl font-bold text-white lg:text-xl">
            <NavLink to={"/Contact us"}>Contact us</NavLink>
          </li>
          <li className="bg-pink-300 h-14 place-content-center text-3xl font-bold text-white lg:text-xl">
            <NavLink to={"/Our stores"}>Our stores</NavLink>
          </li>
        </ul>
        <BasketButton addClass={"w-full h-20 bg-yellow lg:hidden"} />
      </nav>
      <BasketButton
        addClass={"hidden lg:flex h-16 w-16 rounded-full bg-yellow"}
      />
    </header>
  );
}
/*
            <ul className={`${openUl ? "block" : "hidden"} pt-5`}>
              <li className="h-14 text-2xl">
                <NavLink to={"/Sweaters"}>Sweaters</NavLink>
              </li>
              <li className="h-14 text-2xl">
                <NavLink to={"/T-shirts"}>T-shirts</NavLink>
              </li>
              <li className="h-14 text-2xl">
                <NavLink to={"/Jackets"}>Jackets</NavLink>
              </li>
              <li className="h-14 text-2xl">
                <NavLink to={"/Hoodies"}>Hoodies</NavLink>
              </li>
              <li className="h-14 text-2xl">
                <NavLink to={"/Shirts"}>Shirts</NavLink>
              </li>
              <li className="h-14 text-2xl">
                <NavLink to={"/Pants"}>Pants</NavLink>
              </li>
              <li className="h-14 text-2xl">
                <NavLink to={"/Coats"}>Coats</NavLink>
              </li>
            </ul>
*/
