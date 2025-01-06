import { DeliveryTablePage } from "../components/DeliveyTablePage";

const textTable = [
  {
    country: "mexico",
    DeliveryMethod: "Standard Delivery",
    cost: "$4.95 or FREE (On orders over $75)",
    DeliveryTimes: "3-5 Working Days",
  },
  {
    country: "Uruguay and chile  ",
    DeliveryMethod: "Express Delivery (DPD)",
    cost: "$4.95 or FREE (On orders over $75)",
    DeliveryTimes: "3-5 Working Days",
  },
  {
    country: "Argentina and Brazil",
    DeliveryMethod: "Standard Delivery",
    cost: "$6.95",
    DeliveryTimes: "1-2 Working Days",
  },
];

const Delivery = () => {
  return (
    <section className="w-full h-auto pt-28 bg-background">
      <div className="w-5/6 h-auto mx-auto py-10">
        <h1>Delidery</h1>
        <h3>Delivery options</h3>
        <DeliveryTablePage arrayTable={textTable}/>
      </div>
    </section>
  );
};
export default Delivery;
