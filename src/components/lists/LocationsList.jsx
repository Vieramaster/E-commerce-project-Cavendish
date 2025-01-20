import { LocationsDotIco } from "../SVGs/icons/LocationDotIco";
import { LocationButton } from "../buttons/LocationButton";

/**
 * @param {{
 * list: directionList[],
 * handleFocusDirection: React.MouseEventHandler<HTMLButtonElement>,
 * activeButton: [number, number]
 * }} props
 */
export const LocationsList = ({ list, handleFocusDirection, activeButton }) => {
  return (
    <ul className="w-full h-auto text-textColor lg:w-2/5 lg:overflow-y-auto">
      {list?.map(
        ({ localName, direction, phone, city, coordinates }, index) => {
          return (
            <li
              className={`w-full p-5 border-border border-b border-t relative ${
                activeButton[0] === coordinates[0] &&
                activeButton[1] === coordinates[1]
                  ? "after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:border-l-4 after:border-hover"
                  : ""
              }`}
              key={`${index}-${phone}`}
            >
              <LocationButton
                data-coordinates={coordinates}
                icon={<LocationsDotIco />}
                {...{ localName, direction, phone, city }}
                aria-label={`The address of this place is ${direction}`}
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
