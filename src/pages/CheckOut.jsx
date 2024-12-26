import { useState, useEffect, useCallback } from "react";
import { HeaderLight } from "../components/sections/HeaderLight";
import { SummaryShopButton } from "../components/buttons/SummaryShopButton";
import { CheckOutProducts } from "../components/sections/CheckOutProducts";
import { totalPrice, totalProducts } from "../hooks/useMathOperations";
import { PayMethodList } from "../components/lists/PayMethodList";
import { TextSeparator } from "../components/TextSeparator";
import { CheckOutForm } from "../components/forms/CheckOutForm";
import { useCart } from "../hooks/useZustand";

const CheckOut = () => {
  const [expandList, setExpandList] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { cart } = useCart();

  const sumPrice = totalPrice(cart);
  const items = totalProducts(cart);

  const handleResize = useCallback(() => {
    const mobileView = window.innerWidth < 1024;
    setIsMobile(mobileView);
    !mobileView && setExpandList(true);
  }, []);

  const handleExpandList = useCallback(() => {
    isMobile && setExpandList((prev) => !prev);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const classH3 = "";
  return (
    <>
      <HeaderLight isHidden={!isMobile} />
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row-reverse">
        <div className="w-full h-auto lg:w-1/2 lg:h-screen lg:bg-lightGrey lg:pt-20">
          <SummaryShopButton
            changeArrow={false}
            totalPrice={sumPrice}
            onClick={handleExpandList}
            disabled={!isMobile}
          />
          <div className="w-5/6 h-auto mx-auto overflow-y-auto">
            <CheckOutProducts
              product={cart}
              totalItems={items}
              price={sumPrice}
              isOpen={expandList}
            />
          </div>
        </div>
        <div className="h-auto lg:w-1/2 lg:overflow-y-auto  text-textColor">
          <HeaderLight isHidden={isMobile} />
          <div className="w-5/6 mx-auto flex flex-col gap-4 justify-center items-center">
            <h3 className="text-center items-center  text-lg mt-5">
              Express checkout
            </h3>
            <PayMethodList />
            <TextSeparator>OR</TextSeparator>
            <CheckOutForm />
            <h3 className="text-3xl font-semibold my-2 text-start  w-full">
              Payment
            </h3>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
