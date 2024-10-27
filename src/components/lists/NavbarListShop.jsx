import { NavLink } from "react-router-dom";
import { classNameObject, classNameUL } from "../modals/Navbar";

/**@type {Array<{path:string, name:string}>} */
export const listShop = [
  { path: "/new_arrivals", name: "New Arrivals" },
  { path: "/sweatshirts_and_hoodies", name: "Sweatshirts & Hoodies" },
  { path: "/jackets_and_coats", name: "Jackets & Coats" },
  { path: "/polos_and_t-shirts", name: "T-shirts & Polos" },
  { path: "/pants", name: "Pants & Jeans" },
  { path: "/sweaters", name: "Sweaters" },
  { path: "/shirts", name: "Shirts" },
];

/**@returns {JSX.Element} */
export const NavbarListShop = () => {
  return (
    <ul className={classNameUL}>
      {listShop.map((item, index) => (
        <li className={`${index === 0 ? "h-12 lg:h-14" : ""}`} key={item.name}>
          <NavLink
            to={item.path}
            className={`${
              index === 0 ? "text-3xl lg:text-4xl text-yellow" : ""
            } ${classNameObject}`}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
