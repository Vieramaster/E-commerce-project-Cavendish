import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LayoutPublic = lazy(() => import("../layout/LayoutPublic"));
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Product = lazy(() => import("../pages/Product"));

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
      
      },
      {
        path: "/:category/:idProduct",
        element: (
          <SuspenseWrapper>
            <Product />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
