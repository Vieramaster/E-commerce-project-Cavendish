/**@param {{firstPage:boolean}} props*/
export const MiniSection = ({ firstPage }) => {
  return (
    <div
      className={`${
        firstPage ? "pt-28 min-h-screen lg:h-[50rem] 2xl:h-screen" : "h-auto"
      } w-full `}
    ></div>
  );
};
