import { FloatButton } from "antd";
import { Fragment } from "react/jsx-runtime";

const backTop: React.FC = () => {
  return (
    <Fragment>
      <FloatButton.BackTop tooltip={"回到顶部"} duration={500} />
    </Fragment>
  );
};

export default backTop;
