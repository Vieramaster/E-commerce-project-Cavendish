import { PageLogo } from "../links/PageLogo";

/** @typedef {{path:string, label:string}[]} list*/
/** @typedef {{key:string, title:string, items:list}[]} listType*/

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
    key: "AboutCavendish",
    title: "About Cavendish",
    items: [
      { path: "AboutUs", label: "About us" },
      { path: "Careers", label: "Careers of Cavendish" },
      { path: "InvestorsSite", label: "Investors site" },
    ],
  },
  {
    key: "MoreFromCavendish",
    title: "More From Cavendish",
    items: [
      { path: "Mobile", label: "Mobile and apps" },
      { path: "GiftVouchers", label: "Gift vouchers" },
      { path: "BlackFriday", label: "Black friday" },
    ],
  },
];

export const FooterList = () => {
  return (
    <div className="w-full h-auto py-10 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between">
      <div className="py-10">
        <PageLogo color="white" />
      </div>
      {menuListFooter?.map(({ key, title, items }) => (
        <div key={key} className="py-10">
          <h3 className="text-xl font-alternative">{title}</h3>
          <ul className="mt-5">
            {items.map(({ path, label }) => (
              <li key={path}>
                <a
                  className="text-border hover:text-white duration-200 ease-in-out"
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
