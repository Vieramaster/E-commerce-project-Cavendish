import { CustomInput } from "../forms/CustomInput";

/**
 * @param {{
 * formData: paymentFormData ,
 * handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
 * }} props
 */
export const DeliveryFormPart = ({ formData, handleInputChange }) => {
  const {
    country,
    firstName,
    lastName,
    address,
    flat,
    city,
    postalCode,
    phone,
  } = formData;

  return (
    <>
      <div className="relative">
        <span className="absolute top-2 left-3 text-gray-500 text-sm pointer-events-none">
          Selecciona tu país
        </span>
        <select
          name="country"
          value={country}
          onChange={handleInputChange}
          id="countryForm"
          className="w-full h-14 border border-border rounded-md pt-5 pl-3 focus:outline-subdued"
          aria-labelledby="countryForm"
        >
          <option value="Argentina">Argentina</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazil</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Chile">Chile</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full h-auto">
        <CustomInput
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          text
          smallInput
          placeholder="First name"
          aria-label="Enter your first name"
        />
        <CustomInput
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          text
          smallInput
          placeholder="Last name"
          aria-label="Enter your last name"
        />
      </div>

      <CustomInput
        name="address"
        value={address}
        onChange={handleInputChange}
        text
        smallInput={false}
        placeholder="Address"
        aria-label="Enter your address"
      />

      <CustomInput
        name="apartment"
        value={flat}
        onChange={handleInputChange}
        text
        smallInput={false}
        required={false}
        placeholder="Apartment, suite, etc. (optional)"
        aria-label="Enter your apartment, suite, etc. (optional)"
      />

      <div className="flex flex-col sm:flex-row gap-3 w-full h-auto">
        <CustomInput
          name="city"
          value={city}
          onChange={handleInputChange}
          text
          smallInput
          placeholder="City"
          aria-label="Enter your city"
        />
        <CustomInput
          name="postalCode"
          value={postalCode}
          onChange={handleInputChange}
          text={false}
          smallInput
          placeholder="Postal code"
          aria-label="Enter your postal code"
        />
      </div>

      <CustomInput
        name="phone"
        value={phone}
        onChange={handleInputChange}
        text={false}
        smallInput={false}
        placeholder="Phone"
        aria-label="Enter your phone number"
      />
    </>
  );
};
