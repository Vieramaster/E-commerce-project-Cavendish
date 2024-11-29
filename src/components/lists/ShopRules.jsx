import { TruckIco } from "../SVGs/icons/TruckIco";
import { CoinIco } from "../SVGs/icons/CoinIco";
import { ReplaceIco } from "../SVGs/icons/ReplaceIco";
import { ShieldDolarIco } from "../SVGs/icons/ShieldDolarIco";

/** @type {Array<{name:string, Component: React.ComponentType, title: string}>} */
export const bannerIcons = [
  { name: "Shipping", Component: TruckIco, title: "Free Shipping & Returns" },
  { name: "Guarantee", Component: CoinIco, title: "100% Money Back Guarantee" },
  {
    name: "Replacement",
    Component: ReplaceIco,
    title: "Replacement in Case of Defect",
  },
  {
    name: "Secure",
    Component: ShieldDolarIco,
    title: "Safe and Secure Checkout",
  },
];

export const ShopRules = () => {
  return (
    <ul className="w-full h-auto py-10 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between border-b-2 border-white ">
      {bannerIcons?.map(({ Component, title, name }) => (
        <li key={name} className="flex flex-col items-center">
          <div className="size-10">
            <Component />
          </div>
          <p className="text-center mt-3">{title}</p>
        </li>
      ))}
    </ul>
  );
};
