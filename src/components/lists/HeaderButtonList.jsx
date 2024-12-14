import { BarsResponsiveIco } from "../SVGs/icons/BarsResponsiveIco";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";
import { SearchIco } from "../SVGs/icons/SearchIco";
import { BasicButton } from "../buttons/BasicButton";
import { useCart } from "../../hooks/useZustand";

/**@param {{toggleSearchBar: ()=>void, toggleNavbarCart: ()=>void,toggleNavbarShop: ()=>void, isSearchBarOpen: boolean}} props */
export const HeaderButtonList = ({
  toggleSearchBar,
  toggleNavbarCart,
  toggleNavbarShop,
  isSearchBarOpen,
}) => {
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
      handleEvent: toggleNavbarCart,
      label: "View shopping cart",
    },
    {
      Component: BarsResponsiveIco,
      key: "OpenResponsive",
      handleEvent: toggleNavbarShop,
      label: "Open navigation menu",
    },
  ];
  const { cart } = useCart();

  return (
    <ul className="flex  gap-5 w-auto h-full items-center justify-center text-lightTextColor ">
      {iconList.map(({ key, Component, handleEvent, label }, index) => {
        return (
          <li key={key} className="flex place-content-center ">
            <BasicButton
              responsive={index === 2 ? true : false}
              onClick={handleEvent}
              aria-label={label}
              disabled={index === 0 && isSearchBarOpen ? true : false}
              relative={index === 1}
            >
              {index === 1 && cart.length > 0 ? (
                <span className="absolute size-4 rounded-full -right-1 -bottom-1 bg-background flex place-content-center items-center lg:size-5">
                  <span className="bg-mainColor size-[0.6rem] rounded-full  m-0 lg:size-3"></span>
                </span>
              ) : null}

              <Component />
            </BasicButton>
          </li>
        );
      })}
    </ul>
  );
};
