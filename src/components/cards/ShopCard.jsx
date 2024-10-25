import { Link } from "react-router-dom";
import "../types";

/**@param {{link:string, imagesArray: string[], name:string,price:string, colorsArray:ClothesColor[]}} props */


export const ShopCard = ({ link, imagesArray, name, price, colorsArray }) => {
  return (
    <div className=" bg-semiEsmerald relative w-[20rem] h-[25rem] mx-auto rounded-lg flex flex-col  items-center overflow-hidden text-lightGrey ">
      <Link to={link} className="w-[60rem] flex h-5/6 overflow-hidden ">
        {imagesArray.map((item) => {
          return (
            <img
              src={item}
              alt="Photo clothes"
              className="bg-cover w-1/3 h-full hover:scale-110 duration-300 ease-in-out "
            />
          );
        })}
      </Link>
      <div className="flex justify-between px-3 h-1/6 w-full ">
        <div className="h-full w-5/6 flex flex-col ">
          <div className="h-1/2 w-auto text-start  place-content-center">
            <h3 className="font-semibold  text-lg ">{name}</h3>
          </div>
          <div className="flex h-1/2 w-full gap-2 items-center">
            {colorsArray?.map((item) => {
              return (
                <span
                  style={{ backgroundColor: `${item.hex}` }}
                  className="w-8 h-4 rounded-sm border border-lightGrey "
                  aria-label={item.nameColor}
                ></span>
              );
            })}
          </div>
        </div>
        <div className="h-full w-1/6 grid place-content-center">
          <p className="text-3xl font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};
