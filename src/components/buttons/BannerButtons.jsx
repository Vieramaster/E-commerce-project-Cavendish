import LeftArrowIco from "../SVGs/icons/LeftArrowIco";
import RightArrowIco from "../SVGs/icons/RightArrowIco";

const classArrows =
  "size-10 lg:size-16 hover:stroke-yellow duration-200 ease-in-out";

export default function BannerButtons({ previus, next, isDisabled }) {
  return (
    <div className="absolute w-full h-20 flex justify-between items-center px-2 bottom-4">
      <button
        onClick={previus}
        disabled={isDisabled}
        aria-label="previus outfit"
      >
        <LeftArrowIco className={classArrows} />
      </button>
      <button onClick={next} disabled={isDisabled} aria-label="next outfit">
        <RightArrowIco className={classArrows} />
      </button>
    </div>
  );
}
