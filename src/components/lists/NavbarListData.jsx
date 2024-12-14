import { NavbarUL } from "../simpleContainers/NavbarUL";
import { NavListLinks } from "../links/NavListLinks";

/**@type {Array<{path:string, name:string}>} */
export const ListEmprise = [
  { path: "/Login_and_Registrer", name: "Log in/Register" },
  { path: "/Stores", name: "Stores" },
  { path: "/Contact", name: "Contact" },
  { path: "/Partner", name: "Partner with us" },
  { path: "/Help", name: "Help" },
];

export const NavbarListData = () => {
  return (
    <NavbarUL>
      {ListEmprise.map(({ path, name }, index) => {
        return (
          <li key={index + name}>
            <NavListLinks toPage={path} title={false}>
              {name}
            </NavListLinks>
          </li>
        );
      })}
    </NavbarUL>
  );
};
