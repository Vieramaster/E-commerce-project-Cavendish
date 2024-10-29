import "../types";

const maxSize = "w-[40rem] h-[50rem]";
const minSize = "w-80 h-[25rem]";

/** @param {{ toggleSize: boolean, children: React.ReactNode}} props */
export const ShopCard = ({ toggleSize, children }) => {
  return (
    <div
      className={`${
        toggleSize ? minSize : maxSize
      } relative bg-lightGrey  w-80 h-[25rem] mx-auto rounded-lg text-lightGrey flex flex-col justify-center items-center`}
    >
      {children}
    </div>
  );
};
