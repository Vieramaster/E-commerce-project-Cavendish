import { ShopCard } from "../cards/ShopCard";
import { LoaderCircle } from "./LoaderCircle";

/**@param {{toggleSize:boolean }} props */
export const LoaderCards = ({ toggleSize }) => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <ShopCard {...{ toggleSize }} key={index}>
          <LoaderCircle />
        </ShopCard>
      ))}
    </>
  );
};
