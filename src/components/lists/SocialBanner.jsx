import { SocialLogosData } from "../data/SocialLogosData";

export const SocialBanner = () => {
  return (
    <ul className="bg-mainColor w-full h-12 flex justify-center items-center gap-5 lg:h-20">
      {SocialLogosData.map(({ Component, name }) => (
        <li key={name} className="size-8 lg:size-10">
          <a
            href="https://www.youtube.com/watch?v=QB7ACr7pUuE"
            target="_blank"
            rel="noopener noreferrer"
            className="stroke-white hover:stroke-yellow duration-300 ease-in-out flex items-center gap-2"
          >
            <Component />
            <span className="sr-only">{`Visit our ${name} page`}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
