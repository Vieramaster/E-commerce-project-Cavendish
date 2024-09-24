export default function IcoCircleArrowRight({ className }) {
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
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
      <path d="M16 12l-4 -4" />
      <path d="M16 12h-8" />
      <path d="M12 16l4 -4" />
    </svg>
  );
}
