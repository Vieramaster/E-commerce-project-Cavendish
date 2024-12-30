import { useState, useEffect, useCallback } from "react";
import { HeaderLight } from "../components/sections/HeaderLight";
import { SummaryShopButton } from "../components/buttons/SummaryShopButton";
import { CheckOutProducts } from "../components/sections/CheckOutProducts";
import { totalPrice, totalProducts } from "../hooks/useMathOperations";
import { PayMethodList } from "../components/lists/PayMethodList";
import { TextSeparator } from "../components/TextSeparator";
import { CheckOutForm } from "../components/forms/CheckOutForm";
import { useCart } from "../hooks/useZustand";
import { PaymentForm } from "../components/forms/PaymentForm";

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
            <PaymentForm />
            <div className="h-14 w-full flex justify-between items-center text-lg lg:text-2xl ">
              <p className="font-semibold">Subtotal: {cart.length} items</p>
              <p className="font-semibold"> Total: ${sumPrice}</p>
            </div>
            <button className="w-full bg-mainColor hover:bg-hover duration-200 ease-in-out h-14 font-alternative font-semibold text-white rounded-md ">
              Pay now
            </button>

            <p className="text-sm  text-left w-full text-lightTextColor lg:text-md">
              Your info will be saved to a Shop account. By continuing, you
              agree to Shop’s{" "}
              <span>
                <a
                  href="https://shop.app/terms-of-service"
                  className="text-links underline"
                >
                  Terms of Service
                </a>
              </span>
              and acknowledge the
              <span>
                <a
                  href="https://www.shopify.com/legal/privacy/app-users"
                  className="text-links underline"
                >
                  Privacy Policy
                </a>
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
