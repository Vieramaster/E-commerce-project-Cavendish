/**
 * @param {{
 *   image: string,
 *   name: string,
 *   price: number,
 *   colorName: string,
 *   amount: number,
 *   size: string,
 *   handleRemove: React.MouseEventHandler<HTMLButtonElement>,
 *   data: number
 * }} props
 */
export const CartProductCard = ({
  image,
  name,
  price,
  colorName,
  amount,
  size,
  data,
  handleRemove,
}) => {
  return (
    <li
      className="h-48 w-full flex gap-2 items-center my-2 px-2 text-textColor"
      role="listitem"
    >
      <img
        src={image}
        alt={`Product image of ${name} in color ${colorName}`}
        className="h-5/6 rounded-md"
      />
      <div className="flex-grow h-full flex flex-col gap-2 py-5 items-start">
        <p className="truncate px-1 font-semibold" title={name}>
          {name}
        </p>
        <p>Color: {colorName}</p>
        <p>
          Size: <span className="uppercase">{size}</span>
        </p>
        <p>Quantity: {amount}</p>
        <div className="flex justify-between w-full">
          <p className="font-alternative font-semibold">Total: ${price}</p>
          <button
            className="underline"
            onClick={handleRemove}
            data-id={data}
            aria-label={`Remove ${name} from the cart`}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
