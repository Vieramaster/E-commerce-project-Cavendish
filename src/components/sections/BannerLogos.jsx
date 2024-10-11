import {
  AdidasLogo,
  DCLogo,
  PumaLogo,
  UnderArmorLogo,
  VansLogo,
  ConverseLogo,
} from "../SVGs/logos";

const logos = [
  { Component: PumaLogo, key: "puma" },
  { Component: UnderArmorLogo, key: "underarmor" },
  { Component: AdidasLogo, key: "adidas" },
  { Component: VansLogo, key: "vans" },
  { Component: DCLogo, key: "dc" },
  { Component: ConverseLogo, key: "converse" },
];

const BannerLogos = () => {
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

export default BannerLogos;
