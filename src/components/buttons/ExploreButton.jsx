/**
 * Button for letters in cards
 * @param {JSX.IntrinsicElements['button'] & {absolute:boolean}} props
 */
export const ExploreButton = ({ absolute = true, ...props }) => {
  return (
    <button
      className={`${
        absolute ? "absolute" : ""
      }bottom-5 right-5 px-4 py-2 bg-carbon text-white rounded-lg font-light text-sm xl:text-xl hover:bg-esmerald duration-200 ease-in-out`}
      {...props}
    >
      {props.children}
    </button>
  );
};
