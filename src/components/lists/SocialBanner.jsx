import { FacebookIco } from "../SVGs/socialIcons/FacebookIco";
import { InstagramIco } from "../SVGs/socialIcons/InstagramIco";
import { YoutubeIco } from "../SVGs/socialIcons/YoutubeIco";
import { TwitterIco } from "../SVGs/socialIcons/TwitterIco";

/**@type {Array<{Component:React.ComponentType, key:string}>} */
export const logoList = [
  { Component: FacebookIco, key: "Facebook" },
  { Component: InstagramIco, key: "Instagram" },
  { Component: YoutubeIco, key: "Youtube" },
  { Component: TwitterIco, key: "Twitter" },
];

export const SocialBanner = () => {
  return (
    <ul className="bg-mainColor w-full h-12  flex justify-center items-center gap-5 lg:h-20">
      {logoList.map(({ Component, key }) => {
        return (
          <li key={key} className="size-8 lg:size-10">
            <a
              href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
              target="_blank"
              className=" stroke-white hover:stroke-yellow duration-300 ease-in-out "
            >
              <Component />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
