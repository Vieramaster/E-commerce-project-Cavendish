import Header from "../components/Header";
import IntroHome from "../components/sections/IntroHome";
import NewCollection from "../components/sections/NewCollection";
import BannerLogos from "../components/sections/BannerLogos";
import BestSellers from "../components/sections/BestSellers";

export default function Home() {
  return (
    <>
      <Header />
      <IntroHome />
      <BannerLogos />
      <NewCollection />
      <BestSellers />
    </>
  );
}
/*







      <section className="w-full h-auto py-16 bg-white flex items-center justify-center">
        <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
          <h2 className=" font-semibold text-3xl text-center lg:text-start lg:text-5xl">
            Best Sellers
          </h2>
          <BestSellers />
        </div>
      </section>
      <section className="w-full h-auto bg-red-400  px-10 py-10 items-center">
        <div className="w-full h-auto flex flex-col items-center gap-10  bg-green-300">
          <div className="w-2/3 flex flex-col gap-5 bg-violet-400">
            <h3 className="text-2xl font-semibold text-carbon">-70% OFF</h3>
            <img src="src/assets/images/home/shoes.webp" alt="" />
            <div className="flex gap-4 ">
              <div className="flex gap-5 items-center px-4  border border-spacing-1 rounded-lg border-carbon">
                <p className="text-xl font-semibold">$180</p>
                <p className="text-xl font-semibold">$50</p>
              </div>
              <ShoppingButton size={"w-6 h-6"} />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-auto h-auto bg-green-800">
            <h3 className="text-2xl text-white text-center ">Sale ends soon</h3>
            <div className="flex gap-5 h-32 w-auto ">
              <SaleCounter time={3} text={"days"} />
              <SaleCounter time={23} text={"Hours"} />
              <SaleCounter time={16} text={"Minutes"} />
            </div>
          </div>
        </div>
      </section>


*/
