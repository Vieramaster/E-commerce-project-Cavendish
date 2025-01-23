import { Link } from "react-router-dom";

export const DeliveryInfoData = [
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
