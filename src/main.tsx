import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import "./index.css";
import NotFound from "./not-found/notFound.tsx";
import Portfolio from "./pages/portfolio/Portfolio.tsx";
import Pricing from "./pages/pricing/Pricing.tsx";
import Service from "./pages/service/Service.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
