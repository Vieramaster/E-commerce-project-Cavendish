/**
 * @param {{
 * toggleSize: boolean,
 * children: React.ReactNode
 * }}
 *props
 */
export const ShopCard = ({ toggleSize, children }) => {
  const cardSize = toggleSize ? "md:w-[32rem] md:h-[40rem]" : "md:w-80 md:h-[25rem]";
  return (
    <li
      className={` 
        
          ${cardSize}
          w-64
          h-[21rem]
          relative 
          bg-lightGrey
          rounded-lg
         text-lightGrey
          flex flex-col
          justify-center 
          mx-auto
          items-center 
          `}
    >
      {children}
    </li>
  );
};
