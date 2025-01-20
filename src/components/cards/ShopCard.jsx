/**
 * @param {{
 * toggleSize: boolean,
 * children: React.ReactNode
 * }}
 *props
 */
export const ShopCard = ({ toggleSize, children }) => {

  const cardSize = toggleSize ? "w-[40rem] h-[50rem]" : "w-80 h-[25rem]";
  return (
    <li
      className={` 
          relative 
        bg-lightGrey 
          w-80 h-[25rem] 
          mx-auto
          rounded-lg
         text-lightGrey
          flex flex-col
          justify-center 
          items-center 
          lg:w-96 
          lg:h-[30rem]
          ${cardSize}
          `}
    >
      {children}
    </li>
  );
};
