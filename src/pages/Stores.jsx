import { Maps } from "../components/maps";
import { LocationsList } from "../components/lists/LocationsList";

const locationList = [
  {
    localName: "Central",
    city: "Mar del Plata",
    direction: "San Martin 2535, between Cordoba and Santiago del Estero",
    phone: "223-6035025",
    coordinates: "[-37.999652, -57.546397]",
  },
  {
    localName: "Outlet",
    city: "Mar del Plata",
    direction: "Rivadavia 2054, ",
    phone: "223-4753585",
    coordinates: "[-38.001506, -57.545048]",
  },
  {
    localName: "Central",
    city: "Mar del Plata",
    direction: "San Martin 2535, ",
    phone: "223-6035025",
    coordinates: "[-37.999652, -57.546397]",
  },
  {
    localName: "Central",
    city: "Mar del Plata",
    direction: "San Martin 2535, ",
    phone: "223-6035025",
    coordinates: "[-37.999652, -57.546397]",
  },
];

const Stores = () => {
  return (
    <section className="w-full h-auto pt-28 pb-10 bg-background">
      <div className="w-5/6 h-auto mx-auto grid gap-5">
        <Maps />
        <LocationsList list={locationList} />
      </div>
    </section>
  );
};

export default Stores;
