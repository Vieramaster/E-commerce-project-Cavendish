/**@param {{image:string, name:string, price:number, colorName:string, amount:number , size:string, handleRemove: React.MouseEventHandler<HTMLButtonElement>, data:number }} props*/
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
      className=" h-48 w-full flex gap-2 items-center my-2 px-2 text-textColor"
      
    >
      <img src={image} className="h-5/6 rounded-md " />
      <div className=" flex-grow h-full flex flex-col gap-2 py-5 items-start">
        <p className="truncate px-1 font-semibold "> {name}</p>
        <p>color : {colorName}</p>
        <p>
          {" "}
          size: <span className="uppercase">{size}</span>
        </p>
        <p>quantity: {amount} </p>
        <div className="flex justify-between w-full">
          <p className="font-alternative  font-semibold">Total: ${price}</p>
          <button className="underline" onClick={handleRemove} data-id={data}>
            remove
          </button>
        </div>
      </div>
    </li>
  );
};
