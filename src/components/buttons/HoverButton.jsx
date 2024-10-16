/**
 * @typedef {object} Styles
 * @property {string} primary
 * @property {string} secondary
 */

/**
 * @type {Styles}
 */
export const classHoverButton = {
  primary: "bg-yellow hover:bg-esmerald",
  secondary: "bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald",
};

/**
 * @param {{readonly color?: keyof Styles} & JSX.IntrinsicElements['button']} props
 * @returns {JSX.Element}
 */
export const HoverButton = ({ color = "primary", ...props }) => {
  return (
    <button
      className={`p-3 rounded-lg duration-200 ease-in-out group ${classHoverButton[color]}`}
      {...props}
    />
  );
};
