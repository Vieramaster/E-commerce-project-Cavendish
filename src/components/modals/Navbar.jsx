import { NavLink } from "react-router-dom";
import SocialBanner from "../cards/SocialBanner";
import { ResponsiveButton } from "../buttons";
import { CloseResponsiveIco } from "../SVGs/icons";

const listShop = [
  { path: "/NewArrivals", name: "New Arrivals" },
  { path: "/SweatersAndHoodies", name: "Sweaters & hoodies" },
  { path: "/JacketsAndCoats", name: "Jackets & coats" },
  { path: "/T-shirtsAndShirts", name: "T-shirts & shirts" },
  { path: "/Pants", name: "Pants" },
  { path: "/Shoes", name: "Shoes" },
];

const ListEmprise = [
  { path: "/Stores", name: "Stores" },
  { path: "/Contact", name: "Contact" },
  { path: "/Partner", name: "Partner with us" },
  { path: "/Help", name: "Help" },
];

const classNameBefore =
  "relative before:w-0 before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0 before:hover:w-full before:duration-500 before:ease-in-out";

const classUL = "text-white text-lg flex flex-col gap-2 mb-3 lg:text-2xl";

export default function Navbar({ componentRef, toggle, open }) {
  return (
    <nav
      ref={componentRef}
      className={`${
        open ? "left-0" : "-left-full"
      } bg-carbon border-r-2 absolute min-h-[600px] w-2/3 max-w-96 duration-700 ease-in-out flex flex-col justify-between h-menuScreen top-7`}
    >
      <div className="w-full h-16 flex justify-end items-center bg-yellow-500">
        <ResponsiveButton parentMethod={toggle} label="Close menu">
          <CloseResponsiveIco className="size-2/3 fill-yellow" />
        </ResponsiveButton>
      </div>
      <div className="flex flex-col justify-between flex-auto px-3">
        <ul className={classUL}>
          {listShop.map((item, index) => (
            <li
              className={`${index === 0 ? "h-12 lg:h-14" : ""}`}
              key={item.name}
            >
              <NavLink
                to={item.path}
                className={`${
                  index === 0 ? "text-3xl lg:text-4xl text-yellow" : ""
                } ${classNameBefore}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={classUL}>
          <li>
            <button className={classNameBefore}>Log in/Register</button>
          </li>
          {ListEmprise.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} className={classNameBefore}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <SocialBanner />
    </nav>
  );
}
