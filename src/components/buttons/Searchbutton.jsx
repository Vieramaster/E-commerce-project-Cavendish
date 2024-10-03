import SearchIco from "../SVGs/icons/SearchIco";

export default function SearchButton({ onClick, boolean }) {
  return (
    <button
      aria-label="search button"
      onClick={onClick}
      disabled={boolean}
      className={boolean ? "opacity-30 cursor-not-allowed" : ""}
    >
      <SearchIco className="size-7 stroke-white stroke-2 lg:size-10" />
    </button>
  );
}
