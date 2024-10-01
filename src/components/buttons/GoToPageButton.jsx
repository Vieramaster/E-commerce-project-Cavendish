import RightArrowIco from "../SVGs/icons/RightArrowIco";
export default function GoToPageButton({onClick}) {
  return (
    <button 
    onClick={onClick}
    className="absolute bg-darkGrey rounded-full top-3 right-3 size-10 hover:scale-105 duration-200 ease-in-out">
      <RightArrowIco className={"stroke-lightCarbon size-8"} />
    </button>
  );
}
