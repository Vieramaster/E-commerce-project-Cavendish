import IcoCloseResponsive from "../SVGs/IcoCloseResponsive";
import IcoSearch from "../SVGs/IcoSearch";

export default function SearchModal({ toggleSearch, searchModal, searchBar }) {
  return (
    <div
      ref={searchModal}
      className={`fixed ${
        searchBar ? "top-24 opacity-100 lg:top-28" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all flex justify-center items-center bg-white lg:h-20`}
    >
      <fieldset className="w-5/6 max-w-[40rem] h-2/3 flex items-center justify-center rounded-md relative">
        <span className="h-full w-8 px-5 grid place-content-center bg-lightGrey lg:w-20">
          <IcoSearch className="stroke-darkGrey w-6 h-6 stroke-2 lg:w-8 lg:h-8" />
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
        <button
          className="w-10 h-full bg-lightGrey grid place-content-center lg:w-20"
          onClick={toggleSearch}
          aria-label="close search"
        >
          <IcoCloseResponsive className="fill-customGrey w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </fieldset>
    </div>
  );
}
