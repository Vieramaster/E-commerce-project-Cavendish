import { PageLogo } from "../links/PageLogo";
import { logoList } from "./SocialBanner";
import "../../types";

const menuListFooter = [
  {
    key: "HelpAndInformation",
    title: "Help & Information",
    items: [
      { path: "Contact", title: "Contact", url: "/contact" },
      { path: "Delivery", title: "Delivery", url: "/delivery" },
      { path: "Returns", title: "Returns & Exchanges", url: "/returns" },
      { path: "ProductCare", title: "Product Care", url: "/product-care" },
    ],
  },
  {
    key: "AboutCavendish",
    title: "About Cavendish",
    items: [
      { path: "OurStory", title: "Our Story", url: "/our-story" },
      { path: "OurFabrics", title: "Our Fabrics", url: "/our-fabrics" },
      { path: "StoreLocator", title: "Store Locator", url: "/stores" },
    ],
  },
];

export const FooterList = () => {
  return (
    <section className="w-full py-10 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between">
      {/* Company Logo */}
      <PageLogo color="white" />

      {/* Social Media Icons */}
      <ul className="flex gap-3">
        {logoList?.map(({ Component, key }) => (
          <li key={key} className="size-8 lg:size-10">
            <a
              href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
              target="_blank"
              rel="noopener noreferrer"
              className="stroke-white hover:stroke-yellow duration-300 ease-in-out"
            >
              <Component />
            </a>
          </li>
        ))}
      </ul>

      {/* Footer Navigation */}
      {menuListFooter?.map(({ key, title, items }) => (
        <section key={key} aria-labelledby={`footer-${key}`}>
          <h3 id={`footer-${key}`} className="text-xl font-alternative">
            {title}
          </h3>
          <ul className="mt-5">
            {items.map(({ path, title, url }) => (
              <li key={path}>
                <a
                  className="text-border hover:text-white duration-200 ease-in-out"
                  href={url}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};
