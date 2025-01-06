import { PageLogo } from "../links/PageLogo";

/** @typedef {{path:string, label:string, url:string}[]} list*/
/** @typedef {{key:string, title:string, items:list,}[]} listType*/

/** @type { listType} */
const menuListFooter = [
  {
    key: "HelpAndInformation",
    title: "Help & Information",
    items: [
      { path: "Contact", label: "Contact", url: "/contact" },
      { path: "Delivery", label: "Delivery", url: "/delivery" },
      { path: "DeliveryAndReturns", label: "Delivery & returns", url: "" },
    ],
  },
  {
    key: "AboutCavendish",
    title: "About Cavendish",
    items: [
      { path: "AboutUs", label: "About us", url: "" },
      { path: "Careers", label: "Careers of Cavendish", url: "" },
      { path: "InvestorsSite", label: "Investors site", url: "" },
    ],
  },
  {
    key: "MoreFromCavendish",
    title: "More From Cavendish",
    items: [
      { path: "Mobile", label: "Mobile and apps", url: "" },
      { path: "GiftVouchers", label: "Gift vouchers", url: "" },
      { path: "BlackFriday", label: "Black friday", url: "" },
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
            {items.map(({ path, label, url }) => (
              <li key={path}>
                <a
                  className="text-border hover:text-white duration-200 ease-in-out"
                  href={url}
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
