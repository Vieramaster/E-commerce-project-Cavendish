export default function IcoCircleLeftArrow({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
      <path d="M8 12l4 4" />
      <path d="M8 12h8" />
      <path d="M12 8l-4 4" />
    </svg>
  );
}
