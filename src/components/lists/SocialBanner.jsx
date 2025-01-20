import { FacebookIco } from "../SVGs/socialIcons/FacebookIco";
import { InstagramIco } from "../SVGs/socialIcons/InstagramIco";
import { YoutubeIco } from "../SVGs/socialIcons/YoutubeIco";
import { TwitterIco } from "../SVGs/socialIcons/TwitterIco";

/** @type {{Component:React.ComponentType, name:string}[]} */
export const logoList = [
  { Component: FacebookIco, name: "Facebook" },
  { Component: InstagramIco, name: "Instagram" },
  { Component: YoutubeIco, name: "Youtube" },
  { Component: TwitterIco, name: "Twitter" },
];

export const SocialBanner = () => {
  return (
    <ul className="bg-mainColor w-full h-12 flex justify-center items-center gap-5 lg:h-20">
      {logoList.map(({ Component, name }) => (
        <li key={name} className="size-8 lg:size-10">
          <a
            href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${name} page`}
            className="stroke-white hover:stroke-yellow duration-300 ease-in-out"
          >
            <Component />
          </a>
        </li>
      ))}
    </ul>
  );
};
