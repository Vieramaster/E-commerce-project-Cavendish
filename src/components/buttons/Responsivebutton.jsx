const ResponsiveButton = ({ parentMethod, label, children }) => {
  return (
    <button
      onClick={parentMethod}
      aria-label={label}
      className="size-10  lg:size-14"
    >
      {children}
    </button>
  );
};
export default ResponsiveButton;
