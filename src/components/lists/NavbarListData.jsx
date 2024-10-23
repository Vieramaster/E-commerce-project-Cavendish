import { NavLink } from "react-router-dom";
import { classNameObject, classNameUL } from "../modals/Navbar";

/**@type {Array<{path:string, name:string}>} */
export const ListEmprise = [
  { path: "/Stores", name: "Stores" },
  { path: "/Contact", name: "Contact" },
  { path: "/Partner", name: "Partner with us" },
  { path: "/Help", name: "Help" },
];

/**@returns {JSX.Element} */
export const NavbarListData = () => {
  return (
    <ul className={classNameUL}>
      <li>
        <button className={classNameObject}>Log in/Register</button>
      </li>
      {ListEmprise.map((item) => (
        <li key={item.name}>
          <NavLink to={item.path} className={classNameObject}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
