import { VisaLogo } from "../SVGs/logos/VisaLogo";
export const CardsLogoList = () => {
  const cardList = [{ Component: VisaLogo, alt: "Visa Logo" }];
  return (
    <ul className="w-full h-14flex justify-between items-center gap-4">
      {cardList.map(({ Component, alt }, index) => (
        <li key={alt} className="w-14 h-14">
          <Component />
        </li>
      ))}
    </ul>
  );
};
