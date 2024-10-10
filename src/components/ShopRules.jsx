import { TruckIco, CoinIco, ReplaceIco, ShieldDolarIco } from "./SVGs/icons";

const bannerIcons = [
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

const ShopRules = () => {
  return (
    <div className="w-full h-auto py-10 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between border-b-2 border-lightCarbon">
      {bannerIcons?.map(({ Component, title, name }) => (
        <div key={name}>
          <Component className="size-10" />
          <p className="text-center mt-3">{title}</p>
        </div>
      ))}
    </div>
  );
};
export default ShopRules;
