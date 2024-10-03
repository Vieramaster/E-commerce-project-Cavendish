import IcoFacebook from "./SVGs/socialIcons/FacebookIco";
import IcoInstagram from "./SVGs/socialIcons/InstagramIco";
import IcoYoutube from "./SVGs/socialIcons/YoutubeIco";
import IcoTwitter from "./SVGs/socialIcons/TwitterIco";

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
