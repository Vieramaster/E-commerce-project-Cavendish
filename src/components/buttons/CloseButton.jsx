

export default function CloseButton({ parentMethod, label, className }) {
  return (
    <button
      className={className}
      onClick={parentMethod}
      aria-label={label}
    >

    </button>
  );
}
