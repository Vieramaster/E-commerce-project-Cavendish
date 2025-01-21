/**
 * @param {{
 *    title:string,
 *    defaultImage:string,
 *    smallImage:string,
 *    altImage:string
 * }} props
 * */
export const ImageBanner = ({ title, defaultImage, smallImage, altImage }) => {
  return (
    <picture className="w-full h-auto bg-cover relative">
      <h1
        className="absolute text-white text-3xl font-bold font-alternative top-1/2 pl-10 md:text-5xl lg:text-6xl 2xl:text-7xl"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {title}
      </h1>
      <source srcSet={defaultImage} media="(min-width: 800px)" />
      <source srcSet={smallImage} media="(max-width: 799px)" />
      <img src={defaultImage} alt={altImage} />
    </picture>
  );
};
