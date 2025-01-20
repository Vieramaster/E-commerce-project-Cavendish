import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
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
