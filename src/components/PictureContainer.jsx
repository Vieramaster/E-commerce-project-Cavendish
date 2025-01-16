/**@param {{defaultImage:string, smallImage:string,altImage:string}} props */
export const PictureContainer = ({
  defaultImage,
  smallImage,
  altImage,
}) => {
  return (
    <picture className="w-full h-auto  lg:w-1/3">
      <source srcSet={defaultImage} media="(min-width: 800px)" />
      <source srcSet={smallImage} media="(max-width: 799px)" />
      <img
        src={defaultImage}
        alt={altImage}
        className="w-full h-auto"
      />
    </picture>
  );
};
