const buttonColor = {
  primary: "bg-esmerald text-white hover:bg-yellow  hover:text-carbon",
  secondary: "bg-semiEsmerald text-white hover:bg-esmerald active:opacity-90",
};

/** @param {JSX.IntrinsicElements['button'] & {readonly color?: "primary" | "secondary"}} props*/
export const DefaultButton = ({ color = "primary", ...props }) => {
  return (
    <button
      className={`${buttonColor[color]} font-medium px-6 py-2  md:text-xl lg:text-xl 2xl:text-2xl rounded-lg duration-200 ease-in-out`}
      {...props}
    >
      {props.children}
    </button>
  );
};
