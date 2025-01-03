import { BannerLogos } from "../components/sections/BannerLogos";
import { ShoppingCards } from "../components/sections/ShoppingCards";
import { SellCounter } from "../components/sections/SellCounter";
import { News } from "../components/sections/News";
import { SubscribeBanner } from "../components/sections/SubscribeBanner";
import { useFetch } from "../hooks/useFetch";
import { Introduction } from "../components/sections/Introduction";
import { usePercentage } from "../hooks/useMathOperations";
import "../types";

const news = [
  {
    id: "news0001",
    image: "images/imagePages/news1.webp",
    imageAlt: "outfits",
    date: "10/10/2024",
    title: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum ex? Quasi officia nulla atque sunt iusto l Quasi officia",
  },
  {
    id: "news0002",
    image: "images/imagePages/news2.webp",
    imageAlt: "outfits",
    date: "10/10/2024",
    title: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum explicabo quo ex? Quasi officia nulla atque sunt iusto l Quasi officia",
  },
  {
    id: "0003",
    image: "images/imagePages/news3.webp",
    imageAlt: "outfits",
    date: "10/10/2024",
    title: "Lorem ipsum dolor sit",
    introduction:
      "Impedit laborum explicabo quo ex? Quasi officia nulla atque sunt iusto ",
  },
];

const Home = () => {
  const { data: newArrivals } = useFetch(
    "/data/best_sellers.json",
    undefined,
    null
  );

  const { data: discountProduct } = useFetch(
    "/data/clothes_for_e-commerse.json",
    undefined,
    "alfira"
  );

  return (
    <>
      <Introduction />
      <BannerLogos />
      <ShoppingCards shopArray={newArrivals} title={"Best Sellers"} />
      {discountProduct[0] &&
        (() => {
          const { name, price, realPrice, idProduct, clothes } =
            discountProduct[0];
          return (
            <SellCounter
              discount={usePercentage(price, realPrice)}
              afterPrice={realPrice}
              beforePrice={price}
              image={"/public/images/imagePages/shoes.webp"}
              timeDate={"feb 15, 2025 00:00:00"}
              imageAlt={name}
              page={`/shop/${clothes}/${idProduct}`}
            />
          );
        })()}
      <News mainTitle={"Latest News"} arrayNews={news} />
      <SubscribeBanner />
    </>
  );
};

export default Home;
