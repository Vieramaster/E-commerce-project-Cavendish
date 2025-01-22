import React, { useState } from "react";

export const SubscribeBanner = () => {
  const [subscribeFormData, setSubscribeFormData] = useState("");

  /** @param {React.ChangeEvent<HTMLInputElement>} event*/
  const handleInputChange = (event) => {
    setSubscribeFormData(event.target.value);
  };

  /** @param {React.FormEvent<HTMLFormElement>} event*/
  const handleEmail = (event) => {
    event.preventDefault();
    if (subscribeFormData.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Thanks for subscribing! Email: ${subscribeFormData}`);
    setSubscribeFormData("");
  };

  return (
    <section
      className="w-full  py-16 text-textColor bg-inputs"
      aria-labelledby="subscribe-banner-heading"
    >
      <div className="h-full w-5/6 lg:w-1/2 m-auto text-center ">
        <h3 className="font-semibold text-xl lg:text-3xl 2xl:text-4xl">
          Subscribe and get 20% off <br /> your first purchase
        </h3>
        <form
          onSubmit={handleEmail}
          className="w-2/3 h-10 mx-auto mt-5 relative lg:h-12"
          aria-label="Subscribe to our newsletter"
        >
          <input
            type="email"
            name="email"
            className="w-full h-full rounded-lg outline-none pl-5"
            placeholder="Enter your email"
            aria-label="Enter your email address"
            value={subscribeFormData}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="absolute bg-mainColor text-white h-full px-5 rounded-e-lg right-0 cursor-pointer font-alternative"
            aria-label="Submit your email"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
