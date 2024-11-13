import { BasicButton } from "../buttons/BasicButton";
import { SearchIco } from "../SVGs/icons/SearchIco";
import { XIco } from "../SVGs/icons/XIco";

/**@param {{componentRef: React.RefObject<HTMLDivElement>, toggle: () => void, open: boolean}} props*/
export const SearchModal = ({ toggle, componentRef, open }) => {
  return (
    <div
      ref={componentRef}
      className={`fixed ${
        open ? "top-28 opacity-100" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all flex justify-center items-center bg-white lg:h-20 z-40 gap-5`}
    >
      <fieldset className="w-4/6 max-w-[40rem] h-2/3 flex items-center justify-center rounded-md relative lg:w-5/6">
        <span className="h-full w-10 grid place-content-center bg-lightGrey lg:w-20 text-lightTextColor ">
          <SearchIco />
        </span>
        <span className="h-2/3 w-[0.1rem] bg-customGrey absolute left-10 lg:left-16"></span>
        <input
          className="outline-none bg-lightGrey w-full h-full pl-3"
          type="search"
          name="search"
          id="search"
          aria-label="search bar"
          placeholder="What are you looking for?"
        />
      </fieldset>

      <BasicButton
        onClick={toggle}
        aria-label="close searchbar"
        responsive={false}
      >
        <XIco/>
      </BasicButton>
    </div>
  );
};
