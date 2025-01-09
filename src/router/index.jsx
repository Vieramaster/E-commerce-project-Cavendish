import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../components/loaders/LoaderPage";

const LayoutPublic = lazy(() => import("../layout/LayoutPublic"));
const LayoutCheckOut = lazy(() => import("../layout/LayoutCheckOut"));
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ShopProduct = lazy(() => import("../pages/ShopProduct"));
const Contact = lazy(() => import("../pages/Contact"));
const Delivery = lazy(() => import("../pages/Delivery"));
const Returns = lazy(() => import("../pages/Returns"));
const ProductCare = lazy(()=> import ("../pages/ProductCare"))
const AboutUs = lazy(()=> import ("../pages/AboutUs"))
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
      {
        path: "/contact",
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/delivery",
        element: (
          <SuspenseWrapper>
            <Delivery />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/returns",
        element: (
          <SuspenseWrapper>
            <Returns />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/productCare",
        element: (
          <SuspenseWrapper>
            <ProductCare />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/About_us",
        element: (
          <SuspenseWrapper>
            <AboutUs />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: "/checkOut",
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
  },
]);
