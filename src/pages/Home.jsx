import { BannerLogos } from "../components/sections/BannerLogos";
import { ShoppingCards } from "../components/sections/ShoppingCards";
import { SellCounter } from "../components/sections/SellCounter";
import { News } from "../components/sections/News";
import { SubscribeBanner } from "../components/sections/SubscribeBanner";
import { useFetch } from "../hooks/useFetch";
import { Introduction } from "../components/sections/Introduction";
import { usePercentage } from "../hooks/useMathOperations";
import { useFetchNews } from "../hooks/useFetchNews";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { MainBannerHome } from "../components/data/MainBannerHome";
import "../types";

const Home = () => {
  useDocumentTitle("Best clothes for men");

  const { newsData, error: newsError } = useFetchNews();
  console.log(newsData);

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
      <Introduction arrayBanner={MainBannerHome} />
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
              image={"images/imagePages/shoes.webp"}
              timeDate={"feb 15, 2025 00:00:00"}
              imageAlt={name}
              page={`/shop/${clothes}/${idProduct}`}
            />
          );
        })()}
      <News error={newsError} arrayNews={newsData} />
      <SubscribeBanner />
    </>
  );
};

export default Home;
