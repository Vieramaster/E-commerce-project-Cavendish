import { VisaLogo } from "../SVGs/logos/VisaLogo";
import { MaestroLogo } from "../SVGs/logos/MaestroLogo";
import { MastercardLogo } from "../SVGs/logos/MasterCardLogo";
import { AmericanExpressLogo } from "../SVGs/logos/AmericanExpressLogo";
export const CardsLogoList = () => {
  const cardList = [
    { Component: VisaLogo, alt: "Visa Logo" },
    { Component: MaestroLogo, alt: "Maestro Logo" },
    { Component: MastercardLogo, alt: "Mastercard Logo" },
    {Component: AmericanExpressLogo, alt: "American Express Logo" },
  ];
  return (
    <ul className="w-5/6 mx-auto h-14 flex justify-start items-center gap-4">
      {cardList.map(({ Component, alt }, index) => (
        <li key={alt} className="w-14 h-14">
          <Component />
        </li>
      ))}
    </ul>
  );
};
