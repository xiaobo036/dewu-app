import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LazyLoading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Flex align="center" gap="middle">
        <Spin
          size="large"
          indicator={
            <LoadingOutlined style={{ fontSize: 70, color: "#000" }} spin />
          }
        />
      </Flex>
    </div>
  );
};

export default LazyLoading;
