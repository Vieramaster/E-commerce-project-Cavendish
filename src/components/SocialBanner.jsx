import IcoFacebook from "./SVGs/socialIcons/IcoFacebook";
import IcoInstagram from "./SVGs/socialIcons/IcoInstagram";
import IcoYoutube from "./SVGs/socialIcons/IcoYoutube";
import IcoTwitter from "./SVGs/socialIcons/IcoTwitter";

export default function SocialBanner({ classNameUl, svgSize }) {
  return (
    <ul className={`${classNameUl} flex justify-center items-center gap-5`}>
      <li>
        <a href="https://www.youtube.com/watch?v=QB7ACr7pUuE" target="_blank">
          <IcoFacebook className={svgSize} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=QB7ACr7pUuE" target="_blank">
          <IcoInstagram className={svgSize} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=QB7ACr7pUuE" target="_blank">
          {" "}
          <IcoYoutube className={svgSize} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=QB7ACr7pUuE" target="_blank">
          {" "}
          <IcoTwitter className={svgSize} />
        </a>
      </li>
    </ul>
  );
}
