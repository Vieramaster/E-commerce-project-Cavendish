/**
 * @typedef {object} Styles
 * @property {string} primary
 * @property {string} secondary
 */

/**
 * @type {Styles}
 */
export const classHoverButton = {
  primary:
    "bg-yellow   text-lightCarbon hover:bg-esmerald hover:text-lightGrey ",
  secondary: "bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald",
};

/**
 * @param {{readonly color?: keyof Styles} & JSX.IntrinsicElements['button']} props
 * @returns {JSX.Element}
 */
export const HoverButton = ({ color = "primary", ...props }) => {
  return (
    <button
      className={` font-medium  p-3 rounded-lg duration-200 ease-in-out group md:text-xl lg:text-2xl 2xl:text-3xl ${classHoverButton[color]}`}
      {...props}
    />
  );
};
