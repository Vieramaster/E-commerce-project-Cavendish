import { BarsResponsiveIco } from "../SVGs/icons/BarsResponsiveIco";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";
import { SearchIco } from "../SVGs/icons/SearchIco";
import { BasicButton } from "../buttons/BasicButton";

/**@param {{toggleSearchBar: ()=>void, toggleCart: ()=>void,toggleNavbar: ()=>void, isSearchBarOpen: boolean}} props */
export const HeaderButtonList = ({
  toggleSearchBar,
  toggleCart,
  toggleNavbar,
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
    <ul className="flex  gap-5 w-auto h-full items-center justify-center text-lightTextColor ">
      {iconList.map(({ key, Component, handleEvent, label }, index) => {
        return (
          <li key={key} className="flex place-content-center ">
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
  );
};
