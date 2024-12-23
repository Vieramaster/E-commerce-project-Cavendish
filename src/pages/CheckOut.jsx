//Componentes
import { useState } from "react";
import { SummaryShopButton } from "../components/buttons/SummaryShopButton";
import { CheckOutProducts } from "../components/sections/CheckOutProducts";
//Hooks
import { totalPrice, totalProducts } from "../hooks/useMathOperations";
import { useCart } from "../hooks/useZustand";

const CheckOut = () => {
  const [expandList, setExpandList] = useState(false);
  const { cart } = useCart();

  const sumPrice = totalPrice(cart);
  const items = totalProducts(cart);

  const handleExpandList = () => {
    setExpandList((prev) => !prev);
  };

  console.log(expandList)
  return (
    <section className="bg-white w-full h-screen ">
      <SummaryShopButton
        changeArrow={false}
        totalPrice={sumPrice}
        onClick={handleExpandList}
      />
      <div className="w-5/6 min-h-screen h-auto mx-auto">
        <CheckOutProducts product={cart} totalItems={items} price={sumPrice} isOpen={expandList} />
      </div>
    </section>
  );
};

export default CheckOut;
