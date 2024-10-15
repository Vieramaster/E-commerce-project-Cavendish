//@ts-check
import React from "react";
import { SocialBanner } from "../SocialBanner";
import { ResponsiveButton } from "../buttons/ResponsiveButton";
import { CloseResponsiveIco } from "../SVGs/icons/CloseResponsiveIco";
import { NavbarListShop } from "../NavbarListShop";
import { NavbarListData } from "../NavbarListData";

/** @type {string} */
export const classNameObject =
  "relative before:w-0 before:h-[2px] before:bg-white before:absolute before:bottom-0 before:left-0 before:hover:w-full before:duration-500 before:ease-in-out";

/** @type {string} */
export const classNameUL =
  "text-white text-lg flex flex-col gap-2 mb-3 lg:text-2xl";

/**
 * @param {{componentRef:React.RefObject<HTMLElement>, toggle:VoidFunction, open:boolean}} props
 * @returns {JSX.Element}
 * */
export const Navbar = ({ toggle, componentRef, open }) => {
  return (
    <nav
      ref={componentRef}
      className={`${
        open ? "left-0" : "-left-full"
      } bg-carbon border-r-2 absolute min-h-[600px] w-2/3 max-w-96 duration-700 ease-in-out flex flex-col justify-between h-menuScreen top-7`}
    >
      <div className="w-full h-16 flex justify-end items-center bg-yellow-500">
        <ResponsiveButton onClick={toggle} aria-label="Close menu">
          <CloseResponsiveIco className="size-2/3 fill-yellow" />
        </ResponsiveButton>
      </div>
      <div className="flex flex-col justify-between flex-auto px-3">
        <NavbarListShop />
        <NavbarListData />
      </div>
      <SocialBanner />
    </nav>
  );
};
