import { useState, useCallback, useRef } from "react";
// Components
import { Navbar } from "../modals/Navbar";
import { SearchModal } from "../modals/SearchModal";
import { useClickOutside } from "../hooks/useClickOutside";
// Buttons
import { LogoButton } from "../buttons/LogoButton";
import { ShoppingNavButton } from "../buttons/ShoppingNavButton";
import { SearchButton } from "../buttons/SearchButton";
import { ResponsiveButton } from "../buttons/ResponsiveButton";
// Icons
import { BarsResponsiveIco } from "../SVGs/icons/BarsResponsiveIco";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";
import { SearchIco } from "../SVGs/icons/SearchIco";

export const Header = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsSearchBarOpen(false);
    setIsNavbarOpen((prevState) => !prevState);
  }, []);

  const toggleSearchBar = useCallback(() => {
    setIsSearchBarOpen((prevState) => !prevState);
  }, []);

  const navbarRef = useRef(null);
  const searchModalRef = useRef(null);

  useClickOutside(navbarRef, () => setIsNavbarOpen(false));

  useClickOutside(searchModalRef, () => setIsSearchBarOpen(false));

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
            <ResponsiveButton onClick={toggleNavbar} aria-label="Open menu">
              <BarsResponsiveIco className="size-full stroke-white" />
            </ResponsiveButton>
            <SearchButton onClick={toggleSearchBar} active={isSearchBarOpen}>
              <SearchIco className="size-7 stroke-white stroke-2 lg:size-10" />
            </SearchButton>
          </div>
          <div className="h-full flex-auto grid place-content-center">
            <LogoButton />
          </div>
          <div className="h-full flex-1 flex justify-end items-center">
            <ShoppingNavButton aria-label="listShop">
              <ShoppingCartIco className="size-4 stroke-darkEsmerald stroke-2 lg:size-8" />
            </ShoppingNavButton>
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
