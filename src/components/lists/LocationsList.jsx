import { LocationsDotIco } from "../SVGs/icons/LocationDotIco";

/**@param {{list: directionList[] }} props */
export const LocationsList = ({ list }) => {
  return (
    <ul className="w-full h-auto grid gap-5 text-textColor">
      {list?.map(({ localName, direction, phone, city, coordinates }, index) => {
        return (
          <li
            className="w-full p-5 border-border border-b border-t "
            key={index}
          >
            <button className="flex gap-10 w-full h-full" data-cordinates={coordinates}>
              <div className="  size-5  fill-textColor">
                <LocationsDotIco />
              </div>
              <div className="w-5/6 h-full text-start">
                <h3 className="font-semibold font-alternative text-lg">
                  {localName}
                </h3>
                <p>{city}</p>
                <p> {direction}</p>
                <br />
                <p>{phone}</p>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
