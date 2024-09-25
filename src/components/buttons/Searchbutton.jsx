import IcoSearch from "../SVGs/icons/IcoSearch"

export default function SearchButton({onClick, boolean}) {
  return (
    <button
      aria-label="search button"
      onClick={onClick}
      disabled={boolean}
      className={boolean ? "opacity-30 cursor-not-allowed" : ""}
    >
      <IcoSearch className="w-7 h-7 stroke-white stroke-2 lg:w-10 lg:h-10" />
    </button>
  );
}
