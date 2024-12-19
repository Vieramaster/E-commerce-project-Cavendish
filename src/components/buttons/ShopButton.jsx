/**@param {JSX.IntrinsicElements["button"]} props */
export const Shopbutton = ({ ...props }) => {
  return (
    <button
      className={`${
        props.disabled
          ? "bg-textColor cursor-not-allowed"
          : "bg-mainColor hover:bg-hover active:opacity-90"
      } w-full font-alternative h-10  text-white mx-auto rounded-md  duration-200 ease-out lg:w-96 lg:ml-0`}
      {...props}
    >
      {props.children}
    </button>
  );
};
