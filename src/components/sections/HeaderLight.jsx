import { PageLogo } from "../links/PageLogo";

/** @param {{isHidden:boolean}} props */
export const HeaderLight = ({ isHidden }) => {
  return (
    <header
      className={`${
        isHidden && "hidden"
      } w-full h-20  grid place-content-center`}
    >
      <PageLogo color="main" />
    </header>
  );
};
