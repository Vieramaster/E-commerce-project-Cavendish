import { Link } from "react-router-dom";
import { DeliveryTablePage } from "../components/DeliveyTablePage";

const textTable = [
  {
    thTitles: ["Country", "Delivery Method", "cost", "Delivery Time"],
    tdText: [
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
    ],
  },
];

const listUL = [
  {
    title: "Delivery information",
    points: [
      "Orders placed using the standard delivery option will be delivered within 3-5 working days. If you have selected Next Day delivery at the checkout, your order will be delivered next working day if ordered before 2pm Monday - Thursday.",
      "Your order will be delivered by DPD",
      "Your item will be shipped from our distribution centre in Mar del Plata, ARG.",
    ],
  },
  {
    title: "Can I amend my delivery address?",
    points: [
      "At this time, we are unable to modify orders that have been placed.",
      <>
        If you need to cancel an order, please contact our customer service
        team. You can reach them via our{" "}
        <Link to="/contact" className="text-lightCarbon underline">
          contact
        </Link>{" "}
        page or by support@Cavendishcountry.com .
      </>,
      "Your item will be shipped from our distribution centre in Mar del Plata, ARG.",
    ],
  },
  {
    title: "Who will deliver my parcel?",
    points: [
      "Your order will be delivered by DPD",
      "If you wish to receive an SMS with a timed delivery slot, please enter your mobile number at checkout.",
    ],
  },
  {
    title: "Do you offer next day delivery?",
    points: [
      "Next day delivery is available for MdP ARG on orders placed before 2pm Monday to Thursday",
      "Orders placed after the cut off of 2pm, will be dispatched the next working day, for delivery the following working day.",
      "Please note that Next Day delivery options are NOT available in mexico.",
      "Next day delivery will not be available from 2pm on the 21st December. Next day delivery will resume on the 6th January 2025. ",
    ],
  },
  {
    title: "Can you deliver to a PO box?",
    points: [
      "We do not deliver to a PO Box or BFPO addresses.",
      "For security reasons we reserve the right not to deliver an order if we believe the address isn’t secure, for example to a communal postal address or PO box. If this affects an order you place, we'll notify you as soon as possible.",
    ],
  },
  {
    title: "How long will delivery take?",
    points: [
      "Orders placed will be delivered within 3-5 working days. Orders placed on Friday will be delivered on Wednesday, as orders will not be dispatched over the weekends or UK bank holidays.",
      "Please note that deliveries are only made on working days, and will not be dispatched over the weekends or bank holidays.",
    ],
  },
  {
    title: "How can I track my order?",
    points: [
      "To track your order, please click on the ‘Track my Order’ button on your ‘Order Dispatched’ email. This will directly link you to the DPD website with your tracking number pre-filled.",
    ],
  },
];

const Delivery = () => {
  return (
    <section className="w-full h-auto pt-28 bg-background">
      <div className="w-5/6 h-auto mx-auto py-10 text-textColor flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Delivery</h1>
        <h3>Delivery options</h3>
        <DeliveryTablePage arrayTable={textTable} />
        {listUL?.map(({ title, points }) => {
          return (
            <>
              <h3 className="font-semibold">{title}</h3>
              <ol className="list-disc list-outside pl-8 sm:pl-10">
                {points.map((item) => {
                  return <li className="pl-2 sm:pl-4 my-2">{item}</li>;
                })}
              </ol>
            </>
          );
        })}
        <h3>latinAmerica & International delivery</h3>
        <p>
          Please{" "}
          <span>
            <Link to="/contact" className="text-lightCarbon underline">
              contact
            </Link>{" "}
          </span>{" "}
          us if you need any further information.
        </p>
      </div>
    </section>
  );
};
export default Delivery;
