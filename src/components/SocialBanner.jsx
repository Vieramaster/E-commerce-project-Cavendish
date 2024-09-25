import IcoFacebook from "./SVGs/socialIcons/IcoFacebook";
import IcoInstagram from "./SVGs/socialIcons/IcoInstagram";
import IcoYoutube from "./SVGs/socialIcons/IcoYoutube";
import IcoTwitter from "./SVGs/socialIcons/IcoTwitter";

const logoList = [
  { Component: IcoFacebook, key: "Facebook" },
  { Component: IcoInstagram, key: "Instagram" },
  { Component: IcoYoutube, key: "Youtube" },
  { Component: IcoTwitter, key: "Twitter" },
];
export default function SocialBanner({ classNameUl, svgSize }) {
  return (
    <ul className={`${classNameUl} flex justify-center items-center gap-5`}>
      {logoList.map(({ Component, key }) => {
        return (
          <li key={key}>
            <a
              href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
              target="_blank"
            >
              <Component className={svgSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
