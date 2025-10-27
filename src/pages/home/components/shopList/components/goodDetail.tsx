import { Modal } from "antd";
import React, { useImperativeHandle, useState } from "react";
import type { GoodDetailRef, GoodType } from "../../../types/global";

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
        height={"600px"}
      >
        <div className="flex justify-between gap-[120px]">
          <div className="">
            <img
              width={"635px"}
              height={"635px"}
              src={props.img}
              alt="高清大图"
            />
          </div>
        </div>
      </Modal>
    );
  }
);

export default GoodDetail;
