import { NavLink } from "react-router-dom";

//COMPONENTS
import SocialBanner from "../SocialBanner";
import CloseButton from "../buttons/CloseButton";

const classNameBefore =
  "relative before:w-0 before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0 before:hover:w-full before:duration-500 before:ease-in-out";

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

export default function Navbar({ refNavBar, toggleNav, navbar }) {
  return (
    <nav
      ref={refNavBar}
      className={`${
        navbar ? "left-0" : "-left-full"
      } bg-carbon border-r-2 absolute min-h-[600px] w-2/3 max-w-96 duration-700 ease-in-out flex flex-col justify-between h-menuScreen top-7`}
    >
      <div className="w-full h-16 flex justify-end items-center bg-yellow-500">
        <CloseButton
          onClick={toggleNav}
          className={"w-10 h-10 mr-3 grid place-content-center fill-yellow"}
        />
      </div>
      <div className="flex flex-col justify-between flex-auto px-3">
        <ul className="text-white text-lg flex flex-col gap-2 lg:text-2xl">
          {listShop.map((item, index) => (
            <li
              className={`${index === 0 ? "h-12 lg:h-14" : ""}`}
              key={item.name}
            >
              <NavLink
                href={item.path}
                className={`${
                  index === 0 ? "text-3xl lg:text-4xl text-yellow" : ""
                } ${classNameBefore}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="text-white text-lg flex flex-col gap-2 mb-3 lg:text-2xl">
          <li>
            <button className={classNameBefore}>Log in/Register</button>
          </li>
          {ListEmprise.map((item, index) => {
            return (
              <li key={item.name}>
                <NavLink
                  href={item.path}
                  className={classNameBefore}
                  key={index}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <SocialBanner
        svgSize="w-8 h-8 hover:stroke-yellow duration-300 ease-in-out lg:w-10 lg:h-10"
        classNameUl="w-full h-12 lg:h-20"
      />
    </nav>
  );
}
