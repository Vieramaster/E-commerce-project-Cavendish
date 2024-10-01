import SliderHomeOff from "../SliderHomeOff";
import OpenColectionButton from "../buttons/OpenCollectionButton";

export default function IntroHome() {
  return (
    <section className="w-full h-auto min-h-[600px] pt-24 bg-gradient-to-br  from-darkEsmerald to-esmerald flex  flex-col justify-center text-white gap-2 lg:flex-row lg:h-screen lg:px-20 lg:-mt10 lg:min-h-[55rem]">
      <div className="w-full h-96  grid place-content-center lg:h-full ">
        <div className="w-80 h-auto  text-center flex flex-col items-center lg:w-[28rem] lg:items-start lg:text-start">
          <h3 className="italic text-3xl lg:text-4xl 2xl:text-5xl ">2025</h3>
          <h2 className="text-6xl lg:text-7xl 2xl:text-[6rem]">
            Summer <br />
            Jackets
          </h2>
          <p className="  mt-4 lg:text-xl 2xl:text-2xl ">
            Summer Sale / Up to 50% OFF
          </p>
          <OpenColectionButton />
        </div>
      </div>
      <SliderHomeOff />
    </section>
  );
}
