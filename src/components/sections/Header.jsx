import { useState, useCallback, useRef } from "react";
// Components
import { Navbar } from "../modals/Navbar";
import { SearchModal } from "../modals/SearchModal";
import { useClickOutside } from "../../hooks/useClickOutside";
// Buttons
import { PageLogo } from "../links/PageLogo";
import { BasicButton } from "../buttons/BasicButton";
// Icons
import { BarsResponsiveIco } from "../SVGs/icons/BarsResponsiveIco";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";
import { SearchIco } from "../SVGs/icons/SearchIco";

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsSearchBarOpen(false);
    setIsNavbarOpen((prev) => !prev);
  }, []);

  const toggleSearchBar = useCallback(() => {
    setIsSearchBarOpen((prev) => !prev);
  }, []);

  const toggleCart = () => {};
  const navbarRef = useRef(null);
  const searchModalRef = useRef(null);

  useClickOutside(navbarRef, () => setIsNavbarOpen(false));

  useClickOutside(searchModalRef, () => setIsSearchBarOpen(false));

  /** @type {Array<{Component: React.ComponentType, key: string, handleEvent: () => void, label: string}>} */
  const iconList = [
    {
      Component: SearchIco,
      key: "searchButton",
      handleEvent: toggleSearchBar,
      label: "Toggle search bar",
    },
    {
      Component: ShoppingCartIco,
      key: "ShoppingCart",
      handleEvent: toggleCart,
      label: "View shopping cart",
    },
    {
      Component: BarsResponsiveIco,
      key: "OpenResponsive",
      handleEvent: toggleNavbar,
      label: "Open navigation menu",
    },
  ];

  return (
    <>
      <header className=" bg-background flex flex-col w-full h-28 z-50 fixed border-b border-border">
        <div className="h-8 w-full bg-mainColor grid place-content-center flex-1">
          <p
            className="text-contrast text-center font-semibold font-sans text-sm"
            role="presentation"
          >
            Free standard shipping from $75 nationwide
          </p>
        </div>
        <div className="w-full mx-auto h-20 px-5 flex justify-between items-center md:px-0 md:w-5/6">
          <PageLogo color="main"/>
          <ul className="flex  gap-5 w-auto h-full items-center justify-center text-lightTextColor ">
            {iconList.map(({ key, Component, handleEvent, label }, index) => {
              return (
                <li key={key} className="flex place-content-center">
                  <BasicButton
                    responsive={index === 2 ? true : false}
                    onClick={handleEvent}
                    aria-label={label}
                    disabled={index === 0 && isSearchBarOpen ? true : false}
                  >
                    <Component />
                  </BasicButton>
                </li>
              );
            })}
          </ul>
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
