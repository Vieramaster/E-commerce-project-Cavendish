
import { MainCard, MainCardExtend } from "../cards";

const MainCards = ({
  mainTitle,
  imageCard1,
  imageCard2,
  card1Title,
  card2Title,
  card2SubTitle,
}) => {
  return (
    <section className="w-full h-auto py-16 bg-lightGrey flex items-center justify-center">
      <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
        <h2 className="  text-carbon font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
          {mainTitle}
        </h2>
        <div className="w-full  flex flex-col gap-10 items-center lg:flex-row lg:justify-center">
          <MainCard
            title={card1Title}
            image={imageCard1}
            imageAlt={card1Title}
          />
          <MainCardExtend
            title={card2Title}
            image={imageCard2}
            imageAlt={card2Title}
            subtitle={card2SubTitle}
          />
        </div>
      </div>
    </section>
  );
};

export default MainCards;
