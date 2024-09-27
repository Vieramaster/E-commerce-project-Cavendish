import HearthButton from "../buttons/HearthButton";
import ShoppingButton from "../buttons/ShoppingButton";

export default function BestSellers({ title, array }) {
  return (
    <section className="w-full h-auto py-16 bg-white flex items-center justify-center">
      <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
        <h2 className=" text-carbon font-semibold text-3xl text-center lg:text-start lg:text-5xl">
          {title}
        </h2>
        <div className="w-full grid grid-cols-1 gap-10  justify-items-center lg:justify-items-end lg:grid-cols-2 lg: 2xl:flex 2xl:justify-between">
          {array?.map((item, index) => (
            <div
              key={item.key}
              className={`relative w-[20rem] h-[30rem] rounded-xl flex flex-col  items-center lg:w-[24rem] lg:h-[34rem] xl:w-[30rem] 2xl:w-1/4 2xl:h-[35rem] ${
                index === 0 || index === 2
                  ? "lg:justify-self-start lg:self-start"
                  : ""
              }`}
            >
              <div className=" bg-darkGrey h-5/6 w-full rounded-2xl  relative flex flex-col justify-end items-center overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-auto h-[95%] group-hover:scale-105 duration-300 ease-in-out"
                />
                <HearthButton />
              </div>
              <div className="flex justify-between w-full h-1/6 items-center">
                <div>
                  <h3 className="text-xl 2xl:text-xl">
                    {item.name}
                  </h3>
                  <p className="lg:text-xl  ">{item.price}</p>
                </div>
                <ShoppingButton
                  SVGclass="size-6 stroke-carbon"
                  background={"bg-yellow hover:bg-esmerald"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
