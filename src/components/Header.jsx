import logo from "../../public/images/logo.webp";
import IcoBasket from "../icons/IcoBasket";

export default function Header() {
  return (
    <header >
      <div>
        <img src={logo} alt="logo" />
        <h1>Enatol</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Store</a>
        </li>
        <li>
          <a href="/">New</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div>
        <h2>menu</h2>
        <button className="">
          <IcoBasket className={"h-5 w-5  fill-base"} />
        </button>
      </div>
    </header>
  );
}
