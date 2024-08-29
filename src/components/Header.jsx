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

  const mouseLeaveUl = () => {
    if (window.innerWidth >= 1024) {
      setOpenUl(false);
    }
  };

  const submenuStyle =
    "h-14 text-2xl pl-2 font-medium  lg:flex lg:items-center lg:pl-0 lg:text-grey lg:hover:text-white duration-200 ease-in";
  const menuStyle =
    "h-14 place-content-center text-3xl font-bold text-white lg:text-grey lg:hover:text-white lg:duration-100 lg:ease-in lg:text-xl";

    
  return (
    <header className="bg-esmerald h-24 w-full flex items-center justify-between px-5 lg:px-14 fixed">
      <div className="flex w-52 h-3/4 justify-start gap-3 items-center">
        <img src={logo} alt="logo" className="h-3/4 w-auto" />
        <h1 className="font-Oswald font-bold text-5xl text-white">etalon</h1>
      </div>
      <ResponsiveButton svg={<IcoBarsResponsive />} onClick={responsiveClick} />
      <nav
        className={`${
          openNav ? "right-0" : "-right-80"
        } flex flex-col absolute w-3/4 max-w-80 h-screen z-50 top-0 ease-in-out duration-500 bg-dark-esmerald min-h-[350px] lg:relative lg:max-w-none lg:h-20 lg:z-0 lg:w-auto lg:right-0 lg:duration-0 lg:flex-row  lg:min-h-20 lg:bg-transparent`}
      >
        <div className="h-24 w-full flex justify-end items-center pr-5 lg:hidden">
          <ResponsiveButton
            svg={<IcoCloseResponsive />}
            onClick={responsiveClick}
          />
        </div>
        <ul className="flex flex-1 flex-col justify-start mt-20 gap-5 w-full px-5 overflow-y-auto h-auto lg:flex-row lg:h-20 lg:mt-0 lg:items-center lg:overflow-visible lg:gap-10 lg:cursor-pointer">
          <li
            onMouseLeave={mouseLeaveUl}
            className="place-content-center relative text-3xl font-bold text-white lg:text-grey lg:hover:text-white lg:duration-100 lg:ease-in lg:text-xl group "
          >
            <button
              className="flex gap-5 items-center justify-between w-full lg:h-24"
              onClick={toggleSubMenu}
              aria-expanded={openUl}
              aria-controls="submenu"
            >
              <h2>Store</h2>
              <IcoArrowList isOpen={openUl} />
            </button>
            <ul
              id="submenu"
              className={`${
                openUl ? "block" : "hidden"
              } pt-5 lg:absolute  lg:w-44 lg:-right-8 lg:rounded-b-md lg:bg-dark-esmerald`}
            >
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/Sweaters">
                  Sweaters
                </NavLink>
              </li>
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/T-shirts">
                  T-shirts
                </NavLink>
              </li>
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/Jackets">
                  Jackets
                </NavLink>
              </li>
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/Hoodies">
                  Hoodies
                </NavLink>
              </li>
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/Shirts">
                  Shirts
                </NavLink>
              </li>
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/Pants">
                  Pants
                </NavLink>
              </li>
              <li className={submenuStyle}>
                <NavLink className={" m-auto "} to="/Coats">
                  Coats
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={menuStyle}>
            <NavLink to="/New arrivals">New arrivals</NavLink>
          </li>
          <li className={menuStyle}>
            <NavLink to="/Contact us">Contact us</NavLink>
          </li>
          <li className={menuStyle}>
            <NavLink to="/Our stores">Our stores</NavLink>
          </li>
        </ul>
        <BasketButton addClass="w-full h-20 bg-yellow lg:hidden" />
      </nav>

      <BasketButton
        addClass={
          "hidden h-16 w-16 rounded-full bg-yellow lg:grid lg:place-content-center"
        }
      />
    </header>
  );
}
