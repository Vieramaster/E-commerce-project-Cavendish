export const SubscribeBanner = () => {
  return (
    <section
      className="w-full h-auto p-16 text-textColor bg-inputs"
      aria-labelledby="subscribe-banner"
    >
      <fieldset
        className="h-full w-full lg:w-1/2 m-auto text-center"
        id="subscribe-banner"
      >
        <h3 className="font-semibold text-xl lg:text-3xl 2xl:text-4xl">
          Subscribe and get 20% off <br /> your first purchase
        </h3>
        <form className="w-2/3 h-14 mx-auto mt-5 relative">
          <input
            type="email"
            className="w-full h-full rounded-lg outline-none pl-5"
            placeholder="example@gmail.com"
            aria-label="Enter your email address"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="absolute bg-mainColor text-white h-full px-5 rounded-e-lg right-0 cursor-pointer font-alternative"
          />
        </form>
      </fieldset>
    </section>
  );
};
