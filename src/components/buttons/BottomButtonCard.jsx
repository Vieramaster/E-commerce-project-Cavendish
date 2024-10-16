/**
 * @typedef {Object} Styles
 * @property {string} primary
 * @property {string} secondary
 */

/**
 * @type {Styles}
 */
export const buttonStyles = {
  primary: "bg-carbon text-white hover:bg-esmerald",
  secondary: "bg-yellow text-darkEsmerald hover:bg-white hover:text-carbon",
};

/**
 * Bottom buttons for cards
 * @param {{ color?: keyof Styles } & JSX.IntrinsicElements["button"]} props
 * @returns {JSX.Element}
 */
export const BottomButtonCard = ({ color = "primary", ...props }) => (
  <button
    className={`${buttonStyles[color]} absolute bottom-5 right-5 px-4 py-2 rounded-lg text-sm xl:text-xl duration-200 ease-in-out`}
    {...props}
  >
    {props.children}
  </button>
);
