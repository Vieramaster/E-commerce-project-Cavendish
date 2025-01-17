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
];

const Stores = () => {
  const [locationIndex, setLocationIndex] = useState([0,0]);

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleFocusDirection = useCallback(({ currentTarget }) => {
    const {
      dataset: { id },
    } = currentTarget;

    const toNumber = id ? id.split(",").map(Number) : [];
    setLocationIndex(toNumber)
    

  }, []);

  return (
    <section className="w-full h-auto pt-28 pb-10 bg-background">
      <div className="w-5/6 h-auto mx-auto grid gap-5">
        <Maps markers={locationList} zoomMark={locationIndex}  />
        <LocationsList list={locationList} {...{ handleFocusDirection }}  />
      </div>
    </section>
  );
};

export default Stores;
