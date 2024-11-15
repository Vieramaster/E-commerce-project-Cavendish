import "../../../types";

/**@param {{array : ClothesObject, toggleSize: boolean}} props*/
export const DescriptionShopCard = ({ array, toggleSize }) => {
  return (
    <div className="flex justify-between px-3 h-1/6 w-full bg-offWhite text-textColor">
      <div className="h-full w-5/6 flex flex-col ">
        <div className="h-1/2 w-auto text-start  place-content-center">
          <h3
            className={`font-medium   ${toggleSize ? "text-3xl" : "text-lg"}`}
          >
            {array.name}
          </h3>
        </div>
        <div className="flex h-1/2 w-full gap-2 items-center">
          {array.colors?.map((item, index) => {
            return (
              <span
                key={array.idProduct + index}
                style={{ backgroundColor: `${item.hex}` }}
                className={`rounded-sm border border-textColor ${
                  toggleSize ? "w-20 h-8" : "w-10 h-4 "
                }`}
                aria-label={item.colorName}
              ></span>
            );
          })}
        </div>
      </div>
      <div className="h-full w-1/6 grid place-content-center ">
        <p
          className={`font-semibold font-alternative  ${
            toggleSize ? "text-6xl" : "text-3xl"
          }`}
        >
          ${array.price}
        </p>
      </div>
    </div>
  );
};
