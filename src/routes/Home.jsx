import Header from "../components/sections/Header";
import IntroHome from "../components/sections/IntroHome";
import Outlet from "../components/sections/Outlet";
import BannerLogos from "../components/sections/BannerLogos";
import ShoppingCards from "../components/cards/ShoppingCards";

const bestSellers = [
  {
    name: "Green jacket",
    img: "src/assets/images/outfit1.webp",
    price: "$299",
    off: "-40%",
    splash: "25Deg",
    key: "green",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
    key: "red",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
    key: "blue",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    splash: "20deg",
    key: "brown",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <IntroHome />
      <BannerLogos />
      <Outlet
        mainTitle={"New Collection"}
        card1Title={"Summer Collection"}
        imageCard1={"src/assets/images/imageCard1.webp"}
        card2Title={"Men Bags Collection"}
        card2SubTitle={"40%OFF"}
        imageCard2={"src/assets/images/imageCard2.webp"}
      />
      <ShoppingCards array={bestSellers} title={"Best Sellers"} />
    </>
  );
}
