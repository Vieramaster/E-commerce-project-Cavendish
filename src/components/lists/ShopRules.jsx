import { RulesLogoData } from "../data/RulesLogoData";

export const ShopRules = () => {
  return (
    <ul className="w-full py-10 px-3 grid grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-between border-b-2 border-white">
      {RulesLogoData.map(({ Component, title, name }) => (
        <li
          key={name}
          className="flex flex-col items-center"
          aria-labelledby={`title-${name}`}
        >
          <div className="size-8 lg:size-10">
            <Component />
          </div>
          <p id={`title-${name}`} className="text-center mt-3">
            {title}
          </p>
        </li>
      ))}
    </ul>
  );
};
