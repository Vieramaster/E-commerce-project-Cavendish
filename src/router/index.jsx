import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderShop } from "../pages/Shop";

const LayoutPublic = lazy(() => import("../layout/LayoutPublic"));
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div>Cargando...</div>}>{children}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <LayoutPublic />
      </SuspenseWrapper>
    ),
    errorElement: (
      <SuspenseWrapper>
        <ErrorPage />
      </SuspenseWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/:category",
        element: (
          <SuspenseWrapper>
            <Shop />
          </SuspenseWrapper>
        ),
        loader: LoaderShop,
        id: "shop-loader",
      },
    ],
  },
]);
