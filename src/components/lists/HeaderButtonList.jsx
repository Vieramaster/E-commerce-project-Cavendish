import { BarsResponsiveIco } from "../SVGs/icons/BarsResponsiveIco";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";
import { SearchIco } from "../SVGs/icons/SearchIco";
import { BasicButton } from "../buttons/BasicButton";
import { useCart } from "../../hooks/useZustand";

/**
 * @param {{
 *  toggleSearchBar: () => void,
 *  toggleNavbarCart: () => void,
 *  toggleNavbarShop: () => void,
 *  isSearchBarOpen: boolean
 * }} props
 */
export const HeaderButtonList = ({
  toggleSearchBar,
  toggleNavbarCart,
  toggleNavbarShop,
  isSearchBarOpen,
}) => {
  /**
   * @type {{
   *    Component: React.ComponentType,
   *    key: string, handleEvent: () => void,
   *    label: string
   *    }[]
   * }
   * */
  const iconList = [
    {
      Component: SearchIco,
      key: "searchButton",
      handleEvent: toggleSearchBar,
      label: "Toggle search bar",
    },
    {
      Component: ShoppingCartIco,
      key: "shoppingCart",
      handleEvent: toggleNavbarCart,
      label: "View shopping cart",
    },
    {
      Component: BarsResponsiveIco,
      key: "openResponsive",
      handleEvent: toggleNavbarShop,
      label: "Open navigation menu",
    },
  ];

  const { cart } = useCart();

  return (
    <ul className="flex gap-5 h-full items-center justify-center text-lightTextColor">
      {iconList.map(({ key, Component, handleEvent, label }, index) => (
        <li key={key} className="flex place-content-center relative">
          <BasicButton
            responsive={index === 2}
            onClick={handleEvent}
            aria-label={label}
            disabled={index === 0 && isSearchBarOpen}
            relative={index === 1}
          >
            <Component />
            {index === 1 && cart.length > 0 && (
              <span
                className="absolute size-4 rounded-full -right-1 -bottom-1 bg-background flex place-content-center items-center lg:size-5"
                aria-hidden="true"
              >
                <span className="bg-mainColor size-[0.6rem] rounded-full m-0 lg:size-3"></span>
              </span>
            )}
          </BasicButton>
        </li>
      ))}
    </ul>
  );
};
