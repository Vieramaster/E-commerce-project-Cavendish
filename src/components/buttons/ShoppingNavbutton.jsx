import IcoShoppingCart from "../SVGs/icons/IcoShoppingCart";
export default function ShoppingNavButton() {
  return (
    <button className="flex gap-2 p-3 rounded-full items-center justify-center bg-yellow ">
      <IcoShoppingCart className="size-4 stroke-darkEsmerald stroke-2 lg:size-8" />
    </button>
  );
}
