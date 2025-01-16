/**@param {{title:string, text:string, mainImageDefault:string,mainImageSmall:string,secondaryImageDefault:string, secondaryImageSmall:string, altImage:string,reverse:boolean}} props */
export const ArticleTypeOne = ({
  title,
  text,
  mainImageDefault,
  mainImageSmall,
  secondaryImageDefault,
  secondaryImageSmall,
  altImage,
  reverse,
}) => {
  return (
    <div
      className={`w-full h-auto flex flex-col gap-10 lg:flex-row   ${
        reverse ? "lg:flex-row-reverse " : ""
      }`}
    >
      <div
        className={`w-[94%] h-auto relative lg:w-1/2  ${
          reverse ? "ml-[6%]" : ""
        }`}
      >
        <picture className="block w-full h-auto pb-10 rounded-md">
          <source srcSet={mainImageDefault} media="(min-width: 800px)" />
          <source srcSet={mainImageSmall} media="(max-width: 799px)" />
          <img
            src={mainImageDefault}
            alt={altImage}
            className="w-full h-auto rounded-md"
            loading="lazy"
          />
        </picture>

        <picture
          className={`block w-1/2 h-auto absolute top-1/2 transform -translate-y-1/2 ${
            reverse ? "-left-20" : "-right-20"
          }`}
        >
          <source srcSet={secondaryImageDefault} media="(min-width: 800px)" />
          <source srcSet={secondaryImageSmall} media="(max-width: 799px)" />
          <img
            src={secondaryImageDefault}
            alt={`${altImage} secondary`}
            className="w-full h-auto rounded-md"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="w-full h-auto lg:w-1/2 lg:px-20 lg:py-28">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
