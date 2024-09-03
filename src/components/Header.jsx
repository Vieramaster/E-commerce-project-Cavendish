import { useState, useEffect, useRef } from "react";
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
  const [searchBar, setSearchBar] = useState(false);

  const openNav = () => {
    setSearchBar(false);
    setNavbar(!navbar);
  };
  const openSearch = () => {
    setNavbar(false);
    setSearchBar(!searchBar);
  };
  const useClickOutside = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [callback]);

    return ref;
  };

  const refSearch = useClickOutside(() => setSearchBar(false));
  const refNavBar = useClickOutside(() => setNavbar(false));

  return (
    <>
      <header className="flex flex-col w-screen h-21  z-50 fixed">
        <div className="h-7 w-full bg-carbon grid place-content-center ">
          <h2 className="text-white"> Free U.S. Shipping on Orders $125+</h2>
        </div>
        <div className="w-full h-16 flex justify-between  px-3">
          <div className="flex gap-3 w-auto h-full bg-green-300 flex-1 justify-start items-center ">
            <button onClick={openNav} aria-label="open responsive menu">
              <IcoBarsResponsive
                className={"w-10 h-10 stroke-white stroke-1"}
              />
            </button>

            <button aria-label="search button" onClick={openSearch}>
              <ICoSearch className={"w-7 h-7 stroke-white"} />
            </button>
          </div>
          <div className="h-full flex-auto bg-red-400 grid place-content-center">
            <NavLink to={"/"} className="text-white text-3xl">
              ETALON
            </NavLink>
          </div>
          <div className="h-full flex-1 bg-violet-500 flex justify-end">
            <button className="flex gap-2 h-full w-14 items-center ">
              <ICoShoppingCart className={"w-7 h-7 stroke-white"} />
              <span className="text-white text-xl">1</span>
            </button>
          </div>
        </div>
        <nav
          ref={refNavBar}
          className={`${
            navbar ? "left-0" : "-left-full"
          } bg-rose-500 absolute w-2/3 max-w-96 duration-700 ease-in-out flex flex-col justify-between h-menuScreen top-7`}
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
          <div className="bg-orange-500 flex flex-col justify-between flex-auto py-5 px-3">
            <ul className="text-white text-xl flex flex-col gap-2">
              <li>
                <NavLink to={"/NewArrivals"}>New Arrivals</NavLink>
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
            <ul className="text-white text-xl flex flex-col gap-2">
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

          <SocialBanner svgSize={"w-8 h-8"} classNameUl={"w-full h-12 "} />
        </nav>
        <fieldset
          ref={refSearch}
          className={`${
            searchBar ? "mt-0" : "-mt-12"
          } bg-carbon  relative h-12 w-screen  duration-500 ease-in-out grid place-content-center -z-20 `}
        >
          <input
            className="bg-yellow w-80 h-10 px-3 border-spacing-0 my-1 rounded-sm outline-none"
            type="search"
            name="search"
            id="search"
            aria-label="search bar"
            placeholder="
            What clothes are you looking for?"
          />
        </fieldset>
      </header>
    </>
  );
}
