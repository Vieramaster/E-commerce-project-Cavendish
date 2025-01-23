import { Link } from "react-router-dom";

/**
 * @param {{
 * image: string,
 * imageAlt: string,
 * date: string,
 * title: string,
 * description: string,
 * toPage: string
 * }} props
 * */
export const NewsCard = ({
  image,
  imageAlt,
  date,
  title,
  description,
  toPage,
}) => {
  return (
    <Link to={toPage} className="w-full h-full flex flex-col gap-3">
      <div className="h-2/5 w-full relative">
        <img src={image} alt={imageAlt} className="h-full w-full bg-cover" />
        <span className="absolute bottom-3 left-3 px-4 py-1 bg-mainColor text-white font-alternative rounded-md">
          {date}
        </span>
      </div>
      <div className=" w-full px-2 pb-10  text-textColor overflow-hidden flex-grow  text-ellipsis">
        <h3 className="font-semibold text-lg text-center mb-5 ">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};
