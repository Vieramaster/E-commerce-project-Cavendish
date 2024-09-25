import IcoHeart from "../SVGs/icons/IcoHearth";



export default function HearthButton({ onClick }) {
  return (
    <button className="absolute w-10 h-10 top-5 right-5" onClick={onClick}>
      <IcoHeart className="w-10 h-10 stroke-esmerald stroke-1 hover:fill-esmerald" />
    </button>
  );
}
