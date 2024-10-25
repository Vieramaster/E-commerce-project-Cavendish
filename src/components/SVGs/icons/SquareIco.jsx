/**@param {{classNameSquare:string,classNameSvg:string}} props*/

export const SquareIco = ({ classNameSquare, classNameSvg }) => {
  return (
    <svg
      role="presentation"
      viewBox="0 0 18 18"
      fill="none"
      className={classNameSvg}
    >
      <rect
        x=".5"
        y=".5"
        width="17"
        height="17"
        rx="1.5"
        fill="transparent"
        stroke="currentColor"
        className={classNameSquare}
      ></rect>
    </svg>
  );
};
