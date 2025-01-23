import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "./../hooks/useScrollToTop";

const LayoutPublic = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <main className="w-full h-auto  pt-28 bg-background">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default LayoutPublic;
