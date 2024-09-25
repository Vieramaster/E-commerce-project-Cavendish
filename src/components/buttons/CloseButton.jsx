import IcoCloseResponsive from "../SVGs/icons/IcoCloseResponsive";

export default function CloseButton({ onClick, className }) {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label="close button"
    >
      <IcoCloseResponsive className="w-8 h-8" />
    </button>
  );
}
