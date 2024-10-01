import IcoBarsResponsive from "../SVGs/icons/IcoBarsResponsive";

export default function responsiveButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label="open responsive menu">
      <IcoBarsResponsive className="size-10 stroke-white stroke-1 lg:size-14" />
    </button>
  );
}
