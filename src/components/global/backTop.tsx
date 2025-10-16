import { FloatButton } from "antd";
import { Fragment } from "react/jsx-runtime";

const backTop: React.FC = () => {
  return (
    <Fragment>
      <FloatButton.BackTop visibilityHeight={400}  />
    </Fragment>
  );
};

export default backTop;
