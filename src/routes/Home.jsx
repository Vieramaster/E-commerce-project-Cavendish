import BannerLogos from "../components/BannerLogos";
import Header from "../components/header";
import ButtonCard from "../components/buttonCard";
import SliderHomeOff from "../components/SliderHomeOff";
import BestSellers from "../components/BestSellers";

export default function Home() {
  return (
    <>
      <Header />

      <section className="w-full h-auto min-h-[600px] pt-24 bg-gradient-to-br  from-darkEsmerald to-esmerald flex  flex-col justify-center text-white gap-2 lg:flex-row lg:h-screen lg:px-20 lg:-mt10 lg:min-h-[50rem]">
        <div className="w-full h-96  grid place-content-center lg:h-full  ">
          <div className="w-80 h-auto  text-center flex flex-col items-center lg:w-[28rem] lg:items-start lg:text-start">
            <h3 className="italic text-3xl lg:text-4xl 2xl:text-5xl ">2025</h3>
            <h2 className="text-6xl lg:text-7xl 2xl:text-[6rem]">
              Summer <br />
              Jackets
            </h2>
            <p className="  mt-4 lg:text-xl 2xl:text-2xl ">
              Summer Sale / Up to 50% OFF
            </p>
            <button className="bg-yellow rounded-lg  py-3 px-3 text-darkEsmerald font-semibold mt-4 text-sm mx-auto lg:mx-0 lg:text-base 2xl:text-xl  hover:bg-white hover:text-carbon duration-200 ease-in-out">
              Open Collection
            </button>
          </div>
        </div>
        <SliderHomeOff />
      </section>

      <BannerLogos />

      <section className="w-full h-auto py-16 bg-lightGrey flex flex-col gap-10 items-center justify-center xl:gap-16">
        <div className="flex flex-col gap-10">
          <h2 className="w-[18rem] text-center  text-3xl font-medium lg:text-4xl ">
            New collection
          </h2>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="bg-darkGrey w-[18rem] h-96 rounded-3xl flex flex-col justify-between items-center  relative xl:w-[22.5rem] xl:h-[30rem]">
              <p className="font-semibold  h-16  grid place-content-center xl:text-lg">
                Men summer collection
              </p>
              <img
                src="src\assets\images\home/imageCard1.webp"
                alt=""
                className=" flex-1 h-2/3  "
              />
              <ButtonCard />
            </div>
            <div className="bg-yellow relative w-[18rem] h-96 rounded-3xl flex flex-col justify-end items-center   lg:w-[35rem] lg:flex-row-reverse xl:h-[30rem] xl:w-[45rem] lg:items-end lg:justify-between lg:px-10 xl:px-20">
              <div className="h-20 text-center grid place-content-center lg:h-full  gap-4">
                <p className="font-semibold  text-carbon lg:text-3xl">
                  Men Bags Collection
                </p>
                <p className="font-bold text-xl text-carbon lg:text-5xl">
                  -40% OFF
                </p>
              </div>
              <img
                src="src\assets\images\home/imageCard2.webp"
                alt=""
                className=" h-[18.5rem] lg:h-[23rem] xl:h-[28rem]"
              />
              <ButtonCard />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 flex flex-col justify-center items-center  gap-14">
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold text-3xl lg:text-left xl:text-4xl">
            Best Sellers
          </h2>
          <BestSellers />
        </div>
      </section>
    </>
  );
}
