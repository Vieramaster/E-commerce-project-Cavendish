import { TopButtonCard } from "../buttons/TopButtonCard";


/** @param {{image: string, imageAlt: string, date: string, title: string, introduction: string}} props*/

export const NewsCard = ({ image, imageAlt, date, title, introduction }) => {
  return (
    <div className="w-80 h-96 rounded-xl flex flex-col gap-1 lg:w-1/3 lg:h-auto">
      <div className="h-2/3 w-full relative">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full bg-cover rounded-xl"
        />
        <div className="absolute bg-yellow bottom-3 left-3 px-3 py-2 rounded-xl">
          <p className="font-semibold">{date}</p>
        </div>
        <TopButtonCard>

        </TopButtonCard>
      </div>
      <div className="w-full h-1/3 flex flex-col gap-2 text-center lg:text-left text-wrap overflow-hidden truncate">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{introduction}</p>
      </div>
    </div>
  );
};
