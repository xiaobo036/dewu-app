import { Fragment } from "react/jsx-runtime";
import Topbar from "./components/topbar/topbar";
import Content from "./components/content/content";
import ShopList from "./components/shopList/shopList";
import BackTop from "../../components/global/backTop";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Topbar />
      <Content />
      <ShopList />
      <BackTop />
    </Fragment>
  );
};

export default Home;
