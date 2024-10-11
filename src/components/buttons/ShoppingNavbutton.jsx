import { ShoppingCartIco } from "../SVGs/icons";
const ShoppingNavButton = () => {
  return (
    <button
      className="flex gap-2 p-3 rounded-full items-center justify-center bg-yellow "
      aria-label="show cart"
    >
      <ShoppingCartIco className="size-4 stroke-darkEsmerald stroke-2 lg:size-8" />
    </button>
  );
};
export default ShoppingNavButton;
