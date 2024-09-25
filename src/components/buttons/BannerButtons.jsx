
import IcoCircleLeftArrow from "../SVGs/icons/IcoCircleLeftArrow";
import IcoCircleArrowRight from "../SVGs/icons/IcoCircleArrowRight";

const classArrows =
  "w-12 h-12 lg:w-16 lg:h-16 hover:stroke-yellow duration-200 ease-in-out";

export default function BannerButtons({ previous, next, isDisabled }) {
  return (
    <div className="absolute w-full h-20 flex justify-between items-center px-2 bottom-4">
      <button onClick={previous} disabled={isDisabled}>
        <IcoCircleLeftArrow className={classArrows} />
      </button>
      <button onClick={next} disabled={isDisabled}>
        <IcoCircleArrowRight className={classArrows} />
      </button>
    </div>
  );
}

