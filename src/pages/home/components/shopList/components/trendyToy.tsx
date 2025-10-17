import { type GoodType } from "../../../types/global";
import Good from "./good";

const trendyToy: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240726/1eed0defcabe44b989217ec6ef6a8431.jpg",
      name: "【品牌专供】New Balance NB 530 单层 春季 经典复古 网布织物人造革减震耐磨透气 低帮跑步鞋 男女同款 白银色 D宽",
      price: 379,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230528/8bbe389f28154e5e896ffe374c796701.jpg",
      name: "【品牌专供】Nike Flight Legacy 皮革 经典复古风格 中帮 复古篮球鞋 男款 白蓝黄 湖人",
      price: 299,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240414/022aab45573541d990bb5d56eb86b461.jpg",
      name: "【品牌专供】New Balance NB 327 经典复古V头鞋 反毛皮织物猪皮透气 低帮 休闲城市通勤跑步鞋 男女同款 元祖灰",
      price: 380,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250530/5075fe0791164fdeb1fdb5c13218576b.jpg",
      name: "【品牌专供】New Balance 1906 系带圆头减震支撑 低帮跑步鞋 男款 灰银",
      price: 751,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/0fabb74d8aad4884ad9454c3355596fd.jpg",
      name: "PUMA彪马 Smash 绒面革 简约休闲 轻便 低帮 板鞋 男女同款",
      price: 231,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/2e60ec62a45d4bb8bc209d4784102881.jpg",
      name: "【品牌专供】Vans Ward 经典款 低帮 板鞋 女款 黑色",
      price: 218,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230707/fea5804613f8498591edefb71d3e43f8.jpg",
      name: "Nike Air Max Fusion 复古经典 轻盈抗震设计 合成革皮革耐磨 低帮跑步鞋 男款 白色",
      price: 261,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220212/ac1a6fea1d1f4e57aa21067dd20a569e.jpg",
      name: "Crocs卡骆驰 Classic clog EVA 贝雅沙滩 洞洞鞋 2cm 男女同款 黑",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250519/e8bbf37e7ab04a88ab8d056cc8fe87c3.jpg",
      name: "【品牌专供】Nike Hyperdunk 2017 Low EP 低帮 篮球鞋 男款 蓝白",
      price: 409,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240415/b8915f3214de49ed839237d071273c7a.jpg",
      name: "adidas originals Nizza Platform 舒适 耐磨 防滑 低帮 板鞋 女款 白黑",
      price: 233,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240401/d5b634bc86304a0995ad5e4438415990.jpg",
      name: "【品牌专供】Warrior回力 回潮 时尚简约百搭 防滑耐磨透气 低帮 板鞋 女款 白色",
      price: 78,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230801/4b7a97e678784bb4ac030f25b620219d.jpg",
      name: "【品牌专供】Nike M2K Tekno 舒适时尚 低帮 老爹鞋 女款 白橙",
      price: 289,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/92ef5ce983474cb79c5f1130405da293.jpg",
      name: "PUMA彪马 Skye 皮革 街头风 低帮 板鞋 女款 白黑",
      price: 234,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230608/c9712906938b425d927ffee520fb74cf.jpg",
      name: "【品牌专供】FILA斐乐 Mars 1 火星 1.0 运动 耐磨 低帮 生活休闲鞋 女款 奶白",
      price: 349,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/3a85cf9c786740d6a43274b8f6284af0.jpg",
      name: "【品牌专供】adidas originals HANDBALL SPEZIAL 耐磨 防滑 舒适 低帮 板鞋 男女同款 白蓝",
      price: 315,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240403/38da2be207434044bbde04ed3aa9c1a6.jpg",
      name: "【品牌专供】LiNing李宁 赤兔7 pro 棉花糖 䨻 高回弹 体测体考 轻量透气 专业竞速减震防滑轻便 低帮 短跑跑步鞋 男款 白紫",
      price: 224,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240325/292b93fa2e404e598bb322c2bf60cc8a.jpg",
      name: "【品牌专供】Converse Run Star Hike 圆头系带 低帮 帆布鞋 男女同款 黑色",
      price: 295,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240719/f5f4e6b1123b4e95bb1dc5c5bfeef216.jpg",
      name: "【品牌专供】CAMEL骆驼 追寻 透网 舒适透气软底减震复古防滑耐磨 低帮 休闲跑步鞋 女款",
      price: 205,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240824/5459deee5a5c4569b8632c48ff987b29.jpg",
      name: "【品牌专供】Kawasaki川崎 飞跃1.0 入门级日常网球综合训练鞋 减震抗冲击防滑 低帮 羽毛球鞋 男女同款 多元配色",
      price: 179,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240409/0e20797bc20f4f86a5958a8575220b2e.jpeg",
      name: "adidas VL COURT 2.0 舒适百搭 低帮 板鞋 男女同款 灰黑银",
      price: 248,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250326/0a21deb7bdef4bc699a18d512186fc81.jpg",
      name: "【品牌专供】Kappa卡帕 OG1 背靠背 清新时尚 气质百搭小白鞋 舒适简约 户外休闲 耐磨增高 低帮 板鞋 男女同款 水绿色",
      price: 255,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230608/a99f2cfe8dec40408805b4581a6068af.jpg",
      name: "【品牌专供】Onitsuka Tiger鬼塚虎 MEXICO 66 运动经典 低帮 生活休闲鞋 男女同款 白黑",
      price: 699,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230707/f2f4345777084bf585ceb7c120be724d.jpg",
      name: "【品牌专供】Nike Initiator 运动舒适复古减震透气支撑 低帮 休闲城市通勤跑步鞋 男款 黑白",
      price: 309,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240412/dde6c7ed7e134f1fae83a845b8656943.jpg",
      name: "【品牌专供】Warrior回力 合成革 高级银灰 经典复古 透气休闲鞋 运动跑步 鞋子 低帮 老爹鞋 男女同款 银色 情侣鞋",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220212/0ee77a427fd94a1990ecf72d1b69c4b2.jpg",
      name: "Crocs卡骆驰 Classic clog 经典 沙滩 洞洞鞋 2cm 男女同款 黑色",
      price: 198,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250516/b0291e5cf54b4470b174dc9c1a117df2.png",
      name: "【品牌专供】Crelinkxlat 珍珠蝴蝶链 法式 仙女温柔 PU 礼盒女朋友气质高级感尖头秀禾主婚纱伴娘 细跟 高跟鞋 女款",
      price: 129,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240618/3d9381cad69c4e038b5df4330dc706b1.jpg",
      name: "adidas originals HANDBALL SPEZIAL 舒适百搭 低帮 板鞋 男女同款 深蓝色",
      price: 457,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240713/5a6c65b1195e481bab777814e51315f0.jpg",
      name: "【品牌专供】Anta安踏 KAI 1 欧文一代 “客场” 氮科技 专业实战 减震耐磨 低帮 篮球鞋 男款 蓝绿粉",
      price: 439,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250326/5747b383211547fa9d7419b040681e98.jpg",
      name: "【品牌专供】Kappa卡帕 繁花 背靠背 潮流前卫 独特魅力 创新设计 清新时尚小白鞋 减震耐磨 低帮 板鞋 女款 白蓝",
      price: 265,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250327/d43033893e104050a2db98e5b2199711.jpg",
      name: "【品牌专供】Kappa卡帕 繁花 背靠背 潮流舒适 气质百搭 新颖设计 自由灵动小白鞋 防滑耐磨 低帮 板鞋 女款 白粉",
      price: 264,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250211/fa027576cb91418f9a4a87e87f48df08.jpg",
      name: 'Nike Zoom Kobe 6 protro "All Star 2.0" 圆头系带 耐磨透气 低帮 篮球鞋 男款 白色',
      price: 2349,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240422/3c09f70f8fe9449f8fc7ae7d15aa822c.jpg",
      name: "adidas neo D-PAD Classic 舒适百搭 低帮 板鞋 男女同款 白蓝棕",
      price: 246,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241119/7234edb7e719472da617b44a4e7c92cb.jpg",
      name: "【品牌专供】TALKING TOM 会说话的汤姆猫 舒适百搭经典dunk运动时尚休闲拼接潮流小众设计情侣鞋 包裹性防滑减震抗冲击性耐磨平衡轻便透气支撑增高 低帮 板鞋 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230526/f62c379dd2914ece9bef4e0c79f623ed.jpg",
      name: "PUMA彪马 Clyde Hardwood Team 时尚舒适 耐磨 低帮 实战篮球鞋 男女同款 白黑",
      price: 229,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230801/4f79c7037a4e4feb8a878445d90d1ddf.jpg",
      name: "【品牌专供】Skechers斯凯奇 D'LITES 1.0 熊猫鞋 蕾丝熊 复古时尚百搭 厚底休闲 增高 老爹鞋 女款 乳白色",
      price: 221,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/5e79b80c4caf4667b53dbe2100dc1f78.jpg",
      name: "【品牌专供】Converse Run Star Legacy 潮流系带 耐磨轻便 低帮 帆布鞋 男女同款 黑白",
      price: 402,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241204/b2a1f3d571e644c7b6f795c414d83abb.jpg",
      name: "【品牌专供】New Balance NB 2002R 舒适美式复古 织物皮革减震透气支撑 低帮休闲跑步鞋 男款 中灰色",
      price: 599,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/52bf5e2d706c4708bbfd98581db0d629.jpg",
      name: "【品牌专供】特步 空军一号 休闲 防滑耐磨 低帮 板鞋 男款 白色",
      price: 97,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/99804d4a71a54055ab2dfbcfa6a34795.jpg",
      name: "【品牌专供】特步 空军一号 舒适 防滑耐磨 低帮 板鞋 女款 白色",
      price: 95,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241008/c34c57514e664dd99e32834deec5972d.jpg",
      name: "【品牌专供】RIPSTAR F40 赛车系列经典复古运动 舒适 情侣百搭时尚潮流 防滑防水减震耐磨轻便透气支撑增高 低帮 板鞋 男女同款 白红",
      price: 323,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {goodList.map((good, index) => (
        <a href="" className="mt-[32px mr-[32px] no-underline" key={index}>
          <Good {...good} />
        </a>
      ))}
    </div>
  );
};

export default trendyToy;
