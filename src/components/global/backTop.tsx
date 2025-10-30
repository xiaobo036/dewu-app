import { FloatButton } from "antd";
import { Fragment } from "react/jsx-runtime";

const backTop: React.FC = () => {
  return (
    <Fragment>
      <FloatButton.BackTop  duration={500} />
    </Fragment>
  );
};

export default backTop;
