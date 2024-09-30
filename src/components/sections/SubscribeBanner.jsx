export default function SubscribeBanner() {
  return (
    <section className="w-full h-auto p-16 text-carbon bg-lightGrey">
      <div className="h-full w-full lg:w-1/2 m-auto text-center ">
        <h3 className="font-semibold text-xl lg:text-3xl 2xl:text-4xl">
          Subscribe and get 20% off <br /> your first purchase
        </h3>
        <fieldset className=" w-2/3 h-14 mx-auto mt-5 relative">
          <input
            type="text"
            className="w-full h-full rounded-lg outline-none  pl-5"
            placeholder="example@gmail.com"
          />
          <input
            type="button"
            value="submit"
            className="absolute bg-yellow h-full px-5 rounded-e-lg right-0 cursor-pointer"
          />
        </fieldset>
      </div>
    </section>
  );
}
