import IcoShoppingCart from "./SVGs/IcoShoppingCart"

export default function ShoppingButton({ size }) {
  return (
    <button className="p-3 bg-yellow rounded-lg grid place-content-center group duration-200 ease-in-out hover:bg-esmerald">
      <IcoShoppingCart
        className={`${size} stroke-carbon stroke-2 group-hover:stroke-white`}
      />
    </button>
  );
}
