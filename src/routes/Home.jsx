import Header from "../components/sections/Header";
import IntroHome from "../components/sections/IntroHome";
import MainCards from "../components/sections/MainCards";
import BannerLogos from "../components/sections/BannerLogos";
import ShoppingCards from "../components/sections/ShoppingCards";
import SellCounter from "../components/sections/SellCounter";
import useCountdown from "../components/hooks/useCountdown";
import News from "../components/sections/News";
import SubscribeBanner from "../components/sections/SubscribeBanner";
import Footer from "../components/sections/Footer"
import UseApi from "../components/hooks/UseApi"

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

const news = [
  {
    id: "0001",
    image: "src/assets/images/news1.webp",
    imageName: "outfits",
    newsTitle: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum ex? Quasi officia nulla atque sunt iusto l Quasi officia",
  },
  {
    id: "0002",
    image: "src/assets/images/news2.webp",
    imageName: "outfits",
    newsTitle: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum explicabo quo ex? Quasi officia nulla atque sunt iusto l Quasi officia",
  },
  {
    id: "0003",
    image: "src/assets/images/news3.webp",
    imageName: "outfits",
    newsTitle: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum explicabo quo ex? Quasi officia nulla atque sunt iusto ",
  },
];




export default function Home() {

  const {data} = UseApi()

  console.log(data)


  return (
    <>
      <Header />
      <IntroHome />
      <BannerLogos />
      <MainCards
        mainTitle={"New Collection"}
        card1Title={"Summer Collection"}
        imageCard1={"src/assets/images/imageCard1.webp"}
        card2Title={"Men Bags Collection"}
        card2SubTitle={"40%OFF"}
        imageCard2={"src/assets/images/imageCard2.webp"}
      />
      <ShoppingCards array={bestSellers} title={"Best Sellers"} />

      <SellCounter
        afterPrice={"$180"}
        beforePrice={"$50"}
        discount={"-70% OFF"}
        image={"src/assets/images/shoes.webp"}
        timedate={"Oct 14, 2024 00:00:00"}
      />
      <News mainTitle={"Latest News"} arrayNews={news} />
      <SubscribeBanner/>
      <Footer/>
    </>
  );
}
