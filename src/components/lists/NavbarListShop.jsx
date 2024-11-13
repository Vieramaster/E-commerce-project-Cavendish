import { NavListLinks } from "../links/NavListLinks";
import { NavbarUL } from "../simpleContainers/NavbarUL";

/**@type {Array<{path:string, name:string}>} */

export const listShop = [
  { path: "/new_arrivals", name: "New Arrivals" },
  { path: "/sweatshirts_and_hoodies", name: "Sweatshirts & Hoodies" },
  { path: "/jackets_and_coats", name: "Jackets & Coats" },
  { path: "/polos_and_t_shirts", name: "T-shirts & Polos" },
  { path: "/pants", name: "Pants & Jeans" },
  { path: "/sweaters", name: "Sweaters" },
  { path: "/shirts", name: "Shirts" },
];

export const NavbarListShop = () => {
  return (
    <NavbarUL>
      {listShop.map(({ path, name }, index) => {
        return (
          <li key={name} className={index === 0 ? "h-12 lg:h-14" : ""}>
            <NavListLinks toPage={path} title={index === 0 ? true : false}>
              {name}
            </NavListLinks>
          </li>
        );
      })}
    </NavbarUL>
  );
};
