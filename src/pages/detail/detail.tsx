import { Fragment } from "react/jsx-runtime";
import Footer from "@/components/global/footer";
import Topbar from "@/pages/home/components/topbar/topbar";
import Content from "./components/content";

const GoodDetail: React.FC = () => {
  return (
    <Fragment>
      <Topbar />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default GoodDetail;
