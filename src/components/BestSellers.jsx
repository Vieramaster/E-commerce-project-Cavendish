import IcoHeart from "./SVGs/IcoHearth";

import { NavLink } from "react-router-dom";
import ShoppingButton from "./ShoppingButton";

const products = [
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit1.webp",
    price: "$299",
    off: "-40%",
    splash: "25Deg",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
  },
];

export default function BestSellers() {
  return (
    <NavLink className=" w-full h-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10 cursor-pointer ">
      {products?.map((item, index) => (
        <div key={index} className="w-[20rem] h-[30rem] mx-auto  lg:w-full">
          <div className="h-5/6 w-full rounded-2xl bg-darkGrey relative flex flex-col justify-end items-center overflow-hidden  group ">
            <img
              src={item.img}
              alt={item.name}
              className="w-auto h-[95%] group-hover:scale-105 duration-300 ease-in-out"
            />
            <button className="absolute w-10 h-10 top-5 right-5">
              <IcoHeart
                className={
                  "w-10 h-10 stroke-esmerald stroke-1  hover:fill-esmerald"
                }
              />
            </button>
          </div>
          <div className="flex justify-between w-full h-1/6 items-center">
            <div>
              <h3 className="font-semibold text-lg 2xl:text-xl">{item.name}</h3>
              <p className="lg:text-lg">{item.price}</p>
            </div>
            <ShoppingButton size={"w-6 h-6"} />
          </div>
        </div>
      ))}
    </NavLink>
  );
}
