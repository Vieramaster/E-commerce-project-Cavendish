import { useRouteError } from "react-router-dom";
import { DefaultButtonLink } from "../components/links/DefaultButtonLink";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      <section className="w-full h-screen bg-lightgrey">
        <div className="  w-5/6 h-full pt-24 lg:pt-28 gap-10 mx-auto text-lightCarbon flex flex-col justify-center items-center 2xl:gap-12">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl ">
            Opps!, This page Not Found!
          </h1>

          <img
            src="/images/imagePages/404Image.webp"
            alt="404 image"
            className="w-5/6 h-auto  drop-shadow-2xl xl:w-1/2 "
          />
          <h2 className="text-lg md:text-xl lg:text-2xl">
            The link might be corrupted
          </h2>
         <DefaultButtonLink color="primary" toPage="/">Go to main page</DefaultButtonLink>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ErrorPage;
