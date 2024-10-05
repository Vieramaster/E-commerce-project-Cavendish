export default function HoverButton({ background, label, parentMethod }) {
  return (
    <button
      className={`p-3 rounded-lg  duration-200 ease-in-out  ${background}`}
      onClick={parentMethod}
      aria-label={label}
    ></button>
  );
}
