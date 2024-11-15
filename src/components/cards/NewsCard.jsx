import { Link } from "react-router-dom";

/** @param {{image: string, imageAlt: string, date: string, title: string, introduction: string, toPage:string}} props*/

export const NewsCard = ({
  image,
  imageAlt,
  date,
  title,
  introduction,
  toPage,
}) => {
  return (
    <Link
      to={toPage}
      className="w-80 h-96 rounded-md flex flex-col gap-1 lg:w-1/3 lg:h-auto"
    >
      <div className="h-2/3 w-full relative">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full bg-cover rounded-md"
        />

        <span className="absolute bottom-3 left-3  px-4 py-1 bg-mainColor text-white font-alternative rounded-md">
          {date}
        </span>
      </div>
      <div className="w-full h-1/3 flex flex-col gap-2 text-center lg:text-left text-wrap overflow-hidden truncate">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{introduction}</p>
      </div>
    </Link>
  );
};
