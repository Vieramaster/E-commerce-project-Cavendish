export default function IcoSearch({ className }) {
  return (
    <svg
      className={`${className} stroke-white`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6" />
    </svg>
  );
}
