import CheckOut from "../pages/CheckOut";
import { useScrollToTop } from "../hooks/useScrollToTop";

const LayoutCheckOut = () => {
  useScrollToTop();
  return (
    <main>
      <CheckOut />
    </main>
  );
};
export default LayoutCheckOut;
