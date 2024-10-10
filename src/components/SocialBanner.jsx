import {
  FacebookIco,
  InstagramIco,
  YoutubeIco,
  TwitterIco,
} from "./SVGs/socialIcons";

const logoList = [
  { Component: FacebookIco, key: "Facebook" },
  { Component: InstagramIco, key: "Instagram" },
  { Component: YoutubeIco, key: "Youtube" },
  { Component: TwitterIco, key: "Twitter" },
];
export default function SocialBanner() {
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
}
