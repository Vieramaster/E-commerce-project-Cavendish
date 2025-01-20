import { DateInput } from "./dateInput";
import { CardsLogoList } from "../lists/CardsLogoList";
import { CustomInput } from "./CustomInput";

/**
 * @param {{
 * handleInputLimit: (event: React.ChangeEvent<HTMLInputElement>) => void
 * }} props
 */
export const PaymentFormPart = ({ handleInputLimit }) => {
  return (
    <div className="w-full h-auto bg-lightGrey rounded-lg pb-4">
      {/* Card logos */}
      <div className="w-full h-14 bg-white border-x border-t border-border mb-4 rounded-t-md">
        <CardsLogoList />
      </div>

      {/* Payment form fields */}
      <div className="flex flex-col gap-4 w-5/6 h-auto mx-auto">
        {/* Card number input */}
        <CustomInput
          text={false}
          smallInput={false}
          placeholder="Card number"
          aria-label="Enter your card number"
        />

        {/* Expiration date and security code */}
        <div className="flex w-full h-auto flex-col gap-4 md:flex-row md:gap-4">
          {/* Expiration date inputs */}
          <div className="bg-white w-full h-auto flex justify-between items-center border border-border rounded-md  py-2 md:w-1/2 px-5">
            <div className="h-full flex gap-2 text-center ">
              <DateInput
                onInput={handleInputLimit}
                placeholder="MM"
                aria-label="Enter the month of expiration (MM)"
                data-maxlength="2"
              />
              <span>/</span>
              <DateInput
                onInput={handleInputLimit}
                placeholder="YY"
                aria-label="Enter the year of expiration (YY)"
                data-maxlength="2"
              />
            </div>
            <p className="text-lightTextColor text-sm  items-center ">
              Expiration date
            </p>
          </div>

          {/* Security code input */}
          <CustomInput
            text={false}
            smallInput
            placeholder="Security code"
            aria-label="Enter your card's security code (CVV)"
            onInput={handleInputLimit}
            data-maxlength="3"
          />
        </div>

        {/* Name on card input */}
        <CustomInput
          text
          smallInput={false}
          placeholder="Name on card"
          aria-label="Enter the name on your card"
        />
      </div>
    </div>
  );
};
