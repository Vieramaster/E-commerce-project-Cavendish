import { useState, useCallback } from "react";
import { BarsResponsiveIco } from "../SVGs/icons";
import { Navbar, SearchModal } from "../modals";
import { useClickOutside } from "../hooks";
import {
  LogoButton,
  ShoppingNavButton,
  SearchButton,
  ResponsiveButton,
} from "../buttons";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsSearchBarOpen(false);
    setIsNavbarOpen((prevState) => !prevState);
  };

  const toggleSearchBar = useCallback(() => {
    setIsSearchBarOpen((prevState) => !prevState);
  }, []);

  const navbarRef = useClickOutside(() => setIsNavbarOpen(false));
  const searchModalRef = useClickOutside(() => setIsSearchBarOpen(false));

  return (
    <>
      <header className="flex flex-col w-full h-24 lg:h-28 z-50 fixed bg-darkEsmerald">
        <div className="h-7 w-full bg-carbon">
          <h2 className="text-white text-center">
            Free U.S. shipping on orders $125+
          </h2>
        </div>
        <div className="w-full flex-auto flex justify-between px-3">
          <div className="flex gap-3 w-auto h-full flex-1 justify-start items-center">
            <ResponsiveButton parentMethod={toggleNavbar} label="Open menu">
              <BarsResponsiveIco className="size-full stroke-white" />
            </ResponsiveButton>
            <SearchButton
              parentMethod={toggleSearchBar}
              active={isSearchBarOpen}
            />
          </div>
          <div className="h-full flex-auto grid place-content-center">
            <LogoButton />
          </div>
          <div className="h-full flex-1 flex justify-end items-center">
            <ShoppingNavButton />
          </div>
        </div>
        <Navbar
          componentRef={navbarRef}
          toggle={toggleNavbar}
          open={isNavbarOpen}
        />
      </header>
      <SearchModal
        toggle={toggleSearchBar}
        componentRef={searchModalRef}
        open={isSearchBarOpen}
      />
    </>
  );
};

export default Header;
