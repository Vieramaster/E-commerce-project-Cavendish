//@ts-check
import React from "react";
import { NewsCard } from "../cards/NewsCard";

/**
 * @param {{arrayNews:Array<{id:string, image: string, imageAlt: string, date: string, title: string, introduction: string}>, mainTitle:string}} props
 * @returns {JSX.Element}
 */
export const News = ({ arrayNews, mainTitle }) => {
  return (
    <section className="w-full bg-lightGrey py-16 text-carbon">
      <div className="w-full h-full lg:w-5/6 m-auto ">
        <h2 className="font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
          {mainTitle}
        </h2>
        <div className="w-full h-auto  mt-10 flex flex-col gap-10 items-center justify-center lg:flex-row lg:gap-20 ">
          {arrayNews?.map((item) => {
            return <NewsCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
