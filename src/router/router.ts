import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

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
  // 关键：模糊匹配所有未定义的路径，并通过 element 重定向
  {
    path: "*", // "*" 表示匹配所有未被前面路由定义的路径（模糊匹配）
    element: <Navigate to="/" replace /> // 重定向到首页，replace 避免历史记录残留
  }
]);

export default router;