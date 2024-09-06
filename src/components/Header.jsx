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
      <header className="flex flex-col w-screen h-21  z-50 fixed bg-dark-esmerald">
        <div className="h-7 w-full bg-carbon grid place-content-center ">
          <h2 className="text-white"> Free U.S. shipping on orders $125+</h2>
        </div>
        <div className="w-full h-16 flex justify-between  px-3">
          <div className="flex gap-3 w-auto h-full  flex-1 justify-start items-center ">
            <button onClick={toggleNav} aria-label="open responsive menu">
              <IcoBarsResponsive
                className={"w-10 h-10 stroke-white stroke-1"}
              />
            </button>

            <button
              aria-label="search button"
              onClick={toggleSearch}
              disabled={searchBar}
              className={`${searchBar ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ICoSearch className={"w-7 h-7 stroke-white"} />
            </button>
          </div>
          <div className="h-full flex-auto grid place-content-center">
            <NavLink
              to={"/"}
              className="text-white text-3xl font-semibold tracking-wider "
            >
              VANQUISH
            </NavLink>
          </div>
          <div className="h-full flex-1  flex justify-end">
            <button className="flex gap-2 h-full w-14 items-center ">
              <ICoShoppingCart className={"w-7 h-7 stroke-white"} />
              <span className="text-white text-xl">1</span>
            </button>
          </div>
        </div>
        <Navbar {...{ refNavBar, toggleNav, navbar }} />
      </header>

      <SearchModal {...{ toggleSearch, searchModal, searchBar }} />
    </>
  );
}
