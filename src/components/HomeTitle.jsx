import { MainButton } from "./buttons/MainButton";

/** @param {{title:string, subtitle:string, year:string, buttonTitle:string}} props*/
export const HomeTitle = ({ title, subtitle, year, buttonTitle }) => {
  return (
    <div className="  w-80 h-auto m-auto lg:w-[22rem] lg:items-start lg:text-left lg:ml-0 2xl:w-[32rem]">
      <h3 className="italic text-4xl lg:text-5xl 2xl:text-6xl ">{year}</h3>
      <h2 className="text-7xl lg:text-[5.5rem] 2xl:text-[7rem]">{title}</h2>
      <p className="  mt-4 text-lg lg:text-2xl 2xl:text-3xl mb-5 ">
        {subtitle}
      </p>
      <MainButton aria-label={buttonTitle}>{buttonTitle}</MainButton>
    </div>
  );
};
