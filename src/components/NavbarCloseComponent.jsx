import { BasicButton } from "./buttons/BasicButton";
import { XIco } from "./SVGs/icons/XIco";


/**@param {{toggle:()=>void }} props */
export const NavbarCloseComponent = ({ toggle }) => {
  return (
    <div className=" w-full h-20 flex justify-end items-center p-5">
      <BasicButton onClick={toggle} aria-label="Close menu" responsive={false} relative>
        <XIco />
      </BasicButton>
    </div>
  );
};
