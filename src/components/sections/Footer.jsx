import { FooterList } from "../lists/FooterList";
import { ShopRules } from "../lists/ShopRules";

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
