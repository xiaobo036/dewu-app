import { type GoodType } from "../../../types/global";
import "@/styles/home/good.scss";

const Good: React.FC<GoodType> = (good) => {
  return (
    <div className="w-[288px] cursor-pointer">
      <img className="img-animation" width={288} height={288} src={good.img} />
      <div className="text-base font-[300] text-[#14151a] max-w-[256px] max-h-[24px] overflow-hidden leading-[24px]">
        {good.name}
      </div>
      <div className="font-bold text-[#14151a] text-[24px] mt-4">
        {good.price && "￥" + good.price}
      </div>
    </div>
  );
};

export default Good;
