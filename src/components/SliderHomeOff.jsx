//ICOS
import IcoCircleArrowLeft from "../SVGs/IcoCircleArrowLeft";
import IcoCircleArrowRight from "../SVGs/IcoCircleArrowRight";

const classArrows ="w-12 h-12 lg:w-16 lg:h-16 hover:stroke-yellow duration-200 ease-in-out"

export default function SliderHomeOff() {
  return (
    <div className="w-full h-[30rem]  flex  justify-center lg:h-full lg:items-end relative  ">
      <div className="absolute w-[22rem] h-52 translate-y-2/3 rotate-customMd rounded-full bg-darkEsmerald lg:w-[32rem] lg:h-80 lg:-translate-y-1/4  xl:-translate-y-2/4 xl:w-[40rem] xl:h-96"></div>

      <div className="w-96 h-full  relative flex items-end lg:h-[40rem] lg:w-[30rem] 2xl:h-[48rem] 2xl:w-[40rem]">
        <img
          src="src\assets\images\home\outfit1.webp"
          alt="outfit1"
          className="  mx-auto w-auto h-full"
        />
        <div className="absolute w-24 h-auto top-10 right-12 flex flex-col gap-1  lg:w-32">
          <p className="font-bold text-end text-3xl  lg:text-4xl ">$299</p>
          <div className="bg-yellow w-20 h-20 rounded-full flex flex-col justify-center items-center text-carbon text-sm lg:w-28 lg:h-28">
            <p className="font-bold text-lg lg:text-2xl">-40%</p>
            <p className="font-bold text-lg lg:text-2xl">OFF</p>
          </div>
        </div>
        <div className="  absolute w-full h-20  flex justify-between item-center px-1 ">
          <button>
            <IcoCircleArrowLeft className={classArrows} />
          </button>
          <button>
            <IcoCircleArrowRight className={classArrows} />
          </button>
        </div>
      </div>
    </div>
  );
}
