import { SearchIco } from "../SVGs/icons";

const SearchButton = ({ parentMethod, disabled, active }) => {
  return (
    <button
      aria-label="search button"
      onClick={parentMethod}
      disabled={disabled}
      className={active ? "opacity-30 cursor-not-allowed" : ""}
    >
      <SearchIco className="size-7 stroke-white stroke-2 lg:size-10" />
    </button>
  );
};
export default SearchButton;
