import { LeftArrowIco, RightArrowIco } from "../SVGs/icons";

const classArrows =
  "size-10 lg:size-16 hover:stroke-yellow duration-200 ease-in-out";

const BannerButtons = ({ previous, next, disabled }) => {
  return (
    <div className="absolute w-full h-20 flex justify-between items-center px-2 bottom-4">
      <button
        onClick={previous}
        disabled={disabled}
        aria-label="Previous outfit"
      >
        <LeftArrowIco className={classArrows} />
      </button>
      <button onClick={next} disabled={disabled} aria-label="Next outfit">
        <RightArrowIco className={classArrows} />
      </button>
    </div>
  );
};

export default BannerButtons;
