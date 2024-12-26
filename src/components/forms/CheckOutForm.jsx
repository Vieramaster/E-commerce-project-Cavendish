import { CustomInput } from "./CustomInput";

export const CheckOutForm = () => {
  return (
    <fieldset className="min-h-96 w-full h-auto relative">
      <legend className="text-3xl font-semibold my-2 ">
        Delivery
      </legend>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <span className="absolute top-2 left-3 text-gray-500 text-sm pointer-events-none">
            Selecciona tu país
          </span>
          <select
            name="country"
            id="countryForm"
            className="w-full h-12 border border-border rounded-md pt-5 pl-3 focus:outline-subdued
            "
            aria-labelledby="select country"
          >
            <option value="Argentina">Argentina</option>
            <option value="Mexico">Mexico</option>
            <option value="Brazil">Brazil</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Chile">Chile</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full h-auto ">
          <CustomInput
            smallInput
            placeholder="First name"
            aria-label="Enter your first name"
          />
          <CustomInput
            smallInput
            placeholder="Last name"
            aria-label="Enter your last name"
          />
        </div>
        <CustomInput
          smallInput={false}
          placeholder="Address"
          aria-label="Enter your address"
        />
        <CustomInput
          smallInput={false}
          placeholder="Apartament, suite, etc.(optional)"
          aria-label="Enter your number of apartament, house, etc. (optional)"
        />
        <div className="flex flex-col sm:flex-row gap-3 w-full h-auto ">
          <CustomInput
            smallInput
            placeholder="City"
            aria-label="Enter your city"
          />
          <CustomInput
            smallInput
            placeholder="Postal code"
            aria-label="Enter your postal code"
          />
        </div>
        <CustomInput
          smallInput={false}
          placeholder="Phone"
          aria-label="Enter your phone number"
        />
      </form>
    </fieldset>
  );
};
