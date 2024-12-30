const color = {
  shopPay: "bg-shopPayButton hover:bg-shopPayButtonHover",
  paypal: "bg-payPalButton hover:bg-payPalButtonHover",
  googlePay: "bg-black hover:opacity-85",

};

/** @param {JSX.IntrinsicElements['button'] & {readonly colorButton: "shopPay" | "paypal" | "googlePay"}} props*/
export const PayMethodButton = ({
  colorButton = "shopPay",

  ...props
}) => {
  return (
    <button
      className={`${color[colorButton]} w-full h-full rounded-sm grid place-content-center  duration-200 ease-in-out `}
      {...props}
    >
      {props.children}
    </button>
  );
};
