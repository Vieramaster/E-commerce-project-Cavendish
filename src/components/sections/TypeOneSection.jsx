import { PictureContainer } from "../PictureContainer";

/**
 * @param {{
 * title: string,
 * text: string,
 * mainImageDefault: string,
 * mainImageSmall: string,
 * secondaryImageDefault: string,
 * secondaryImageSmall: string,
 * altImage: string,
 * reverse: boolean,
 * labelledBy: string
 * }} props
 */
export const TypeOneSection = ({
  title,
  text,
  mainImageDefault,
  mainImageSmall,
  secondaryImageDefault,
  secondaryImageSmall,
  altImage,
  reverse,
  labelledBy,
}) => {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`w-full h-auto flex flex-col gap-10 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-[94%] h-auto relative lg:w-1/2 ${reverse ? "ml-[6%]" : ""}`}
      >
        <PictureContainer
          defaultImage={mainImageDefault}
          smallImage={mainImageSmall}
          className="block w-full h-auto pb-10 rounded-md"
          altImage={altImage}
        />
        <PictureContainer
          defaultImage={secondaryImageDefault}
          smallImage={secondaryImageSmall}
          className={`block w-1/2 h-auto absolute top-1/2 transform -translate-y-1/2 ${
            reverse ? "-left-20" : "-right-20"
          }`}
          altImage={altImage}
        />
      </div>

      <div className="w-full h-auto lg:w-1/2 lg:px-20 lg:py-28">
        <h3 className="text-2xl font-semibold mb-4 lg:text-3xl" id={labelledBy}>
          {title}
        </h3>
        <p className="lg:text-lg">{text}</p>
      </div>
    </section>
  );
};
