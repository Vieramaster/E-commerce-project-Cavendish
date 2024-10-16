/**
 * @param {{indexArray:number , index:number}} props
 * @returns {JSX.Element}
 * */
export const SliderPoint = ({ indexArray, index }) => {
  return (
    <div
      className={`bg-lightGrey size-3 rounded-full duration-150 ease-in-out ${
        indexArray === index ? "scale-150" : ""
      }`}
    ></div>
  );
};
