import IcoSearch from "../icons/IcoSearch";
import IcoCloseResponsive from "../icons/IcoCloseResponsive";

export default function SearchModal({ toggleSearch, searchModal, searchBar }) {
  return (
    <div
      ref={searchModal}
      className={` fixed ${
        searchBar ? "top-24 opacity-100  lg:top-28" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all  flex justify-center items-center  gap-0 xl:hidden bg-lightCarbon lg:h-20`}
    >
      <fieldset className="w-full h-2/3  flex items-center justify-center px-3 lg:px-5">
        <span className=" h-full w-10  grid place-content-center bg-white lg:w-20 ">
          <IcoSearch
            className={
              "stroke-darkGrey w-6 h-6 stroke-2 lg:w-8 lg:h-8 lg:stroke-2"
            }
          />
        </span>
        <span className="h-1/2 w-[0.1rem] bg-customGrey absolute left-12 lg:left-20"></span>
        <input
          className=" outline-none w-full h-full pl-3 "
          type="search"
          name="search"
          id="search"
          aria-label="search bar"
          placeholder="What are you looking for?"
        />
        <button
          className="w-10 h-full bg-white grid place-content-center lg:w-20"
          onClick={toggleSearch}
        >
          <IcoCloseResponsive
            className={"fill-customGrey  w-5 h-5 lg:w-8 lg:h-8 lg:"}
          />
        </button>
      </fieldset>
    </div>
  );
}
