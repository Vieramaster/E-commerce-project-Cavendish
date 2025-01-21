import { useCallback, useState } from "react";
import { DeliveryFormPart } from "./DeliveryFormPart";
import { PaymentFormPart } from "./PaymentFormPart";
import { useCart } from "../../hooks/useZustand";
import { totalPrice } from "../../hooks/useMathOperations";
import { WidthButton } from "../buttons/WidthButton";

const h3Class = "text-3xl font-semibold my-2 text-start w-full";

export const CheckOutForm = () => {
  const defaultData = {
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    flat: "",
    city: "",
    postalCode: "",
    phone: "",
    cardNumber: "",
    expirationDay: "",
    expirationYear: "",
    securityCode: "",
    nameOnCard: "",
  };
  
  const [formData, setFormData] = useState(defaultData);

  const { cart } = useCart();
  const sumPrice = totalPrice(cart);

  const handleInputLimit = useCallback(
    (/** @type {React.ChangeEvent<HTMLInputElement>} */ event) => {
      const maxLength = Number(event.currentTarget.dataset.maxlength);
      const { value } = event.currentTarget;

      if (!isNaN(maxLength) && maxLength > 0) {
        event.currentTarget.value = value.slice(0, maxLength);
      }
    },
    []
  );

  /**@param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>}  event*/
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    /** @type {{ preventDefault: () => void; }} */ event
  ) => {
    event.preventDefault();
    if (Object.values(formData).every((value) => value !== "")) {
      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Error sending form");
        }
        const result = await response.json();
        console.log("sent successfully:", result);
        alert("Form submitted successfully");
        setFormData(defaultData);
      } catch (error) {
        console.error("Error!:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <fieldset className="min-h-96 w-full h-auto relative">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h3 className={h3Class}>Delivery</h3>
        <DeliveryFormPart {...{ handleInputChange, formData }} />
        <h3 className={`${h3Class} mt-8`}>Payment</h3>
        <PaymentFormPart
          {...{ handleInputLimit, formData, handleInputChange }}
        />
        <div className="h-14 w-full flex justify-between items-center text-lg lg:text-2xl">
          <p className="font-semibold">Subtotal: {cart.length} items</p>
          <p className="font-semibold">Total: ${sumPrice}</p>
        </div>
        <WidthButton color="mainColor" type="submit">
          Pay now
        </WidthButton>
      </form>
    </fieldset>
  );
};
