import { BottomButtonCard } from "../buttons/BottomButtonCard";

/**
 * @param {{title:string, subtitle:string, imageAlt:string, image:string}} props
 * @returns {JSX.Element}
 */
export const MainCardExtend = ({ title, subtitle, imageAlt, image }) => {
  return (
    <div className="bg-yellow  relative rounded-3xl w-[20rem] h-[30rem]  flex flex-col justify-between items-center lg:flex-auto lg:flex-row-reverse 2xl:h-[36rem]">
      <div className="w-full h-20  grid place-content-center text-center lg:w-1/2">
        <p className="font-semibold text-xl  lg:text-3xl 2xl:text-4xl mt-10 lg:mt-0">
          {title}
        </p>
        <p className="font-semibold text-2xl  text-esmerald lg:text-5xl 2xl:text-6xl">
          {subtitle}
        </p>
      </div>

      <div className=" w-full h-5/6 flex items-end justify-center lg:w-1/2 lg:h-full">
        <img
          src={image}
          alt={imageAlt}
          className="w-2/3 h-auto lg:w-auto lg:h-[95%]"
        />
      </div>
      <BottomButtonCard aria-label="go to page">Discover now</BottomButtonCard>
    </div>
  );
};
