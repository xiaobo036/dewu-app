import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("@/pages/home/home")),
  },
  {
    path: "/good-detail",
    Component: lazy(() => import("@/pages/detail/detail"))
  },
  {
    path: "/community",
    Component: lazy(() => import("@/pages/community/community")),
  },
  {
    path: "*", // 路由模糊匹配
    loader: () => redirect("/"), // 重定向到首页
  }
]);

export default router;