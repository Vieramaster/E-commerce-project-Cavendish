/** * @param {{className:string}} props*/
export const TruckIco = ({ className }) => {
  return (
    <svg
      className={`${className} m-auto stroke-1 `}
      role="presentation"
      viewBox="0 0 20 17"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1.5h8v10.629c-.425.35-.742.826-.896 1.371H5.396a2.751 2.751 0 1 0 0 1.5h6.708a2.751 2.751 0 0 0 5.293 0h1.353c.69 0 1.25-.56 1.25-1.25v-5.7l-.1-.175-2.885-5-.217-.375H14.5V0H5zM14.5 9v2.511q.124-.01.25-.011a2.75 2.75 0 0 1 2.646 2H18.5V9zm0-1.5h3.451L15.931 4H14.5zm-13 6.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14.75 13a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M10 3.5H2V5h8zM0 7h6v1.5H0z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
