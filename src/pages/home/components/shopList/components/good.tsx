import { Fragment } from "react/jsx-runtime";
import type { GoodType } from "../../../types/global";
import "@/styles/home/good.scss";
import { useNavigate } from "react-router";

const Good: React.FC<GoodType> = (good) => {
  const navigate = useNavigate();

  /**
   * 在react中实现路由跳转有两种方式一种是通过标签 Link、NavLink实现
   * <NavLink to="/detail">详情</NavLink>
   * 另外一种方式是通过Js编程式导航实现
   * navigate('/detail')
   * navigate('/detail', { replace: true }) // replace: true 表示替换当前路由，而不是添加新路由
   * navigate('/detail', { state: { id: 1 } }) // state: { id: 1 } 表示传递参数
   * navigate(-1) // 返回上一页
   * navigate(1) // 前进一页
   */
  const openDetail = (name: GoodType["name"]) => {
    if (name) {
      navigate(`/good-detail`, { state: { name } });
    }
  };

  return (
    <Fragment>
      <div
        className="w-[288px] cursor-pointer"
        onClick={() => openDetail(good.name)}
      >
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
    </Fragment>
  );
};

export default Good;
