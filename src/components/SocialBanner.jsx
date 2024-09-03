import IcoFacebook from "../icons/SocialIcons/IcoFacebook";
import IcoInstagram from "../icons/SocialIcons/IcoInstagram";
import IcoYoutube from "../icons/SocialIcons/IcoYoutube";
import IcoTwitter from "../icons/SocialIcons/IcoTwitter";

export default function SocialBanner({ classNameUl, svgSize }) {
  return (
    <ul className={`${classNameUl} flex justify-center items-center gap-5`}>
      <li>
        <IcoFacebook className={svgSize} />
      </li>
      <li>
        <IcoInstagram className={svgSize} />
      </li>
      <li>
        <IcoYoutube className={svgSize} />
      </li>
      <li>
        <IcoTwitter className={svgSize} />
      </li>
    </ul>
  );
}
