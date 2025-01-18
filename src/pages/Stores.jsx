import { Maps } from "../components/maps";
import { LocationsList } from "../components/lists/LocationsList";
import { useCallback, useState } from "react";

/**@type {directionList[]} */
const locationList = [
  {
    localName: "Central",
    city: "Mar del Plata",
    direction: "San Martin 2535, between Cordoba and Santiago del Estero",
    phone: "223-6035025",
    coordinates: [-37.999652, -57.546397],
  },
  {
    localName: "Outlet",
    city: "Mar del Plata",
    direction: "Rivadavia 2254, between Corrientes and Entre ríos",
    phone: "223-4753585",
    coordinates: [-38.001506, -57.545048],
  },

  {
    localName: "Fashion",
    city: "Mar del Plata",
    direction: "Martín Miguel de Güemes 2919, between Alvarado and Castelli  ",
    phone: "223-6035025",
    coordinates: [-38.015869, -57.541841],
  },
  {
    localName: "Exotic",
    city: "Mar del Plata",
    direction: "Av. Constitución 4922, between Lopez and Chubut",
    phone: "223-5421543",
    coordinates: [-37.966248, -57.552205],
  },
  {
    localName: "Outlet",
    city: "Mar del Plata",
    direction: "Av. Colon 2585, between Cordoba and Santiago del Estero",
    phone: "223-255638",
    coordinates: [-38.003586, -57.549814],
  },
];

const Stores = () => {
  /** @type {[number,number]} */
  const initialLocation = [-37.999652, -57.546397];

  /** @type {[[number, number], React.Dispatch<React.SetStateAction<[number,number]>>]}*/
  const [locationIndex, setLocationIndex] = useState(initialLocation);

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleFocusDirection = useCallback(({ currentTarget }) => {
    const {
      dataset: { id },
    } = currentTarget;

    /** @type {[number, number] | undefined} */
    const toNumber = id
      ? id.split(",").map(Number).length === 2
        ? /** @type {[number, number]} */ (id.split(",").map(Number))
        : undefined
      : undefined;

    setLocationIndex(
      toNumber && toNumber.length === 2 ? toNumber : initialLocation
    );
  }, []);

  return (
    <section className="w-full h-auto pt-28 pb-10 bg-background">
      <div className="w-5/6 h-auto mx-auto grid gap-5">
        <div className="h-28 w-full flex items-end lg:h-32">
          <h1 className="font-semibold text-4xl mb-5 text-textColor text-center items-center xl:text-5xl">
            Store Locator
          </h1>
        </div>
        <div className="w-full h-auto mx-auto flex flex-col gap-5 lg:flex-row-reverse lg:h-[40rem] lg:gap-0  overflow-hidden">
          <Maps markers={locationList} zoomMark={locationIndex} />
          <LocationsList
            list={locationList}
            {...{ handleFocusDirection }}
            activeButton={locationIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Stores;
