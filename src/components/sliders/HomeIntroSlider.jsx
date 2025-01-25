import { IntroHomeButton } from "../links/IntroHomeButton";
import { PictureContainer } from "../PictureContainer";

/**
 * @type {{
 * left:   [string, string],
 *  right: [string, string],
 * center: [string, string]
 * }}
 * */

const positionClasses = {
  left: ["justify-start", "ml-5 lg:ml-20"],
  right: ["justify-end", "mr-5 lg:mr-20"],
  center: ["justify-center", "mx-auto"],
};

/**
 * @param {mainBannerHome & JSX.IntrinsicElements["li"]} props
 */
export const HomeIntroSlider = ({
  title,
  text,
  positionTitle,
  imageBannerDefault,
  imageBannersmall,
  toPage,
}) => {
  const position = positionClasses[positionTitle][1] || "";

  return (
    <>
      <li
        className={` relative h-full w-1/2  bg-top bg-cover flex items-end  ${positionClasses[positionTitle][0]}`}
      >
        <PictureContainer
          className="w-full h-full"
          smallImage={imageBannersmall}
          defaultImage={imageBannerDefault}
          altImage=""
          isRounded={false}
        />
        <div
          className={`flex flex-col text-white mb-5 lg:mb-20 absolute pt-28 ${position}`}
          aria-labelledby="Discover-now"
        >
          <h2 className="text-5xl font-bold drop-shadow-md shadow-black lg:text-6xl 2xl:text-[5rem]">
            {title}
          </h2>
          <p
            className="text-lg italic drop-shadow-md shadow-black lg:text-xl 2xl:text-2xl mb-5"
            id="Discover-now"
          >
            {text}
          </p>
          <IntroHomeButton toPage={toPage}>Discover Now</IntroHomeButton>
        </div>
      </li>
    </>
  );
};
