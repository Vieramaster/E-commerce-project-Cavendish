import { NavbarUL } from "../simpleContainers/NavbarUL";
import { NavListLinks } from "../links/NavListLinks";

/**
 * @type {{
 * path:string,
 * name:string
 * }[]}
 *
 */
export const ListEmprise = [

  { path: "/stores", name: "Stores" },
  { path: "/contact", name: "Contact" },
  { path: "/returns", name: "Returns & Exchanges" },
];

export const NavbarListData = () => {
  return (
    <NavbarUL>
      {ListEmprise.map(({ path, name }) => {
        return (
          <li key={name} aria-label={name}>
            <NavListLinks toPage={path} title={false}>
              {name}
            </NavListLinks>
          </li>
        );
      })}
    </NavbarUL>
  );
};
