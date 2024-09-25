import { useState } from "react";
import { NavLink } from "react-router-dom";

// COMPONENTES
import useClickOutside from "../hooks/useClickOutside";
import SearchModal from "../modals/SearchModal";
import Navbar from "../modals/Navbar";
import SearchButton from "../buttons/Searchbutton";
import ResponsiveButton from "../buttons/Responsivebutton";
import ShoppingNavButton from "../buttons/ShoppingNavbutton";

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
            <ResponsiveButton onClick={toggleNav} />
            <SearchButton onClick={toggleSearch} boolean={searchBar} />
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
            <ShoppingNavButton />
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
