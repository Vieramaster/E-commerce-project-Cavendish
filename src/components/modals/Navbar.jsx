import { SocialBanner } from "../lists/SocialBanner";
import { XIco } from "../SVGs/icons/XIco";
import { NavbarListShop } from "../lists/NavbarListShop";
import { NavbarListData } from "../lists/NavbarListData";
import { BasicButton } from "../buttons/BasicButton";

export const classNameObject =
  /** @type {string} */
  "relative before:w-0 before:h-[2px] before:bg-lightTextColor before:absolute before:bottom-0 before:left-0 before:hover:w-full before:duration-500 before:ease-in-out font-alternative font-normal text-links";

export const classNameUL =
  /** @type {string} */
  "text-textColor  text-lg flex flex-col gap-2 mb-3 lg:text-2xl";

/**
 * @param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props
 * */
export const Navbar = ({ toggle, componentRef, open }) => {
  return (
    <nav
      ref={componentRef}
      className={`${
        open ? "right-0" : "-right-full"
      } bg-background border-l-2 border-textColor absolute min-h-[600px]  h-svh w-2/3 max-w-96 duration-700 ease-in-out flex flex-col justify-between`}
    >
      <div className="w-full h-20 flex justify-end items-center p-3 ">
        <BasicButton
          onClick={toggle}
          aria-label="Close menu"
          responsive={false}
        >
          <XIco />
        </BasicButton>
      </div>
      <div className="flex flex-col justify-between flex-auto px-3 py-5 ">
        <NavbarListShop />
        <NavbarListData />
      </div>
      <SocialBanner />
    </nav>
  );
};
