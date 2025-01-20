import { NavListLinks } from "../links/NavListLinks";
import { NavbarUL } from "../simpleContainers/NavbarUL";

/**@type {Array<{path:string, name:string}>} */

export const listShop = [
  { path: "/shop/new_arrivals", name: "New Arrivals" },
  { path: "/shop/sweatshirts_and_hoodies", name: "Sweatshirts & Hoodies" },
  { path: "/shop/jackets_and_coats", name: "Jackets & Coats" },
  { path: "/shop/t_shirts_and_polos", name: "T-shirts & Polos" },
  { path: "/shop/pants_and_jeans", name: "Pants & Jeans" },
  { path: "/shop/sweaters", name: "Sweaters" },
  { path: "/shop/shirts", name: "Shirts" },
  { path: "/shop/shoes", name: "Shoes" },
];

export const NavbarListShop = () => {
  return (
    <NavbarUL>
      {listShop.map(({ path, name }, index) => {
        return (
          <li key={name} className={index === 0 ? "h-12 lg:h-14" : ""}>
            <NavListLinks toPage={path} title={index === 0 }>
              {name}
            </NavListLinks>
          </li>
        );
      })}
    </NavbarUL>
  );
};
