import { Tabs, type TabsProps } from "antd";
import { useEffect, useRef } from "react";
import "@/styles/home/shopList.scss";
import Selected from "./components/selected";
import Footwear from "./components/footwear";
import TideClothes from "./components/tideClothes";
import Digital from "./components/digital";
import Beauty from "./components/beauty";
import Watch from "./components/watch";
import Home from "./components/home";
import Bag from "./components/bag";
import Accessories from "./components/accessories";
import TrendyToy from "./components/trendyToy";
import Ladies from "./components/Ladies";

const ShopList: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const tabsList: TabsProps["items"] = [
    {
      key: "1",
      label: "精选",
      children: <Selected />,
    },
    {
      key: "2",
      label: "鞋类",
      children: <Footwear />,
    },
    {
      key: "3",
      label: "潮服",
      children: <TideClothes />,
    },
    {
      key: "4",
      label: "数码",
      children: <Digital />,
    },
    {
      key: "5",
      label: "美妆",
      children: <Beauty />,
    },
    {
      key: "6",
      label: "家居",
      children: <Home />,
    },
    {
      key: "7",
      label: "手表",
      children: <Watch />,
    },
    {
      key: "8",
      label: "包袋",
      children: <Bag />,
    },
    {
      key: "9",
      label: "配饰",
      children: <Accessories />,
    },
    {
      key: "10",
      label: "潮玩",
      children: <TrendyToy />,
    },
    {
      key: "11",
      label: "女装",
      children: <Ladies />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="shopWrapper">
      <div className="innerBox">
        <div className="topBox">
          <Tabs items={tabsList} defaultActiveKey="1" onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default ShopList;
