import IcoShoppingCart from "../SVGs/icons/IcoShoppingCart";

export default function ShoppingButton({ SVGclass, background }) {
  return (
    <button
      className={`p-3  rounded-lg grid place-content-center group duration-200 ease-in-out  ${background}`}
    >
      <IcoShoppingCart
        className={`${SVGclass}  stroke-2 group-hover:stroke-white`}
      />
    </button>
  );
}
