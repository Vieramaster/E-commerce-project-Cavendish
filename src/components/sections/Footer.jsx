//@ts-check
import React from "react";
import { FooterList } from "../FooterList";
import { ShopRules } from "../ShopRules";

/**@returns {JSX.Element} */
export const Footer = () => {
  return (
    <footer className="bg-carbon w-full h-auto text-lightGrey py-5">
      <div className="w-full h-full lg:w-5/6 m-auto">
        <ShopRules />
        <FooterList />
      </div>
    </footer>
  );
};
