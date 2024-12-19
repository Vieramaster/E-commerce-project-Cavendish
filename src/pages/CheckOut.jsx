import { PageLogo } from "../components/links/PageLogo";
import { SummaryShopButton } from "../components/buttons/SummaryShopButton";

const CheckOut = () => {
  return (
    <section className="bg-background w-screen h-screen">
      <header className="w-full h-20 bg-violet-400 grid place-content-center">
        <PageLogo color="main" />
      </header>
      <SummaryShopButton changeArrow={false}/>
      <div className="w-5/6 min-h-screen h-auto bg-red-500 mx-auto"></div>
    </section>
  );
};

export default CheckOut;
