import { CardsLogoList } from "../lists/CardsLogoList";
import { CustomInput } from "./CustomInput";
import { DateInput } from "./dateInput";

/** @param {React.ChangeEvent<HTMLInputElement>} event */
const maxDate = (event) => {
  const { value } = event.currentTarget;
  if (value.length > 2) event.currentTarget.value = value.slice(0, 2);
};

export const PaymentForm = () => {
  return (
    <fieldset className="w-full h-auto bg-lightGrey rounded-lg pb-4">
      <div className="w-full h-14 bg-white border-x border-t border-border mb-4  rounded-t-md">
      <CardsLogoList />
      </div>
      <form action="" className="flex flex-col gap-4 w-5/6 h-auto mx-auto">
        <CustomInput
          text={false}
          smallInput={false}
          placeholder="Card number"
          aria-label="Enter your card number"
        />
        <div className="flex w-full h-auto flex-col gap-4 md:flex-row md:gap-4">
          <div className="bg-white w-full h-12 flex flex-col  border border-border rounded-md pl-3 md:w-1/2">
            <p className="text-lightTextColor">expiration code</p>
            <div className=" flex gap-2 ">
              <DateInput
                maxDate={maxDate}
                placeholder="DD"
                aria-label="Enter the day of the expiration "
              />
              <span>/</span>
              <DateInput
                maxDate={maxDate}
                placeholder="YY"
                aria-label="Enter the year of the expiration "
              />
            </div>
          </div>
          <CustomInput
            text={false}
            smallInput
            placeholder="Security code"
            aria-label="Enter your card security code "
            maxLength={3}
          />
        </div>

        <CustomInput
          text={false}
          smallInput={false}
          placeholder="Name on card"
          aria-label="Enter your card name on card"
        />
      </form>
    </fieldset>
  );
};
