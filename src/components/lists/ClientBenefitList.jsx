import { FastWatchIco } from "../SVGs/icons/FastWatchIco";
import { TruckIco } from "../SVGs/icons/TruckIco";
import { ReplaceIco } from "../SVGs/icons/ReplaceIco";

const informationLi = [
  {
    Component: FastWatchIco,
    text: "Order by 2pm for next day delivery",
    key: "fastWatch",
  },
  {
    Component: TruckIco,
    text: "Free Standard delivery orders over $125+",
    key: "delivery",
  },
  {
    Component: ReplaceIco,
    text: "Free, quick and easy returns",
    key: "replace",
  },
];

export const ClientBenefitList = () => {
  return (
    <ul className=" text-lightCarbon flex flex-col justify-start mt-5 gap-2">
      {informationLi.map(({ Component, key, text }) => {
        return (
          <li
            className="text-lg items-center w-full h-10 flex gap-6 justify-start "
            key={key}
          >
            <span className="size-8">
              <Component />
            </span>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};
