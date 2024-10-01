import IcoHeart from "../SVGs/icons/IcoHearth";

export default function HearthButton({ onClick }) {
  return (
    <button className="absolute top-5 right-5" onClick={onClick} aria-label="favorite">
      <IcoHeart className="size-10 stroke-esmerald stroke-1 hover:fill-esmerald" />
    </button>
  );
}
