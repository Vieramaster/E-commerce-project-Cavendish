import { NavLink } from "react-router-dom";
import { classNameObject, classNameUL } from "../modals/Navbar";

/**@type {Array<{path:string, name:string}>} */
export const listShop = [
  { path: "/NewArrivals", name: "New Arrivals" },
  { path: "/SweatshirtsAndHoodies", name: "Sweatshirts & Hoodies" },
  { path: "/JacketsAndCoats", name: "Jackets & Coats" },
  { path: "/T-shirtsAndPolos", name: "T-shirts & Polos" },
  { path: "/Pants", name: "Pants & Jeans" },
  { path: "/Sweaters", name: "Sweaters" },
  { path: "/Shirts", name: "Shirts" }
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
