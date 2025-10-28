import { Modal } from "antd";
import React, { useImperativeHandle, useState } from "react";
import type { GoodDetailRef, GoodType } from "../../../types/global";
import "@/styles/home/goodDetail.scss";

/**
 * 商品详情组件
 * 使用forwardRef转发ref，允许父组件访问子组件的方法
 */
const GoodDetail = React.forwardRef<GoodDetailRef, GoodType>(
  (props: GoodType, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
      openModal,
    }));

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
            <div className="leftContainer">
              <div className="imgThumbnail">
                <img src={props.img} alt="商品大图" />
              </div>
              <div className="imgList"></div>
            </div>
            <div className="rightContainer">
              <div
                className="goodName"
                style={{ height: "56px", overflow: "hidden" }}
              >
                {props.name}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
);

export default GoodDetail;
