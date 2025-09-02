import { Fragment } from "react/jsx-runtime";
import Topbar from "./components/topbar";
import Content from "./components/content";
import ShopList from "./components/shopList";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Topbar />
      <Content />
      <ShopList />
    </Fragment>
  );
};

export default Home;
