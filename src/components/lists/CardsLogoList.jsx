import { CardsLogoData } from "../data/CardsLogoData";

export const CardsLogoList = () => {
  return (
    <ul className="w-5/6 mx-auto h-14 flex justify-start items-center gap-4">
      {CardsLogoData.map(({ Component, alt }) => (
        <li key={alt} className="size-14">
          <Component />
        </li>
      ))}
    </ul>
  );
};
