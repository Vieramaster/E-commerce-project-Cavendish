import IcoBasket from "../icons/IcoBasket";
import IcoShopBag from "../icons/IcoShopBag";

export default function BasketButton({addClass}) {
  return (
    <button className={addClass}>
     <IcoShopBag />
    </button>
  );
}
