import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Outlet } from "react-router-dom";

export const LayoutPublic = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
