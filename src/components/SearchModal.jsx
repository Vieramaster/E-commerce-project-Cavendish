import IcoSearch from "../icons/IcoSearch"
import IcoCloseResponsive from "../icons/IcoCloseResponsive";

export default function SearchModal({ toggleSearch, searchModal, searchBar }) {
  return (
    <div
      ref={searchModal}
      className={` fixed ${
        searchBar ? "top-[5.7rem] opacity-100" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all flex gap-0 lg:hidden`}
    >
      <fieldset className="w-full h-full bg-red-500 flex items-center justify-center px-3 ">
        <span className=" h-2/3 w-10  grid place-content-center bg-white ">
          <IcoSearch className=" w-5 h-5 stroke-black " />
        </span>
        <span className="h-1/2 w-[0.1rem] bg-grey absolute left-12"></span>
        <input
          className=" outline-none w-full h-2/3 pl-2 "
          type="search"
          name="search"
          id="search"
          aria-label="search bar"
          placeholder="What are you looking for?"
        />
        <button
          className="w-10 h-2/3 bg-white grid place-content-center"
          onClick={toggleSearch}
        >
          <IcoCloseResponsive className={"fill-grey w-5 h-5"} />
        </button>
      </fieldset>
    </div>
  );
}
