// COMPONENTS
import LogoButton from "../buttons/LogoButton";
import { NavLink } from "react-router-dom";

// ICONS
import TruckICo from "../SVGs/icons/TruckIco";
import CoinIco from "../SVGs/icons/CoinIco";
import ReplaceIco from "../SVGs/icons/ReplaceIco";
import ShieldDolar from "../SVGs/icons/ShieldDolar";

const bannerIcons = [
  { name: "Shipping", Component: TruckICo, title: "Free Shipping & Returns" },
  { name: "Guarantee", Component: CoinIco, title: "100% Money Back Guarantee" },
  {
    name: "Replacement",
    Component: ReplaceIco,
    title: "Replacement in Case of Defect",
  },
  { name: "Secure", Component: ShieldDolar, title: "Safe and Secure Checkout" },
];

const menuListFooter = [
  {
    key: "HelpAndInformation",
    title: "Help & Information",
    items: [
      { path: "Help", label: "Help" },
      { path: "trackOrder", label: "Track order" },
      { path: "DeliveryAndReturns", label: "Delivery & returns" },
    ],
  },
  {
    key: "AboutAligator",
    title: "About Aligator",
    items: [
      { path: "AboutUs", label: "About us" },
      { path: "Careers", label: "Careers of Aligator" },
      { path: "InvestorsSite", label: "Investors site" },
    ],
  },
  {
    key: "MoreFromAligator",
    title: "More From Aligator",
    items: [
      { path: "Mobile", label: "Mobile and apps" },
      { path: "GiftVouchers", label: "Gift vouchers" },
      { path: "BlackFriday", label: "Black friday" },
    ],
  },
];

const footerClass =
  "w-full h-auto py-10 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between";

export default function Footer() {
  return (
    <footer className="bg-carbon w-full h-auto text-lightGrey py-5">
      <div className="w-full h-full lg:w-5/6 m-auto">
        <div className={`${footerClass} border-b-2 border-lightCarbon`}>
          {bannerIcons.map(({ Component, title, name }) => (
            <div key={name}>
              <Component size="size-10" />
              <p className="text-center mt-3">{title}</p>
            </div>
          ))}
        </div>
        <div className={footerClass}>
          <div className="py-10">
            <LogoButton />
          </div>
          {menuListFooter.map(({ key, title, items }) => (
            <div key={key} className="py-10">
              <h3 className="text-xl">{title}</h3>
              <ul className="mt-5">
                {items.map(({ path, label }) => (
                  <li key={path}>
                    <a
                      className="text-darkGrey hover:text-yellow duration-200 ease-in-out"
                      href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
