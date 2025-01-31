/**
 * @param {{
 *   array: ClothesObject,
 *   toggleSize: boolean
 * }} props
 */
export const DescriptionShopCard = ({ array, toggleSize }) => {
  const { name, colors = [], idProduct, price } = array;

  const sizeH3 = toggleSize ? "text-3xl" : "text-lg";
  const sizeColors = toggleSize ? "w-16 h-6" : "w-10 h-4";
  const sizeText = toggleSize ? "text-5xl" : "text-3xl";

  return (
    <article className="flex justify-between gap-3 h-1/6 w-full text-textColor px-3 py-1">
      <div className="w-4/6 h-full flex flex-col justify-center  ">
        <span className="h-1/2  items-center flex">
          <h3 className={`font-medium truncate whitespace-nowrap" ${sizeH3}`}>
            {name}
          </h3>
        </span>
        <div className="w-full flex gap-3 h-1/2 items-center ">
          {colors?.map(({ hex, colorName }, index) => (
            <div
              key={`${idProduct}-${index}`}
              style={{ backgroundColor: hex }}
              className={`rounded-sm border border-textColor ${sizeColors}`}
              aria-label={`Color ${colorName}`}
              role="presentation"
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
