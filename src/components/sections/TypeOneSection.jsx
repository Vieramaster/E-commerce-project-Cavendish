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
  const isReverseSection = reverse ? "lg:flex-row-reverse items-end" : " ";
  const isReverseSecondaryImage = reverse ? "-left-[11%]" : "-right-[11%]";

  return (
    <section
      aria-labelledby={labelledBy}
      className={`w-full h-auto flex flex-col gap-10 lg:flex-row ${isReverseSection}  `}
    >
      <div className={`w-[90%]  relative lg:w-1/2  flex items-center`}>
        <PictureContainer
          isRounded
          defaultImage={mainImageDefault}
          smallImage={mainImageSmall}
          className="block w-full h-auto pb-10 rounded-md"
          altImage={altImage}
        />
        <PictureContainer
          isRounded
          defaultImage={secondaryImageDefault}
          smallImage={secondaryImageSmall}
          className={`block w-1/2 h-auto absolute top-1/2 transform -translate-y-1/2 ${isReverseSecondaryImage}`}
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
