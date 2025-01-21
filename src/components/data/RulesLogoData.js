import { TruckIco } from "../SVGs/icons/TruckIco";
import { CoinIco } from "../SVGs/icons/CoinIco";
import { ReplaceIco } from "../SVGs/icons/ReplaceIco";
import { ShieldDolarIco } from "../SVGs/icons/ShieldDolarIco";

/** @type {BannerIcon[]} */
export const RulesLogoData = [
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