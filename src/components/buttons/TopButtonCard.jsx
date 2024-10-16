/**
 * @param {{ background?: boolean } & JSX.IntrinsicElements["button"]} props
 * @returns {JSX.Element}
 */
export const TopButtonCard = ({ background = true, ...props }) => {
  return (
    <button
      className={`${
        background ? "bg-darkGrey rounded-full" : ""
      } absolute top-5 right-5 size-10 hover:scale-105 duration-200 ease-in-out`}
      {...props}
    >
      {props.children}
    </button>
  );
};
