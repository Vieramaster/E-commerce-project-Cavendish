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
const ProductCare = lazy(() => import("../pages/ProductCare"));
const OurStory = lazy(() => import("../pages/OurStory"));
const Stores = lazy(() => import("../pages/Stores"));
const OurFabrics = lazy(() => import("../pages/OurFabrics"));

// Componente de suspenso mejorado
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
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
        path: "shop/search/:search",
        element: (
          <SuspenseWrapper>
            <Shop />
          </SuspenseWrapper>
        ),
      },
      {
        path: "shop/:category/:idProduct",
        element: (
          <SuspenseWrapper>
            <ShopProduct />
          </SuspenseWrapper>
        ),
      },
      {
        path: "shop/:category",
        element: (
          <SuspenseWrapper>
            <Shop />
          </SuspenseWrapper>
        ),
      },

      {
        path: "contact",
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "delivery",
        element: (
          <SuspenseWrapper>
            <Delivery />
          </SuspenseWrapper>
        ),
      },
      {
        path: "returns",
        element: (
          <SuspenseWrapper>
            <Returns />
          </SuspenseWrapper>
        ),
      },
      {
        path: "product-care",
        element: (
          <SuspenseWrapper>
            <ProductCare />
          </SuspenseWrapper>
        ),
      },
      {
        path: "our-story",
        element: (
          <SuspenseWrapper>
            <OurStory />
          </SuspenseWrapper>
        ),
      },
      {
        path: "stores",
        element: (
          <SuspenseWrapper>
            <Stores />
          </SuspenseWrapper>
        ),
      },
      {
        path: "our-fabrics",
        element: (
          <SuspenseWrapper>
            <OurFabrics />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: "/checkout",
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
