export const CheckOutForm = () => {
  return (
    <fieldset className=" min-h-96 w-full h-auto ">
      <legend className="text-3xl font-semibold my-2 bg-green-500 ">
        Delivery
      </legend>
      <form action="">
        <select
          name=""
          id="country"
          className="w-full h-14 border border-border rounded-md flex flex-col gap-2"
        >
            <label htmlFor="country" >holasssss</label>
          <option value="default">Argentina</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazil</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Chile">Chile</option>
        </select>
      </form>
    </fieldset>
  );
};
