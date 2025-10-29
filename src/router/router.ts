import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("../pages/home/home")),
  },
  {
    path: "/good-detail",
    Component: lazy(() => import("../pages/detail/detail"))
  },
  {
    path: "/community",
    Component: lazy(() => import("../pages/community/community")),
  }
]);

export default router;
