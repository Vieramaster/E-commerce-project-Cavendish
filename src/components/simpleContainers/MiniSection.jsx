/**@param {{firstPage:boolean}} props*/
export const MiniSection = ({ firstPage }) => {

  const isFirstPage = firstPage
    ? "pt-28 min-h-screen lg:h-[50rem] 2xl:h-screen"
    : "h-auto";
    
  return <div className={`${isFirstPage} w-full `}></div>;
};
