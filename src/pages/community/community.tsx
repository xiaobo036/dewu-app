import Topbar from "@/pages/home/components/topbar/topbar";
import Footer from "@/components/global/footer";
import Content from "./components/content";
import { Fragment } from "react/jsx-runtime";

const Community = () => {
  return (
    <Fragment>
      <Topbar />
      <Content/>
      <Footer />
    </Fragment>
  );
};

export default Community;
