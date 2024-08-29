export default function IcoArrowList({ isOpen }) {
  return (
    <svg
      viewBox="0 0 320 512"
      className={`w-6 h-6 fill-white origin-center lg:rotate-90 lg:w-5 lg:h-5 lg:fill-grey group-hover:lg:fill-white duration-200 ease-in ${
        isOpen ? "rotate-90 lg:-rotate-90" : "lg:rotate-90"
      }`}
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
}
