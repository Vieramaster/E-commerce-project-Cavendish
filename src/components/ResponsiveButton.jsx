export default function responsiveButton({ svg, onClick }) {
  return (
    <button className="h-12 w-12" onClick={onClick}>
      {svg}
    </button>
  );
}
