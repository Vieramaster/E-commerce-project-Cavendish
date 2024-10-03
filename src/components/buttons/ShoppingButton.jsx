import ShoppingCartIco from "../SVGs/icons/ShoppingCartIco";

export default function ShoppingButton({ SVGclass, background }) {
  return (
    <button
      className={`p-3 rounded-lg group duration-200 ease-in-out  ${background}`}
      aria-label="add to cart"
    >
      <ShoppingCartIco
        className={`${SVGclass}  stroke-2 group-hover:stroke-white`}
      />
    </button>
  );
}
