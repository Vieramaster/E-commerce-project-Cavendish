const color = {
  shopPay: "bg-shopPayButton hover:bg-shopPayButtonHover",
  paypal: "bg-payPalButton hover:bg-payPalButtonHover",
  googlePay: "bg-black hover:opacity-85",
};

/**
 * @param {{
 * readonly colorButton: "shopPay" | "paypal" | "googlePay"}
 * &
 * JSX.IntrinsicElements['button']
 * } props
 */
export const PayMethodButton = ({ colorButton = "shopPay", ...props }) => {
  return (
    <button
      className={`
          w-full 
          h-full
          ounded-sm
          grid 
          place-content-center 
          duration-200 
          ease-in-out 
          ${color[colorButton]}
          `}
      {...props}
    >
      {props.children}
    </button>
  );
};
