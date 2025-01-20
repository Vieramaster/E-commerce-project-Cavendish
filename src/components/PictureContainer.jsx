/**@param {{defaultImage:string, smallImage:string,altImage:string} & JSX.IntrinsicElements["picture"]} props */
export const PictureContainer = ({
  defaultImage,
  smallImage,
  altImage,
  ...props
}) => {
  return (
    <picture {...props}>
      <source srcSet={defaultImage} media="(min-width: 800px)" />
      <source srcSet={smallImage} media="(max-width: 799px)" />
      <img
        src={defaultImage}
        alt={altImage}
        className="w-full h-full object-cover rounded-md"
        loading="lazy"
      />
    </picture>
  );
};
