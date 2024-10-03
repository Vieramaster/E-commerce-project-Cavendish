import HearthIco from "../SVGs/icons/HearthIco";

export default function HearthButton({ onClick }) {
  return (
    <button className="absolute top-5 right-5" onClick={onClick} aria-label="favorite">
      <HearthIco className="size-10 stroke-esmerald stroke-1 hover:fill-esmerald" />
    </button>
  );
}
