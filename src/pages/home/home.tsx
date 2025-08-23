import { Fragment } from "react/jsx-runtime";
import Topbar from "./components/topbar";
import Content from "./components/content";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Topbar />
      <Content />
    </Fragment>
  );
};

export default Home;
