import { useState } from "react";
import { NavLink } from "react-router-dom";

//ICOS
import IcoBarsResponsive from "../icons/IcoBarsResponsive";
import ICoSearch from "../icons/ICoSearch";
import ICoShoppingCart from "../icons/ICoShoppingCart";

//COMPONENTS
import useClickOutside from "./hooks/useClickOutside";
import SearchModal from "./SearchModal";
import Navbar from "./NavBar";
import IcoSearch from "../icons/ICoSearch";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const toggleNav = () => {
    setSearchBar(false);
    setNavbar(!navbar);
  };

  const toggleSearch = () => {
    setSearchBar(!searchBar);
  };
  if (searchBar === true) {
  }

  console.log(searchBar);
  const refNavBar = useClickOutside(() => setNavbar(false));
  const searchModal = useClickOutside(() => setSearchBar(false));
  return (
    <>
      <header className="flex flex-col w-full h-24 lg:h-28 z-50 fixed bg-darkEsmerald">
        <div className="h-7 w-full bg-carbon grid place-content-center ">
          <h2 className="text-white"> Free U.S. shipping on orders $125+</h2>
        </div>
        <div className="w-full flex-auto flex justify-between  px-3 ">
          <div className="flex gap-3 w-auto h-full  flex-1 justify-start items-center ">
            <button onClick={toggleNav} aria-label="open responsive menu">
              <IcoBarsResponsive
                className={"w-10 h-10 stroke-white stroke-1 lg:w-14 lg:h-14"}
              />
            </button>

            <button
              aria-label="search button"
              onClick={toggleSearch}
              disabled={searchBar}
              className={`${
                searchBar ? "opacity-30 cursor-not-allowed" : ""
              } xl:hidden`}
            >
              <ICoSearch
                className={"w-7 h-7 stroke-customGrey stroke-2 lg:w-10 lg:h-10"}
              />
            </button>
            <fieldset className="hidden xl:flex bg-white h-10 w-60 px-3 xl:w-80 rounded-sm">
              <span className=" h-full w-10  grid place-content-center bg-white ">
                <IcoSearch className={"stroke-gray-400 w-8 h-8 stroke-2"} />
              </span>
              <input
                className=" outline-none w-full h-full pl-3 text-gray "
                type="search"
                name="search"
                id="search"
                aria-label="search bar"
                placeholder="What are you looking for?"
              />
            </fieldset>
          </div>
          <div className="h-full flex-auto grid place-content-center">
            <NavLink
              to={"/"}
              className="text-white text-2xl font-semibold tracking-wider sm:text-3xl lg:text-4xl"
            >
              VANQUISH
            </NavLink>
          </div>
          <div className="h-full flex-1  flex justify-end items-center">
            <button className="flex gap-2 h-12 rounded-full w-12 items-center justify-center bg-yellow lg:h-16 lg:w-16 ">
              <ICoShoppingCart className={"w-6 h-6 stroke-darkEsmerald stroke-2 lg:w-10 lg:h-10"} />

            </button>
          </div>
        </div>
        <Navbar {...{ refNavBar, toggleNav, navbar }} />
      </header>

      <SearchModal {...{ toggleSearch, searchModal, searchBar }} />
    </>
  );
}
