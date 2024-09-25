import IcoShoppingCart from "../SVGs/icons/IcoShoppingCart";
export default function ShoppingNavButton() {
  return (
    <button className="flex gap-2 h-10 w-10 rounded-full items-center justify-center bg-yellow lg:h-14 lg:w-14">
      <IcoShoppingCart className="w-4 h-4 stroke-darkEsmerald stroke-2 lg:w-8 lg:h-8" />
    </button>
  );
}
