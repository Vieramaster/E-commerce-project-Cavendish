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
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        children: [
          { path: ":category/:idProduct", element: <ShopProduct /> },
          { path: ":category", element: <Shop /> },
        ],
      },

      { path: "search/:search", element: <Shop /> },
      { path: "contact", element: <Contact /> },
      { path: "delivery", element: <Delivery /> },
      { path: "returns", element: <Returns /> },
      { path: "product-care", element: <ProductCare /> },
      { path: "our-story", element: <OurStory /> },
      { path: "stores", element: <Stores /> },
      { path: "our-fabrics", element: <OurFabrics /> },
    ],
  },
  {
    path: "/checkout",
    element: <LayoutCheckOut />,
    errorElement: <ErrorPage />,
  },
]);
