import { LogoButton } from "../buttons/LogoButton";

/** @typedef {Array<{path:string, label:string}>} list*/
/** @typedef {Array<{key:string, title:string, items:list}>} listType*/

/** @type { listType} */
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

/**@returns {JSX.Element} */
export const FooterList = () => {
  return (
    <div className="w-full h-auto py-10 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between">
      <div className="py-10">
        <LogoButton />
      </div>
      {menuListFooter?.map(({ key, title, items }) => (
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
  );
};
