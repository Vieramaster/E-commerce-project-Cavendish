/**@param {{SVGClassName:string }} props*/
export const GridIco = ({ SVGClassName }) => {
  return (
    <svg viewBox="0 0 17 17" className="w-full h-full m-auto" fill="none">
      <rect
        x=".5"
        y=".5"
        rx="1.5"
        width="6"
        height="6"
        className={SVGClassName}
      ></rect>
      <rect
        x="10.5"
        y=".5"
        width="6"
        height="6"
        rx="1.5"
        className={SVGClassName}
      ></rect>
      <rect
        x=".5"
        y="10.5"
        width="6"
        height="6"
        rx="1.5"
        className={SVGClassName}
      ></rect>
      <rect
        x="10.5"
        y="10.5"
        width="6"
        height="6"
        rx="1.5"
        className={SVGClassName}
      ></rect>
    </svg>
  );
};
