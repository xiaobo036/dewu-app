import { Fragment } from "react/jsx-runtime";
import Topbar from "./components/topbar/topbar";
import Content from "./components/content/content";
import ShopList from "./components/shopList/shopList";
import Footer from "@/components/global/footer";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Topbar />
      <Content />
      <ShopList />
      <Footer />
    </Fragment>
  );
};

export default Home;
