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
        <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
          <h2 className="  font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
            New collection
          </h2>

          <div className="w-full  flex flex-col gap-10 items-center lg:flex-row lg:justify-center">
            <div className="bg-darkGrey relative w-[20rem] h-[30rem]  rounded-xl flex flex-col justify-between items-center  2xl:h-[36rem] 2xl:w-[25rem]">
              <div className="w-full h-20  grid place-content-center text-center ">
                <p className="font-semibold text-lg  2xl:text-3xl">
                  Summer Collection
                </p>
              </div>

              <div className="w-full h-5/6 flex justify-center">
                <img
                  src="src\assets\images\home/imageCard1.webp"
                  alt="imageCard"
                  className="w-2/3 h-auto"
                />
              </div>
              <ButtonCard />
            </div>

            <div className="bg-yellow  relative rounded-3xl w-[20rem] h-[30rem]  flex flex-col justify-between items-center lg:flex-auto lg:flex-row-reverse 2xl:h-[36rem]">
              <div className="w-full h-20  grid place-content-center text-center lg:w-1/2">
                <p className="font-semibold text-lg  lg:text-2xl 2xl:text-4xl">
                  Men Bags Collection
                </p>
                <p className="font-semibold text-2xl  lg:text-4xl 2xl:text-6xl">
                  40% OFF
                </p>
              </div>

              <div className=" w-full h-5/6 flex items-end justify-center lg:w-1/2 lg:h-full">
                <img
                  src="src/assets/images/home/imageCard2.webp"
                  alt="imageCard"
                  className="w-2/3 h-auto lg:w-auto lg:h-[95%]"
                />
              </div>
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
