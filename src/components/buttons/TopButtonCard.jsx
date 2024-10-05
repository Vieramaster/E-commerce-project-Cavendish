export default function TopButtonCard({ parentMethod, label, background }) {
  return (
    <button
      onClick={parentMethod}
      className={`${
        background ? "bg-darkGrey rounded-full" : ""
      } absolute  top-5 right-5 size-10 hover:scale-105 duration-200 ease-in-out`}
      aria-label={label}
    ></button>
  );
}
