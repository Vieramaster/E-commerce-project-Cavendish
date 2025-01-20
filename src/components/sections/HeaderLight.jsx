import { PageLogo } from "../links/PageLogo";

/** @param {{isHidden:boolean}} props */
export const HeaderLight = ({ isHidden }) => {

  const showHeader = isHidden && "hidden";

  return (
    <header
      className={` w-full 
          h-20  
          grid 
          place-content-center 
          ${showHeader}`}
    >
      <PageLogo color="main" />
    </header>
  );
};
