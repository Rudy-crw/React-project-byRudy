import { createHashRouter } from "react-router";
import HomPage from "./pages/HomPage";
import StoreDetail from "./pages/StoreDetail";
import FrontendLayout from "./layout/FrontendLayout";

export const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <HomPage />,
      },
      {
        path: "storedetail/",
        element: <StoreDetail />,
      },
    ],
  },
]);
