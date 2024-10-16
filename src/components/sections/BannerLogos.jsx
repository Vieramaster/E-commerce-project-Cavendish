import { AdidasLogo } from "../SVGs/logos/AdidasLogo";
import { UnderArmorLogo } from "../SVGs/logos/UnderArmorLogo";
import { VansLogo } from "../SVGs/logos/VansLogo";
import { DCLogo } from "../SVGs/logos/DCLogo";
import { ConverseLogo } from "../SVGs/logos/ConverseLogo";
import { PumaLogo } from "../SVGs/logos/PumaLogo";

/** @type {Array<{Component: React.ComponentType<{className: string}>, key: string}>} */

const logos = [
  { Component: UnderArmorLogo, key: "UnderArmor" },
  { Component: AdidasLogo, key: "Adidas" },
  { Component: VansLogo, key: "vans" },
  { Component: DCLogo, key: "DC" },
  { Component: ConverseLogo, key: "Converse" },
  { Component: PumaLogo, key: "Puma" },
];

/**
 * @returns {JSX.Element}
 */
export const BannerLogos = () => {
  return (
    <div className="h-auto w-full bg-carbon flex justify-center">
      <ul className="h-auto w-5/6 py-5 grid grid-rows-2 grid-cols-3 gap-5 lg:flex lg:flex-row lg:justify-between">
        {logos?.map(({ Component, key }) => (
          <li className="m-auto" key={key}>
            <Component className="h-8 fill-white sm:h-10 lg:h-12 2xl:h-14" />
          </li>
        ))}
      </ul>
    </div>
  );
};
