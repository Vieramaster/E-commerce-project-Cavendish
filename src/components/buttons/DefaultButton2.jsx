/**@param {JSX.IntrinsicElements["button"]} props*/
export const DefaultButton2 = ({ ...props }) => {
  return (
    <button
      className="w-24 h-10 bg-darkEsmerald hover:bg-esmerald active:bg-lightEsmerald rounded-md duration-300 ease-in-out"
      {...props}
    >
      {props.children}
    </button>
  );
};
