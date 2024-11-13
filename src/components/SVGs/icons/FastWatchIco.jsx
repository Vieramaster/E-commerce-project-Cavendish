/**@param {{className:string}} props*/
export const FastWatchIco = ({ className }) => {
  return (
    <svg
      className={` ${className} m-auto`}
      role="presentation"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 10C0 4.476 4.476 0 10 0c2.48 0 4.752.905 6.5 2.402V0H18v3.75C18 4.44 17.44 5 16.75 5H13V3.5h2.475A8.498 8.498 0 0 0 1.5 10c0 4.696 3.804 8.5 8.5 8.5s8.5-3.804 8.5-8.5c0-.967-.161-1.899-.459-2.76l1.418-.49A10 10 0 0 1 20 10c0 5.524-4.476 10-10 10S0 15.524 0 10m9.25-5.505v5.815l.22.22 3.25 3.25 1.06-1.06-3.03-3.03V4.494z"
      ></path>
    </svg>
  );
};
