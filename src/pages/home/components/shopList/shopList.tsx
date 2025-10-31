import { Tabs, type TabsProps } from "antd";
import { useEffect, useState } from "react";

import type { GoodType } from "../../types/good";
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
import Good from "./components/good";
import useFetch from "@/hooks/useFetch";

const ShopList: React.FC = () => {
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

  const [goodList, setGoodList] = useState<GoodType[]>([]);

  const [activeLabel, setActiveLabel] = useState<React.ReactNode>("精选");

  const onChange = (key: string) => {
    if (key) {
      const itemLabel = tabsList.find((Item) => Item.key === key)?.label || "";
      setActiveLabel(itemLabel);
    }
  };

  const { data } = useFetch({
    url: `/mock/home/shopList.json?activeLabel=${activeLabel}`,
    method: "GET",
  });

  useEffect(() => {
    if (data) {
      const currentList = data.data.find(
        (item: any) => item.title === activeLabel
      )?.list;
      setGoodList(currentList);
    }
  }, [data]);

  useEffect(() => {
    onChange("1");

    return () => {
      setGoodList([]);
      setActiveLabel("精选");
    };
  }, []);

  return (
    <div className="shopWrapper">
      <div className="innerBox">
        <div className="topBox">
          <Tabs items={tabsList} defaultActiveKey="1" onChange={onChange} />
          <div className="grid grid-cols-4 gap-4">
            {goodList.map((good, index) => (
              <div className="mt-[32px mr-[32px] no-underline" key={index}>
                <Good {...good} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
