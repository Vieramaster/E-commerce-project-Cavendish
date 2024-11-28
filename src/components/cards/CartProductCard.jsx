import { BasicButton } from "../buttons/BasicButton";

/**@param {{image:string, name:string, price:number, colorName:string, amount:number , size:string}} props*/
export const CartProductCard = ({
  image,
  name,
  price,
  colorName,
  amount,
  size,
}) => {
  return (
    <li className="bg-border h-48 w-full flex gap-2 items-center my-2 px-2">
      <img src={image} className="h-full py-5 rounded-sm" />
      <div className=" bg-red-500 flex-grow h-full flex flex-col gap-2 py-5 items-start">
        <p className="truncate px-1"> {name}</p>
        <p>color : {colorName}</p>
        <p>
          {" "}
          size: <span className="uppercase">{size}</span>
        </p>
        <p>quantity: {amount} </p>
        <p className="font-alternative  font-semibold">Total: ${price}</p>
      </div>
    </li>
  );
};
