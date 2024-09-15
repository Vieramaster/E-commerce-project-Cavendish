import BannerLogos from "../components/BannerLogos";
import Header from "../components/header";

//ICOS
import IcoCircleArrowLeft from "../SVGs/IcoCircleArrowLeft";
import IcoCircleArrowRight from "../SVGs/IcoCircleArrowRight";

export default function Home() {
  return (
    <>
      <Header />

      <section className="w-full h-auto min-h-[600px] pt-24 bg-gradient-to-br  from-darkEsmerald to-esmerald flex  flex-col justify-center text-white gap-2 lg:flex-row lg:h-screen lg:px-20">
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
            <button className="bg-yellow rounded-lg  py-3 px-3 text-darkEsmerald font-semibold mt-4 text-sm mx-auto lg:mx-0 lg:text-base 2xl:text-xl ">
              Open Collection
            </button>
          </div>
        </div>
        <div className="w-full h-[30rem]  flex  justify-center lg:h-full lg:items-end ">
          <div className="w-96 h-full  relative flex items-end lg:h-[40rem] lg:w-[30rem] 2xl:h-[48rem] 2xl:w-[40rem]">
            <img
              src="src\assets\images\home\outfit1.webp"
              alt="outfit1"
              className="  mx-auto w-auto h-full"
            />
            <div className="absolute w-24 h-auto top-5 right-8 flex flex-col gap-1  lg:w-32">
              <p className="font-bold text-end text-3xl  lg:text-4xl ">$299</p>
              <div className="bg-yellow w-20 h-20 rounded-full flex flex-col justify-center items-center text-carbon text-sm lg:w-28 lg:h-28">
                <p className="font-bold text-lg lg:text-2xl">-40%</p>
                <p className="font-bold text-lg lg:text-2xl">OFF</p>
              </div>
            </div>
            <div className="  absolute w-full h-20  flex justify-between item-center px-1 ">
              <button>
                <IcoCircleArrowLeft className={"w-12 h-12 lg:w-16 lg:h-16 "} />
              </button>
              <button>
                <IcoCircleArrowRight className={"w-12 h-12 lg:w-16 lg:h-16 "} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <BannerLogos />
      <section className="w-full h-auto min-h-[600px] bg-lightGrey flex flex-col gap-5 items-center justify-center ">
        <h2 className="w-[18rem] text-left text-3xl font-medium">New Collection</h2>
        <div className="flex flex-col gap-5">
          <div className="bg-darkGrey w-[18rem] h-96 rounded-3xl flex flex-col justify-end items-center gap-10  relative">
            <p className="font-semibold ">Mens Summer Collection</p>
            <img src="/" alt="" className="w-2/3 h-72 bg-red-500" />
            <button className="absolute bottom-5 right-5 px-2 py-2 bg-carbon text-white rounded-lg font-light">
            Discover Now
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
