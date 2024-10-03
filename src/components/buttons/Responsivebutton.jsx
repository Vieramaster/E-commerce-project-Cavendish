import BarsResponsiveIco from "../SVGs/icons/BarsResponsiveIco";

export default function responsiveButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label="open responsive menu">
      <BarsResponsiveIco className="size-10 stroke-white stroke-1 lg:size-14" />
    </button>
  );
}
