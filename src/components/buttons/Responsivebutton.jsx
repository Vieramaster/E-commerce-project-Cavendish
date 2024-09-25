import IcoBarsResponsive from "../SVGs/icons/IcoBarsResponsive";

export default function responsiveButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label="open responsive menu">
      <IcoBarsResponsive className="w-10 h-10 stroke-white stroke-1 lg:w-14 lg:h-14" />
    </button>
  );
}
