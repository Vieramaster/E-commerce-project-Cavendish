/**
 * @param {{
 * toggleSize: boolean,
 * children: React.ReactNode
 * }}
 *props
 */
export const ShopCard = ({ toggleSize, children }) => {

  const cardSize = toggleSize ? "w-[32rem] h-[40rem]" : "w-80 h-[25rem]";
  return (
    <li
      className={` 
          relative 
          bg-lightGrey
          rounded-lg
         text-lightGrey
          flex flex-col
          justify-center 
          mx-auto
          items-center 
          ${cardSize}
          `}
    >
      {children}
    </li>
  );
};
