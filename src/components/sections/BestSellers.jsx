import IcoHeart from "../SVGs/icons/IcoHearth";

import ShoppingButton from "../buttons/ShoppingButton";

const products = [
  {
    name: "Green jacket",
    img: "src/assets/images/outfit1.webp",
    price: "$299",
    off: "-40%",
    splash: "25Deg",
    key: "green",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
    key: "red",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
    key: "blue",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
    key: "brown",
  },
];

export default function BestSellers() {
  return (
    <section className="w-full h-auto py-16 bg-white flex items-center justify-center">
      <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
        <h2 className=" font-semibold text-3xl text-center lg:text-start lg:text-5xl">
          Best Sellers
        </h2>
        <div className="w-full grid grid-cols-1 gap-10  justify-items-center lg:justify-items-end lg:grid-cols-2 lg: 2xl:grid-cols-4  bg-red-500 ">
          {products?.map((item) => (
            <div
              key={item.key}
              className=" relative w-[20rem] h-[30rem] rounded-xl flex flex-col  items-center lg:w-[25rem] lg:h-[37rem] 2xl:w-[22rem] 2xl:h-[33rem]"
            >
              <div className=" bg-darkGrey h-5/6 w-full rounded-2xl  relative flex flex-col justify-end items-center overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-auto h-[95%] group-hover:scale-105 duration-300 ease-in-out"
                />
                <button className="absolute w-10 h-10 top-5 right-5">
                  <IcoHeart className="w-10 h-10 stroke-esmerald stroke-1 hover:fill-esmerald" />
                </button>
              </div>
              <div className="flex justify-between w-full h-1/6 items-center">
                <div>
                  <h3 className="font-semibold text-lg 2xl:text-xl">
                    {item.name}
                  </h3>
                  <p className="lg:text-lg">{item.price}</p>
                </div>
                <ShoppingButton size="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
