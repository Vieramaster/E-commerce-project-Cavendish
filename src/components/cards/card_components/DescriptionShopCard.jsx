/**
 * @param {{
 *   array: ClothesObject,
 *   toggleSize: boolean
 * }} props
 */
export const DescriptionShopCard = ({ array, toggleSize }) => {
  const { name, colors, idProduct, price } = array;

  const sizeH3 = toggleSize ? "text-3xl" : "text-lg";
  const sizeColors = toggleSize ? "w-20 h-8" : "w-10 h-4";
  const sizeText = toggleSize ? "text-6xl" : "text-3xl";

  return (
    <article className="flex justify-between gap-3 h-1/6 w-full text-textColor px-3">
      <div className="w-4/6 h-full flex flex-col justify-center pt-2">
        <h3 className={`font-medium h-1/2 truncate ${sizeH3}`}>{name}</h3>
        <div className="w-full flex gap-3 h-1/2 items-center">
          {colors?.map(({ hex, colorName }, index) => (
            <span
              key={`${idProduct}-${index}`}
              style={{ backgroundColor: hex }}
              className={`rounded-sm border border-textColor ${sizeColors}`}
              aria-label={colorName}
            />
          ))}
        </div>
      </div>

      <div className="w-2/6 h-full grid place-content-center">
        <p className={`font-semibold font-alternative ${sizeText}`}>${price}</p>
      </div>
    </article>
  );
};
