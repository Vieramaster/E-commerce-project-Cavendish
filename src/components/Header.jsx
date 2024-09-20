import { useState } from "react";
import { NavLink } from "react-router-dom";

// ICONOS
import IcoBarsResponsive from "./SVGs/IcoBarsResponsive";
import IcoSearch from "./SVGs/IcoSearch";
import IcoShoppingCart from "./SVGs/IcoShoppingCart";

// COMPONENTES
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

  const refNavBar = useClickOutside(() => setNavbar(false));
  const searchModal = useClickOutside(() => setSearchBar(false));

  return (
    <>
      <header className="flex flex-col w-full h-24 lg:h-28 z-50 fixed bg-darkEsmerald">
        <div className="h-7 w-full bg-carbon grid place-content-center">
          <h2 className="text-white">Free U.S. shipping on orders $125+</h2>
        </div>
        <div className="w-full flex-auto flex justify-between px-3">
          <div className="flex gap-3 w-auto h-full flex-1 justify-start items-center">
            <button onClick={toggleNav} aria-label="open responsive menu">
              <IcoBarsResponsive className="w-10 h-10 stroke-white stroke-1 lg:w-14 lg:h-14" />
            </button>
            <button
              aria-label="search button"
              onClick={toggleSearch}
              disabled={searchBar}
              className={searchBar ? "opacity-30 cursor-not-allowed" : ""}
            >
              <IcoSearch className="w-7 h-7 stroke-white stroke-2 lg:w-10 lg:h-10" />
            </button>
          </div>
          <div className="h-full flex-auto grid place-content-center">
            <NavLink
              to="/"
              className="text-white text-2xl font-semibold tracking-wider sm:text-3xl lg:text-4xl"
            >
              ALIGATOR
            </NavLink>
          </div>
          <div className="h-full flex-1 flex justify-end items-center">
            <button className="flex gap-2 h-10 w-10 rounded-full items-center justify-center bg-yellow lg:h-14 lg:w-14">
              <IcoShoppingCart className="w-4 h-4 stroke-darkEsmerald stroke-2 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
        <Navbar refNavBar={refNavBar} toggleNav={toggleNav} navbar={navbar} />
      </header>

      <SearchModal
        toggleSearch={toggleSearch}
        searchModal={searchModal}
        searchBar={searchBar}
      />
    </>
  );
}
