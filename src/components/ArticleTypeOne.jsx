/**@param {{title:string, text:string, mainImageDefault:string,mainImageSmall:string,secondaryImageDefault:string, secondaryImageSmall:string, altImage:string}} props */
export const ArticleTypeOne = ({
  title,
  text,
  mainImageDefault,
  mainImageSmall,
  secondaryImageDefault,
  secondaryImageSmall,
  altImage,
}) => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 lg:flex-row">
      <div className="w-full h-auto relative lg:w-3/5">
        <picture className="w-full h-auto pb-10 rounded-md">
          <source srcSet={mainImageDefault} media="(min-width: 800px)" />
          <source srcSet={mainImageSmall} media="(max-width: 799px)" />
          <img
            src={mainImageDefault}
            alt={altImage}
            className="w-5/6 h-auto rounded-md"
          />
        </picture>
        <picture className="w-1/2 h-auto absolute right-0 bottom-0 ">
          <source srcSet={secondaryImageDefault} media="(min-width: 800px)" />
          <source srcSet={secondaryImageSmall} media="(max-width: 799px)" />
          <img
            src={secondaryImageDefault}
            alt="story image"
            className="w-full h-auto rounded-md"
          />
        </picture>
      </div>
      <div className="w-full h-auto lg:w-2/5  lg:p-20">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
