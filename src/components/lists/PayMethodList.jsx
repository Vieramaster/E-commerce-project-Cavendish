import { PayMethodButton } from "../buttons/PayMethodButton";
import { ShopPayLogo } from "../SVGs/logos/ShopPayLogo";
import { PayPalLogo } from "../SVGs/logos/PayPalLogo";
import { GooglePayLogo } from "../SVGs/logos/GooglePayLogo";
import "../../types";

/**@type {payButtonlist} */
const buttonList = [
  {
    name: "shopPay",
    Component: ShopPayLogo,
  },
  {
    name: "paypal",
    Component: PayPalLogo,
  },
  {
    name: "googlePay",
    Component: GooglePayLogo,
  },
];

export const PayMethodList = () => {
  return (
    <ul className="w-full flex flex-col gap-3 justify-center items-center md:flex-row lg:flex-col  2xl:flex-row">
      {buttonList.map(({ name, Component }) => (
        <li key={name} className="h-14 w-full ">
          <PayMethodButton
            colorButton={name}
            aria-label={`Pay method whith ${name}`}
          >
            <Component />
          </PayMethodButton>
        </li>
      ))}
    </ul>
  );
};
/**-
 *
 */
