import CardButton from "../buttons/CardButton";

export default function NewCollection({
  mainTitle,
  imageCard1,
  imageCard2,
  card1Title,
  card2Title,
  card2SubTitle,
}) {
  return (
    <section className="w-full h-auto py-16 bg-lightGrey flex items-center justify-center">
      <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
        <h2 className="  font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
          {mainTitle}
        </h2>
        <div className="w-full  flex flex-col gap-10 items-center lg:flex-row lg:justify-center">
          <div className="bg-darkGrey relative w-[20rem] h-[30rem]  rounded-xl flex flex-col justify-between items-center  2xl:h-[36rem] 2xl:w-[25rem]">
            <div className="w-full h-20  grid place-content-center text-center ">
              <p className="font-medium text-lg  2xl:text-3xl">{card1Title}</p>
            </div>

            <div className="w-full h-5/6 flex justify-center">
              <img src={imageCard1} alt={card1Title} className="w-2/3 h-auto" />
            </div>
            <CardButton />
          </div>

          <div className="bg-yellow  relative rounded-3xl w-[20rem] h-[30rem]  flex flex-col justify-between items-center lg:flex-auto lg:flex-row-reverse 2xl:h-[36rem]">
            <div className="w-full h-20  grid place-content-center text-center lg:w-1/2">
              <p className="font-semibold text-lg  lg:text-2xl 2xl:text-4xl">
                {card2Title}
              </p>
              <p className="font-semibold text-2xl  text-esmerald lg:text-4xl 2xl:text-6xl">
                {card2SubTitle}
              </p>
            </div>

            <div className=" w-full h-5/6 flex items-end justify-center lg:w-1/2 lg:h-full">
              <img
                src={imageCard2}
                alt={card2Title}
                className="w-2/3 h-auto lg:w-auto lg:h-[95%]"
              />
            </div>
            <CardButton />
          </div>
        </div>
      </div>
    </section>
  );
}
