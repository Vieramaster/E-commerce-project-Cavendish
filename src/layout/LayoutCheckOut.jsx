import { Outlet } from "react-router-dom";
import { HeaderLight } from "../components/sections/HeaderLight";

const LayoutCheckOut = () => {
  return (
    <>
      <HeaderLight />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default LayoutCheckOut;
