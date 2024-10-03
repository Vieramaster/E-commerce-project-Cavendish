export default function BarsResponsiveIco({ className }) {
  return (
    <svg
      className={`${className} m-auto`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
