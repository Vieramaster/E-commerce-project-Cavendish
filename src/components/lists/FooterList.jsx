import { FooterListData } from "../data/FooterListData";
import { PageLogo } from "../links/PageLogo";
import { SocialLogosData } from "../data/SocialLogosData";
import "../../types";
import { Link } from "react-router-dom";

export const FooterList = () => {
  return (
    <section className="w-full py-10 px-4 grid grid-cols-2 gap-10 justify-items-left  lg:flex lg:justify-between">
      {/* Company Logo */}
      <PageLogo color="white" />
      {/* Social Media Icons */}
      <ul className="flex gap-3">
        {SocialLogosData?.map(({ Component, name }) => (
          <li key={name} className="size-8 lg:size-10">
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
      {FooterListData?.map(({ key, title, items }) => (
        <section key={key} aria-labelledby={`footer-${key}`}>
          <h3 id={`footer-${key}`} className="text-xl font-alternative">
            {title}
          </h3>
          <ul className="mt-5">
            {items.map(({ path, title, url }) => (
              <li key={path}>
                <Link
                  className="text-border hover:text-white duration-200 ease-in-out"
                  to={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};
