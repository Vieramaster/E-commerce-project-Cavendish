const direction = {
  top: "rotate-90",
  bottom: "-rotate-90",
  left: "",
  right: "rotate-180",
};

/**@param {{directionArrow: "top" |"bottom" | "left"|"right"}} props */
export const MinimalistArrow = ({ directionArrow }) => {
  return (
    <svg
      className={`${direction[directionArrow]} w-full h-full m-auto`}
      viewBox="0 0 320 512"
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
};
