import IcoHeart from "./SVGs/IcoHearth";
import IcoShoppingCart from "./SVGs/IcoShoppingCart";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10">
      {products?.map((item, index) => {
        return (
          <div className="w-[20rem] h-[30rem]" id={index}>
            <div className="h-5/6 w-full rounded-2xl bg-darkGrey relative flex flex-col justify-end items-center">
              <img src={item.img} alt={item.name} className="h-auto w-4/6" />
              <button className="absolute w-10 h-10 top-5 right-5">
                <IcoHeart className={"w-10 h-10 stroke-esmerald stroke-1"} />
              </button>
            </div>
            <div className="flex justify-between w-full h-1/6 items-center ">
              <div>
                <h3 className="font-semibold text-lg"> {item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button className="h-12 w-12 bg-yellow rounded-2xl grid place-content-center">
                <IcoShoppingCart className={"w-6 h-6 stroke-carbon stroke-2"} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
