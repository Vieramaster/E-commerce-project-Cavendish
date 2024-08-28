import IcoBasket from "../icons/IcoBasket";

export default function BasketButton({addClass}) {
  return (
    <button className={addClass}>
      <IcoBasket className={"h-12 w-12  fill-white"} />
    </button>
  );
}
