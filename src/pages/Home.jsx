import { IntroHome } from "../components/sections/IntroHome";
import { MainCards } from "../components/sections/MainCards";
import { BannerLogos } from "../components/sections/BannerLogos";
import { ShoppingCards } from "../components/sections/ShoppingCards";
import { SellCounter } from "../components/sections/SellCounter";
import { News } from "../components/sections/News";
import { SubscribeBanner } from "../components/sections/SubscribeBanner";
import { useApi } from "../hooks/useApi";
import "../types";

const news = [
  {
    id: "news0001",
    image: "src/assets/images/news1.webp",
    imageAlt: "outfits",
    date: "10/10/2024",
    title: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum ex? Quasi officia nulla atque sunt iusto l Quasi officia",
  },
  {
    id: "news0002",
    image: "src/assets/images/news2.webp",
    imageAlt: "outfits",
    date: "10/10/2024",
    title: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum explicabo quo ex? Quasi officia nulla atque sunt iusto l Quasi officia",
  },
  {
    id: "0003",
    image: "src/assets/images/news3.webp",
    imageAlt: "outfits",
    date: "10/10/2024",
    title: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum explicabo quo ex? Quasi officia nulla atque sunt iusto ",
  },
];

const Home = () => {
  const { data: newArrivals } = useApi("/data/best_sellers.json");

  return (
    <>
      <IntroHome />
      <BannerLogos />
      <MainCards
        mainTitle={"New Collection"}
        card1Title={"Summer Collection"}
        imageCard1={"src/assets/images/imageCard1.webp"}
        card2Title={"Men Bags Collection"}
        card2Subtitle={"40%OFF"}
        imageCard2={"src/assets/images/imageCard2.webp"}
      />
      <ShoppingCards shopArray={newArrivals} title={"Best Sellers"} />

      <SellCounter
        afterPrice={"$180"}
        beforePrice={"$50"}
        discount={"-70% OFF"}
        image={"src/assets/images/shoes.webp"}
        timeDate={"Oct 14, 2024 00:00:00"}
        imageAlt={"shoes discount"}
      />
      <News mainTitle={"Latest News"} arrayNews={news} />
      <SubscribeBanner />
    </>
  );
};

export default Home;
