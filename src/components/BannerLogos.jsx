import AdidasLogo from "./SVGs/Logos/AdidasLogo";
import DCLogo from "./SVGs/Logos/DCLogo";
import PumaLogo from "./SVGs/Logos/PumaLogo";
import UnderArmorLogo from "./SVGs/Logos/UnderArmorLogo";
import VansLogo from "./SVGs/Logos/VansLogo";
import ConverseLogo from "./SVGs/Logos/ConverseLogo";

const ClassNameBanner = "h-8 fill-white sm:h-10 lg:h-12 2xl:h-14";
const ClassNameBannerLi = "grid place-content-center";

export default function BannerLogos() {
  return (
    <div className="h-auto w-full bg-carbon flex justify-center">
      <ul className=" h-auto w-5/6 p-5 grid grid-rows-2 grid-cols-3 gap-5 lg:flex lg:flex-row lg:justify-between ">
        <li className={ClassNameBannerLi}>
          <PumaLogo className={ClassNameBanner} />
        </li>
        <li className={ClassNameBannerLi}>
          <UnderArmorLogo className={ClassNameBanner} />
        </li>
        <li className={ClassNameBannerLi}>
          <AdidasLogo className={ClassNameBanner} />
        </li>
        <li className={ClassNameBannerLi}>
          <VansLogo className={ClassNameBanner} />
        </li>
        <li className={ClassNameBannerLi}>
          <DCLogo className={ClassNameBanner} />
        </li>
        <li className={ClassNameBannerLi}>
          <ConverseLogo className={ClassNameBanner} />
        </li>
      </ul>
    </div>
  );
}
