import CloseButton from "../buttons/CloseButton";
import SearchIco from "../SVGs/icons/SearchIco";

export default function SearchModal({ toggleSearch, searchModal, searchBar }) {
  return (
    <div
      ref={searchModal}
      className={`fixed ${
        searchBar ? "top-24 opacity-100 lg:top-28" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all flex justify-center items-center bg-white lg:h-20 z-30`}
    >
      <fieldset className="w-5/6 max-w-[40rem] h-2/3 flex items-center justify-center rounded-md relative">
        <span className="h-full w-8 px-5 grid place-content-center bg-lightGrey lg:w-20">
          <SearchIco className="stroke-darkGrey size-6 stroke-2 lg:size-8" />
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
        <CloseButton
          onClick={toggleSearch}
          className={
            "w-10 h-full bg-lightGrey grid place-content-center lg:w-20 fill-darkGrey"
          }
        />
      </fieldset>
    </div>
  );
}
