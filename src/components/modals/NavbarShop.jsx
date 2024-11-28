import { NavbarComponent } from "../simpleContainers/NavbarComponent";
import { SocialBanner } from "../lists/SocialBanner";
import { NavbarListShop } from "../lists/NavbarListShop";
import { NavbarListData } from "../lists/NavbarListData";
import { NavbarCloseComponent } from "../NavbarCloseComponent";

/**@param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props*/
export const NavbarShop = ({ toggle, componentRef, open }) => {
  return (
    <NavbarComponent {...{ componentRef, open }} isCart={false}>
      <NavbarCloseComponent {...{ toggle }} />
      <div className="flex flex-col justify-between flex-auto px-3 py-5 ">
        <NavbarListShop />
        <NavbarListData />
      </div>
      <SocialBanner />
    </NavbarComponent>
  );
};
