import Header from "../components/header";

//ICOS
import IcoCircleArrowLeft from "../icons/IcoCircleArrowLeft";
import IcoCircleArrowRight from "../icons/IcoCircleArrowRight";
import HmLogo from "../icons/Logos/HmLogo";
import VansLogo from "../icons/Logos/VansLogo";
import GucciLogo from "../icons/Logos/GucciLogo";
import PradaLogo from "../icons/Logos/PradaLogo"

export default function Home() {
  return (
    <>
      <Header />

      <section className="w-full h-auto min-h-[600px] pt-28 bg-gradient-to-br  from-esmerald to-esmerald flex  flex-col justify-center text-white ">
        <div className="w-full h-80 bg-red-600  flex flex-col p-5 justify-center text-center">
          <h3 className="italic text-3xl ">2025</h3>
          <h2 className="text-6xl ">Summer Jackets</h2>
          <p className=" font-light mt-4">Summer Sale / Up to 50% OFF</p>
          <button className="bg-yellow rounded-lg w-40 h-10 text-darkEsmerald font-semibold mt-4 text-sm mx-auto ">
            Open Collection
          </button>
        </div>
        <div className="w-full h-80 bg-orange-400 px-3 flex gap-3  justify-center">
          <div className="bg-blue-600 h-full w-80 relative flex justify-center items-center">
            <div className="bg-darkEsmerald w-60 h-40  rounded-full rotate-custom"></div>
            <img
              src="src\assets\images\home\outfit1.webp"
              alt="outfit1"
              className="absolute h-full mx-auto"
            />
            <div className="absolute w-auto h-auto top-5 right-12 ">
              <p className="font-normal text-end text-xl pl-5">$299</p>
              <div className="bg-yellow w-14 h-14 rounded-full flex flex-col justify-center items-center text-carbon text-sm">
                <p className="font-bold">-40%</p>
                <p className="font-bold">OFF</p>
              </div>
            </div>
            <div className=" absolute w-full h-10  bottom-0 flex justify-between">
              <button>
                <IcoCircleArrowLeft className={"w-10 h-10  "} />
              </button>
              <button>
                <IcoCircleArrowRight className={"w-10 h-10  "} />
              </button>
            </div>
          </div>

          <ul className="bg-violet-500 h-full w-8 flex-shrink-0 flex flex-col gap-3 justify-start pt-14 items-center">
            <li className="w-3 h-3 rounded-full bg-lightGrey"></li>
            <li className="w-3 h-3 rounded-full bg-lightGrey"></li>
            <li className="w-3 h-3 rounded-full bg-lightGrey"></li>
          </ul>
        </div>
      </section>
      <ul className="h-auto w-full bg-carbon flex flex-row gap-5 justify-around items-center">
        <li>
          <HmLogo className={"h-16"} />
        </li>
        <li>
          <VansLogo className={"h-16"} />
        </li>
        <li>
          <GucciLogo className={"h-8"} />
        </li>
        <li>
          <PradaLogo/>
        </li>
      </ul>
    </>
  );
}
/**
 *
 *
 */
