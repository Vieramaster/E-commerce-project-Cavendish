import "../../types";

/**@param {{array : ObjectClothes}} props*/
export const DescriptionShopCard = ({ array }) => {

  return (
    <div className="flex justify-between px-3 h-1/6 w-full ">
      <div className="h-full w-5/6 flex flex-col ">
        <div className="h-1/2 w-auto text-start  place-content-center">
          <h3 className="font-semibold  text-lg ">{array.name}</h3>
        </div>
        <div className="flex h-1/2 w-full gap-2 items-center">
          {array.colors?.map((item, index) => {
            return (
              <span
                key={array.idProduct + index}
                style={{ backgroundColor: `${item.hex}` }}
                className="w-8 h-4 rounded-sm border border-lightGrey "
                aria-label={item.nameColor}
              ></span>
            );
          })}
        </div>
      </div>
      <div className="h-full w-1/6 grid place-content-center">
        <p className="text-3xl font-semibold">${array.price}</p>
      </div>
    </div>
  );
};
