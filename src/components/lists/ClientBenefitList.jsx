import { ClientBenefitData } from "../data/ClientBenefitData";

export const ClientBenefitList = () => {
  return (
    <ul className=" text-lightCarbon flex flex-col justify-start mt-5 gap-2">
      {ClientBenefitData.map(({ Component, key, text }) => {
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
