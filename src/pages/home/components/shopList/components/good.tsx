import { Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import type { GoodType, GoodDetailRef } from "../../../types/global";

import GoodDetail from "./goodDetail";
import "@/styles/home/good.scss";

const Good: React.FC<GoodType> = (good) => {
  const modalRef = useRef<GoodDetailRef | null>(null);

  const goodClicked = () => {
    console.log("openModal");

    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <Fragment>
      <div className="w-[288px] cursor-pointer" onClick={goodClicked}>
        <img
          className="img-animation"
          width={288}
          height={288}
          src={good.img}
        />
        <div className="text-base font-[300] text-[#14151a] max-w-[256px] max-h-[24px] overflow-hidden leading-[24px]">
          {good.name}
        </div>
        <div className="font-bold text-[#14151a] text-[24px] mt-4">
          {good.price && "￥" + good.price}
        </div>
      </div>
      <GoodDetail ref={modalRef} {...good} />
    </Fragment>
  );
};

export default Good;
