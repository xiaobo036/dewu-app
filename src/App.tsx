import { RouterProvider } from "react-router";
import router from "./router/router";
import { Suspense } from "react";
import LazyLoading from "./components/global/lazyloading";
import { ConfigProvider } from "antd";
import customTheme from "./components/antd/custom-antd";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={customTheme}>
      <Suspense fallback={<LazyLoading />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
