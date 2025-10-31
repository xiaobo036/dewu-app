import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Suspense } from "react";
import LazyLoading from "@/components/global/lazyloading";
import { ConfigProvider } from "antd";
import customTheme from "@/components/custom-antd/custom-antd";
import BackTop from "@/components/global/backTop";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={customTheme}>
      <Suspense fallback={<LazyLoading />}>
        <RouterProvider router={router}></RouterProvider>
        <BackTop />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
