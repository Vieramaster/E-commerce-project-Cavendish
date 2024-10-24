import { useRouteError } from "react-router-dom";
import { HoverButton } from "../components/buttons/HoverButton";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";

export const ErrorPage = () => {
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
            src="/src/assets/images/404Image.webp"
            alt="404 image"
            className="w-5/6 h-auto  drop-shadow-2xl xl:w-1/2 "
          />
          <h2 className="text-lg md:text-xl lg:text-2xl">
            The link might be corrupted
          </h2>
          <HoverButton toPage="/">Go to main page</HoverButton>
        </div>
      </section>
      <Footer />
    </>
  );
};
