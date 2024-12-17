import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../components/loaders/LoaderPage";

const LayoutPublic = lazy(() => import("../layout/LayoutPublic"));
const LayoutCheckOut = lazy(() => import("../layout/LayoutCheckOut"));
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ShopProduct = lazy(() => import("../pages/ShopProduct"));
const CheckOut = lazy(() => import("../pages/Checkout"));

// @ts-ignore
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoaderPage />}>{children}</Suspense>
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
        path: "/shop/:category",
        element: (
          <SuspenseWrapper>
            <Shop />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/shop/:category/:idProduct",
        element: (
          <SuspenseWrapper>
            <ShopProduct />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: "/CheckOut",
    element: (
      <SuspenseWrapper>
        <LayoutCheckOut />
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
            <CheckOut />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
