export default function ArrowButton({ onClick, disabled }) {
  return (
    <button {...{ onClick, disabled }}>
      <IcoCircleArrowLeft className="w-12 h-12 lg:w-16 lg:h-16 hover:stroke-yellow duration-200 ease-in-out" />
    </button>
  );
}
