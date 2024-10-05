import { LeftArrowIco, RightArrowIco } from "../SVGs/icons";

const classArrows = "size-10 lg:size-16 hover:stroke-yellow duration-200 ease-in-out";

export default function BannerButtons({ previous, next, isDisabled }) {
  return (
    <div className="absolute w-full h-20 flex justify-between items-center px-2 bottom-4">
      <button
        onClick={previous}
        disabled={isDisabled}
        aria-label="Previous outfit"
      >
        <LeftArrowIco className={classArrows} />
      </button>
      <button
        onClick={next}
        disabled={isDisabled}
        aria-label="Next outfit"
      >
        <RightArrowIco className={classArrows} />
      </button>
    </div>
  );
}
