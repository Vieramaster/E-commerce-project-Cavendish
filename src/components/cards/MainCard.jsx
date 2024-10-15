import React from "react";
import { BottomButtonCard } from "../buttons/BottomButtonCard";

/**
 * @param {{title:string, image:string, imageAlt:string}} props
 * @returns {JSX.Element}
 * */

export const MainCard = ({ title, image, imageAlt }) => {
  return (
    <div className="bg-darkGrey relative w-[20rem] h-[30rem]  rounded-xl flex flex-col justify-between items-center  2xl:h-[36rem] 2xl:w-[25rem]">
      <div className="w-full h-20  grid place-content-center text-center ">
        <p className="font-medium text-lg md:text-2xl  2xl:text-3xl">{title}</p>
      </div>

      <div className="w-full h-5/6 flex justify-center">
        <img src={image} alt={imageAlt} className="w-2/3 h-auto" />
      </div>
      <BottomButtonCard aria-label="go to page">Discover Now</BottomButtonCard>
    </div>
  );
};
