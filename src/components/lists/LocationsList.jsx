import { LocationsDotIco } from "../SVGs/icons/LocationDotIco";
import { LocationButton } from "../buttons/LocationButton";

/**@param {{list: directionList[], handleFocusDirection: React.MouseEventHandler<HTMLButtonElement> }} props */
export const LocationsList = ({ list, handleFocusDirection }) => {
  return (
    <ul className="w-full h-auto grid gap-5 text-textColor">
      {list?.map(
        ({ localName, direction, phone, city, coordinates }, index) => {
          return (
            <li
              className="w-full p-5 border-border border-b border-t "
              key={`${index}-${phone}`}
            >
              <LocationButton
                data-coordinates={coordinates}
                icon={<LocationsDotIco />}
                {...{ localName, direction, phone, city }}
                aria-label={`
                            The address of this place is ${direction}`}
                title="store direction"
                onClick={handleFocusDirection}
                data-id={list[index].coordinates}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};
