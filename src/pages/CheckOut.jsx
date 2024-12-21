//Componentes
import { PageLogo } from "../components/links/PageLogo";
import { SummaryShopButton } from "../components/buttons/SummaryShopButton";
import { CheckOutProductList } from "../components/lists/CheckOutProductList";

//Hooks
import { totalPrice, totalProducts } from "../hooks/useMathOperations";
import { useCart } from "../hooks/useZustand";

const CheckOut = () => {
  const { cart } = useCart();

  const sumPrice = totalPrice(cart);
  const items = totalProducts(cart);

  return (
    <section className="bg-white w-screen h-screen">
      <header className="w-full h-20  grid place-content-center">
        <PageLogo color="main" />
      </header>
      <SummaryShopButton changeArrow={false} totalPrice={sumPrice} />
      <div className="w-5/6 min-h-screen h-auto mx-auto">
        <div className="  w-full h-auto flex flex-col gap-2 ">
          <CheckOutProductList product={cart} />
          <div className="w-full h-12 flex justify-between items-center text-textColor border-t border-border">
            <p className="font-medium">
              Subtotal : <span className="ml-2">{items} items</span>{" "}
            </p>
            <p className="font-medium ">
              total Price:
              <span className="font-alternative font-semibold  text-2xl ml-2">
                {" "}
                $ {sumPrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
