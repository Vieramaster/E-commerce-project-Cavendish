import CloseResponsiveIco from "../SVGs/icons/CloseResponsiveIco";

export default function CloseButton({ onClick, className }) {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label="close button"
    >
      <CloseResponsiveIco className="w-8 h-8" />
    </button>
  );
}
