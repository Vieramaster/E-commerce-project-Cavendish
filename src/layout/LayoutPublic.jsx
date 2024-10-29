import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
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
export default LayoutPublic