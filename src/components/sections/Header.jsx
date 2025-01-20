import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
// Components
import { NavbarShop } from "../modals/NavbarShop";
import { SearchModal } from "../modals/SearchModal";
import { useClickOutside } from "../../hooks/useClickOutside";
import { NavbarCartShop } from "../modals/NavbarCartShop";
// Buttons
import { PageLogo } from "../links/PageLogo";
import { HeaderButtonList } from "../lists/HeaderButtonList";

export const Header = () => {
  const [isNavbarShopOpen, setIsNavbarShopOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isNavbarCartOpen, setIsNavbarCartOpen] = useState(false);

  const params = useParams();
  const prevParamsRef = useRef({});

  // Toggles for individual modals
  const toggleNavbarShop = useCallback(() => {
    setIsSearchBarOpen(false);
    setIsNavbarCartOpen(false);
    setIsNavbarShopOpen((prev) => !prev);
  }, []);

  const toggleSearchBar = useCallback(() => {
    setIsNavbarCartOpen(false);
    setIsNavbarShopOpen(false);
    setIsSearchBarOpen((prev) => !prev);
  }, []);

  const toggleNavbarCart = useCallback(() => {
    setIsSearchBarOpen(false);
    setIsNavbarShopOpen(false);
    setIsNavbarCartOpen((prev) => !prev);
  }, []);

  // Refs
  const navbarShopRef = useRef(null);
  const searchModalRef = useRef(null);
  const navbarCartShopRef = useRef(null);

  // Close modals on click outside
  useClickOutside(navbarShopRef, () => setIsNavbarShopOpen(false));
  useClickOutside(searchModalRef, () => setIsSearchBarOpen(false));
  useClickOutside(navbarCartShopRef, () => setIsNavbarCartOpen(false));

  // Reset modals when route changes
  useEffect(() => {
    if (prevParamsRef.current && prevParamsRef.current !== params) {
      setTimeout(() => {
        setIsNavbarCartOpen(false);
        setIsNavbarShopOpen(false);
        setIsSearchBarOpen(false);
      }, 500);
    }
    prevParamsRef.current = params || {};
  }, [params]);

  return (
    <>
      <header className="bg-background flex flex-col w-full h-28 z-50 fixed border-b border-border">
        <div className="h-8 w-full bg-mainColor grid place-content-center flex-1">
          <p
            className="text-white text-center font-semibold font-sans text-sm"
            role="presentation"
          >
            Free standard shipping from $75 nationwide
          </p>
        </div>
        <div className="w-full mx-auto h-20 px-5 flex justify-between items-center md:px-0 sm:w-5/6">
          <PageLogo color="main" />
          <ul className="flex gap-5 w-auto h-full items-center justify-center text-lightTextColor">
            <HeaderButtonList
              toggleSearchBar={toggleSearchBar}
              toggleNavbarCart={toggleNavbarCart}
              toggleNavbarShop={toggleNavbarShop}
              isSearchBarOpen={isSearchBarOpen}
            />
          </ul>
        </div>

        <NavbarShop
          componentRef={navbarShopRef}
          toggle={toggleNavbarShop}
          open={isNavbarShopOpen}
        />
        <NavbarCartShop
          toggle={toggleNavbarCart}
          componentRef={navbarCartShopRef}
          open={isNavbarCartOpen}
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
