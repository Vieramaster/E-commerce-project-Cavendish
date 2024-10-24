import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic.jsx";

//PAGES
import { ErrorPage } from "../pages/ErrorPage.jsx";
import { Home } from "../pages/Home.jsx";
import { Shop } from "../pages/Shop.jsx";
import { LoaderShop } from "../pages/Shop.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Shop />,
        loader: LoaderShop,
        id: "shop-loader"
      },
    ],
  },
]);
