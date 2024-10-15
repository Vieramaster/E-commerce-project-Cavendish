import { FacebookIco } from "./SVGs/socialIcons/FacebookIco";
import { InstagramIco } from "./SVGs/socialIcons/InstagramIco";
import { YoutubeIco } from "./SVGs/socialIcons/YoutubeIco";
import { TwitterIco } from "./SVGs/socialIcons/TwitterIco";

/**@type {Array<{Component:React.ComponentType<{className:string}>, key:string}>} */
export const logoList = [
  { Component: FacebookIco, key: "Facebook" },
  { Component: InstagramIco, key: "Instagram" },
  { Component: YoutubeIco, key: "Youtube" },
  { Component: TwitterIco, key: "Twitter" },
];
/**@returns {JSX.Element} */
export const SocialBanner = () => {
  return (
    <ul className=" w-full h-12  flex justify-center items-center gap-5 lg:h-20">
      {logoList.map(({ Component, key }) => {
        return (
          <li key={key}>
            <a
              href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
              target="_blank"
            >
              <Component
                className={
                  "size-8 stroke-white hover:stroke-yellow duration-300 ease-in-out lg:size-10"
                }
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
