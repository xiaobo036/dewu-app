import { Modal } from "antd";
import React, { useImperativeHandle, useState, useRef } from "react";
import type { GoodDetailRef, GoodType } from "../../../types/global";
import "@/styles/home/goodDetail.scss";

interface smallImgType {
  id: number;
  rotate: string;
}

/**
 * 商品详情组件
 * 使用forwardRef转发ref，允许父组件访问子组件的方法
 */
const GoodDetail = React.forwardRef<GoodDetailRef, GoodType>(
  (props: GoodType, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const bigImgRef = useRef<HTMLImageElement>(null);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
      openModal,
    }));

    const imgList: smallImgType[] = [
      {
        id: 1,
        rotate: "0deg",
      },
      {
        id: 2,
        rotate: "45deg",
      },
      {
        id: 3,
        rotate: "90deg",
      },
      {
        id: 4,
        rotate: "135deg",
      },
      {
        id: 5,
        rotate: "180deg",
      },
      {
        id: 1,
        rotate: "0deg",
      },
      {
        id: 2,
        rotate: "45deg",
      },
      {
        id: 3,
        rotate: "90deg",
      },
      {
        id: 4,
        rotate: "135deg",
      },
      {
        id: 5,
        rotate: "180deg",
      },
    ];

    const getImageList = imgList.map((row, index) => {
      return (
        <div
          className="smallImg"
          key={index}
          onClick={() => openBig(row.rotate)}
        >
          <img
            src={props.img}
            alt="small-img"
            style={{
              width: 150,
              height: 150,
              rotate: row.rotate,
            }}
          />
        </div>
      );
    });

    const openBig = (rotate: smallImgType["rotate"]) => {
      if (bigImgRef.current) {
        bigImgRef.current.style.rotate = rotate;
      }
    };

    return (
      <Modal
        title={"商品详情"}
        open={isOpen}
        onCancel={closeModal}
        width={"80%"}
        style={{ top: 40 }}
      >
        <div className="w-full min-h-[600px] overflow-y-auto">
          <div className="goodDetail">
            <div className="leftContainer">{getImageList}</div>
            <div className="middleContainer">
              <div className="bigImg">
                <img src={props.img} alt="big-img" ref={bigImgRef} />
              </div>
            </div>
            <div className="rightContainer">
              <div className="goodName">{props.name}</div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
);

export default GoodDetail;
