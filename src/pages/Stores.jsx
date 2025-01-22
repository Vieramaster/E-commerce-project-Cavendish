import { useCallback, useState } from "react";
import { Maps } from "../components/maps";
import { LocationsList } from "../components/lists/LocationsList";
import { StoresData } from "../components/data/StoresData";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Stores = () => {
  useDocumentTitle("Stores");

  /** @type {[number,number]} */
  const initialLocation = [-37.999652, -57.546397];

  /** @type {[[number, number], React.Dispatch<React.SetStateAction<[number,number]>>]}*/
  const [locationIndex, setLocationIndex] = useState(initialLocation);

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleFocusDirection = useCallback(({ currentTarget }) => {
    const {
      dataset: { id },
    } = currentTarget;

    /** @type {[number, number] | undefined} */
    const toNumber = id
      ? id.split(",").map(Number).length === 2
        ? /** @type {[number, number]} */ (id.split(",").map(Number))
        : undefined
      : undefined;

    setLocationIndex(
      toNumber && toNumber.length === 2 ? toNumber : initialLocation
    );
  }, []);

  return (
    <>
      <section className="w-5/6 mx-auto flex flex-col gap-5 py-12 ">
        <h1 className="font-semibold text-4xl mb-5 text-textColor text-start  xl:text-5xl">
          Store Locator
        </h1>
        <div className="w-full flex flex-col gap-5 lg:flex-row-reverse lg:h-[40rem] lg:gap-0  overflow-hidden">
          <Maps markers={StoresData} zoomMark={locationIndex} />
          <LocationsList
            list={StoresData}
            {...{ handleFocusDirection }}
            activeButton={locationIndex}
          />
        </div>
      </section>
    </>
  );
};

export default Stores;
