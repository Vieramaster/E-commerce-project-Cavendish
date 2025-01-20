import { PictureContainer } from "../PictureContainer";

/**
 * @param {{
 *   title: string,
 *   text: string,
 *   firstImageDefault: string,
 *   firstImageSmall: string,
 *   firstAltImage: string,
 *   secondImageDefault: string,
 *   secondImageSmall: string,
 *   secondAltImage: string,
 *   mainImageDefault: string,
 *   mainImageSmall: string,
 *   mainAltImage: string,
 *   labelledBy: string
 * }} props
 */
export const TypeTwoSection = ({
  title,
  text,
  firstImageDefault,
  firstImageSmall,
  firstAltImage,
  secondImageDefault,
  secondImageSmall,
  secondAltImage,
  mainImageDefault,
  mainImageSmall,
  mainAltImage,
  labelledBy,
}) => {
  return (
    <section
      className="w-full h-auto flex flex-col gap-10 lg:flex-row lg:h-[45rem]"
      aria-labelledby={labelledBy}
    >
      <div className="w-full h-auto flex flex-col justify-between lg:h-full lg:justify-center lg:gap-10">
        <div className="py-5 w-full text-center">
          <h3 className="text-3xl font-semibold mb-5" id={labelledBy}>
            {title}
          </h3>
          <p>{text}</p>
        </div>
        <div className="w-full h-auto flex gap-5">
          <PictureContainer
            className="w-1/2 h-full"
            defaultImage={firstImageDefault}
            smallImage={firstImageSmall}
            altImage={firstAltImage}
          />
          <PictureContainer
            className="w-1/2 h-full"
            defaultImage={secondImageDefault}
            smallImage={secondImageSmall}
            altImage={secondAltImage}
          />
        </div>
      </div>
      <PictureContainer
        className="h-[40rem] w-full lg:h-full"
        defaultImage={mainImageDefault}
        smallImage={mainImageSmall}
        altImage={mainAltImage}
      />
    </section>
  );
};
