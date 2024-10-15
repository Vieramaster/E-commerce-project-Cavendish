//@ts-check
import React from "react";
import { HomeCardSlider } from "../sliders/HomeCardSlider";
import {HomeTitle} from "../HomeTitle";

/**@returns {JSX.Element} */
export const IntroHome = () => {
  return (
    <section className="w-full h-auto  bg-gradient-to-br  from-darkEsmerald to-esmerald pt-24 lg:h-[50rem] 2xl:h-screen">
      <div className=" w-full h-full pt-10 text-white text-center mx-auto  lg:w-5/6 lg:flex">
        <HomeTitle
          year={"2025"}
          title={"Summer Jackets"}
          subtitle={"Summer Sale / up to 50% OFF"}
        />
        <HomeCardSlider />
      </div>
    </section>
  );
};
