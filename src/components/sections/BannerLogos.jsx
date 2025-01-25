import { AdidasLogo } from "../SVGs/logos/AdidasLogo"
import { UnderArmorLogo } from "../SVGs/logos/UnderArmorLogo";
import { VansLogo } from "../SVGs/logos/VansLogo";
import { DCLogo } from "../SVGs/logos/DCLogo";
import { ConverseLogo } from "../SVGs/logos/ConverseLogo";
import { PumaLogo } from "../SVGs/logos/PumaLogo";

/** @type {{Component: React.ComponentType, key: string, label: string}[]} */
export const logos = [
  { Component: UnderArmorLogo, key: "UnderArmor", label: "Under Armor Logo" },
  { Component: AdidasLogo, key: "Adidas", label: "Adidas Logo" },
  { Component: VansLogo, key: "Vans", label: "Vans Logo" },
  { Component: DCLogo, key: "DC", label: "DC Shoes Logo" },
  { Component: ConverseLogo, key: "Converse", label: "Converse Logo" },
  { Component: PumaLogo, key: "Puma", label: "Puma Logo" },
];

export const BannerLogos = () => {
  return (
    <section className="w-full bg-mainColor py-5">
      <ul className="w-5/6 mx-auto grid grid-rows-2 grid-cols-3 gap-5 lg:flex lg:justify-between">
        {logos.map(({ Component, key, label }) => (
          <li
            className="h-8 sm:h-10 lg:h-12 2xl:h-14 flex justify-center items-center fill-background"
            key={key}
            aria-label={label}
          >
            <Component />
          </li>
        ))}
      </ul>
    </section>

);
};

