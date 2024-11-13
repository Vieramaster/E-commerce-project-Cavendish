import { IntroHomeButton } from "../links/IntroHomeButton";

/** @type {{left: [string, string], right: [string, string], center: [string, string]}} */

const positionClasses = {
  left: ["justify-start", "ml-5 lg:ml-20"],
  right: ["justify-end", "mr-5 lg:mr-20"],
  center: ["justify-center", "mx-auto"],
};

/** @param {{title: string, text: string, positionTitle: "left" | "right" | "center", backgroundImage:string, toPage:string} & JSX.IntrinsicElements["li"]} props */
export const HomeIntroSlider = ({
  title,
  text,
  positionTitle,
  backgroundImage,
  toPage,
}) => {
  return (
    <li
      className={`${positionClasses[positionTitle][0]} pt-28 h-full w-1/2  bg-top bg-cover flex items-end`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`
        ${positionClasses[positionTitle][1] || ""}
        flex flex-col  text-white mb-5 lg:mb-20`}
      >
        <h2 className="text-5xl font-bold drop-shadow-md shadow-black lg:text-6xl 2xl:text-[5rem]">
          {title}
        </h2>
        <p className="text-lg italic drop-shadow-md shadow-black lg:text-xl 2xl:text-2xl mb-5">
          {text}
        </p>
        <IntroHomeButton toPage={toPage}>Discover Now</IntroHomeButton>
      </div>
    </li>
  );
};
