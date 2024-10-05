export default function ExploreButton({ parentMethod, label }) {
  return (
    <button
      onClick={parentMethod}
      aria-label={label}
      className="absolute bottom-5 right-5 px-4 py-2 bg-carbon text-white rounded-lg font-light text-sm xl:text-xl hover:bg-esmerald duration-200 ease-in-out "
    >
      {label}
    </button>
    
  );
}
