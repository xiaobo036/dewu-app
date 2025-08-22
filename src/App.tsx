import { RouterProvider } from "react-router";
import router from "./router/router";
import { Suspense } from "react";
import LazyLoading from "./components/lazyloading";

const App: React.FC = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
