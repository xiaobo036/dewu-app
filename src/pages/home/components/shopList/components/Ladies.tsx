import { type GoodType } from "../../../types/good";
import Good from "./good";

const Ladies: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250331/546aaec4186146ceb8f9a64ef79914ee.jpg",
      name: "lululemon露露乐蒙 Define 休闲修身透气吸汗短款 瑜伽外套 女款",
      price: 679,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/49066d864e28478c8d07c1ec6dfb2d54.jpg",
      name: "adidas originals classic three-stripe sportswear 品牌logo撞色条纹长袖复古运动立领夹克外套 女款 黑色",
      price: 309,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/ce7433deb18f443aae5c68df7650d5e0.jpg",
      name: "lululemon露露乐蒙 Scuba 系列 开衫全拉链修身长袖长款Hoodie连帽外套夹克 女款",
      price: 779,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250422/fb53c854d4eb4ffe89be67d5078f1c34.jpg",
      name: "lululemon露露乐蒙 芯吸抽绳弹力吸汗透湿速干运动高腰 紧身裤 女款",
      price: 339,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250702/f921ff630aa641638ff0c9832b637462.jpg",
      name: "lululemon露露乐蒙 Define Nulu™面料 纯色休闲舒适修身弹力全拉链 运动 夹克外套 女款",
      price: 789,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250703/37efc4c7a5ad4d0db19ed8ad1cde18cf.jpg",
      name: "lululemon露露乐蒙 Scuba 系列 开衫全拉链纯色休闲柔软保暖长袖连帽外套夹克 女款",
      price: 904,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250729/ea2fa4de16e2419a90d26d66f4e4c879.jpg",
      name: "【品牌专供】玫丝朵 美式复古水洗做旧设计时尚百搭修身显瘦弹力高腰喇叭牛仔裤 女款",
      price: 109,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250808/317d1e4e4f7c4f9f864a2fab3513c18a.jpg",
      name: "【品牌专供】ICH MODE 美式学院风街头复古运动条纹织带撞色宽松休闲百搭连帽套头帽衫卫衣 男女同款",
      price: 154,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250716/435e647ebbeb413692a7defceda1a6dc.jpg",
      name: "【品牌专供】竺妃 美式高街休闲百搭微喇叭裤高腰修身显瘦直筒拖地马蹄长裤子牛仔裤 女款",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250421/4678e26edf884fb8a6090cf56c6bff6c.jpg",
      name: "【品牌专供】DESSUU 美式复古条纹运动休闲双拉链连帽开衫卫衣套装 女款",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250414/fefc04de13b84b1c9d7a6ff04fd13277.jpg",
      name: "Burberry博柏利 博柏利 高街风无袖宽松格纹双面穿披风夹克 女款 早春外搭 卡其色",
      price: 2859,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/4e0c050bc7b94dea95dbd827698b8938.jpg",
      name: 'lululemon露露乐蒙 Nulu™面料 舒适轻盈亲肤柔软紧身瑜伽 运动长25" 女款',
      price: 399,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240522/b28623b59d044b3eafe5d89c8b3b873a.jpg",
      name: "【品牌专供】STK SMALL TOWN KID 美式复古内搭立体刺绣印花无袖背心吊带 女款",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/1db2a2f329b54480bd6a64f58b3b87c0.jpg",
      name: "【品牌专供】波司登 时尚运动系列 90绒纯色Logo袖标运动宽松厚款可脱卸连帽保暖防中长款羽绒服 女款",
      price: 839,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/fd440b35c7654b5f8758c546b1920b7d.jpg",
      name: "【品牌专供】波司登 轻暖系列 90绒三防面料排骨防水防油污衣内胆轻薄保暖内里绒面立领轻便轻量可收纳外套短款绗缝羽绒服 女款",
      price: 309,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250419/6509e64a40aa45a6b252d92c821f6c7c.jpg",
      name: "【品牌专供】伯希和PELLIOT 原石系列 三合一户外防风防暴雨全天候多功能徒步登山服可拆卸抓绒内胆外套 冲锋衣 女款",
      price: 509,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/d029131bf3ed41d3bd3d84270ac217cb.jpg",
      name: "【品牌专供】鸭鸭 FW25 90+系列 纯色立领针织拼接韩版外套防寒保暖百搭短款拉链休闲羽绒服 女款",
      price: 339,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/f21a84cc582d42adaedd9c6d993972ec.jpg",
      name: "alo yoga Suit Up TROUSER 宽松柔软弹力高腰常规版直筒西装裤 女款",
      price: 749,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250420/625fdd3b9d6b41efbcb0e26802607345.jpg",
      name: "【品牌专供】adidas originals Parachute 复古运动三条纹梭织降落伞舒适柔软复古运动休闲裤 女款 黑色",
      price: 348,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250808/a7070b2e2d8c4445b8f2601544a283c6.jpg",
      name: "【品牌专供】OWOX 美式复古分割口袋拉链刺绣开衫卫衣宽松休闲百搭经典运动上衣条纹双杠立领夹克外套 男女同款",
      price: 219,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/7068e64b42954219b4aa4bd06cc1c0ed.jpg",
      name: "lululemon露露乐蒙 Scuba 系列 Hoodie 纯色轻盈保暖透湿连帽拉链长袖截短夹克外套 女款",
      price: 729,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250420/de6b07c880f8443482941c453e130102.jpeg",
      name: "adidas Adicolor 3-STRIPES 条纹宽松柔软舒适复古运动阔腿休闲裤 女款 黑色",
      price: 279,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/5223c4c121514eed88a90ea756d1271f.jpg",
      name: "【品牌专供】adidas originals ADICOLOR 拉链时尚条纹休闲复古运动立领夹克外套 女款 黑色",
      price: 349,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250418/50558cf1bc0d4a2ebfad07af04d1aaa8.jpg",
      name: "【品牌专供】FORUYES 格纹碎花宽松套头卫衣 女款",
      price: 178,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250412/6abd9b802b8b4dc4a3a6c5eeb6da4cf5.png",
      name: "【品牌专供】F426 国潮嘻哈不规则异形扣连帽开衫简约居家户外长袖毛衣 女款",
      price: 243,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20251004/83ff041d1dfa4716b0301c4de4423054.jpg",
      name: "【品牌专供】OWOX 美式高街花卉花体背后字母刺绣logo宽松休闲上衣400G套头连帽卫衣 男女同款",
      price: 169,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250927/b5e0f0c7dbad46eda589313490564d87.png",
      name: "【品牌专供】F426 连帽毛领费尔岛休闲时尚复古经典开衫宽松针织衫 女款",
      price: 254,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/01d0e7f1979245e38e92a893b7fbe513.jpg",
      name: "【品牌专供】鸭鸭 90鸭绒 Space 高蓬松款轻盈保暖长款羽绒服 男女同款",
      price: 359,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250702/3873bc7c7b7544de83a6e38d339b3d55.jpg",
      name: "【品牌专供】雅羊人 美式黑色喇叭运动裤高腰马蹄裤小个子卫裤秋冬季休闲裤 女款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250912/f5ec85835cfa4ae3bd926bbf2767eb4f.jpg",
      name: "【品牌专供】OWOX 美式复古纯色开衫卫衣宽松休闲百搭经典运动条纹三条杠立领潮流学院风百搭夹克外套 男女同款",
      price: 210,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250808/645f3a12fc32497e8f902717c45c80a0.jpg",
      name: "【品牌专供】Warrior回力 基础美式复古棒球领刺绣logo印花纯色长袖休闲宽松百搭潮流防风防水秋季夹克外套 男女同款",
      price: 139,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250924/6921b056063144b7ab6fe2c6f1ead33f.jpg",
      name: "【品牌专供】LEMANISM 400g美式复古纯色卡通毛巾刺绣腊肠小狗套头上衣宽松百搭休闲连帽卫衣 男女同款",
      price: 138,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250703/b1bb06a6268f491e9e496e38bcaae1ab.jpg",
      name: "【品牌专供】都市丽人 美式正肩露锁骨U领打底上衣圆领修身纯色简约短袖 正肩袖T恤 女款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250417/0bf919463daf41dcae888a18114c7904.jpg",
      name: "adidas 立领条纹品牌Logo印花拉链翻领合身长袖夹克外套 女款 黑色",
      price: 337,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250420/229a6634097b4629baa4ed9b9ab1ee95.png",
      name: "【品牌专供】Skechers斯凯奇 魔方系列三合一三防可拆卸连帽拉链科技外壳内搭摇粒绒 户外运动攀登 防水防风防紫外线透气防泼水耐磨保暖冲锋衣 男女同款 碳黑",
      price: 369,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240718/4d18235e1ed949c8b9412818c5db0542.jpg",
      name: "lululemon露露乐蒙 Define Nulu™面料 纯色休闲百搭轻盈舒适弹力运动立领长袖 夹克外套 女款",
      price: 889,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250413/f77238d6866a4001b03bceba1bf5e23e.jpg",
      name: "adidas originals Classics 3-Stripes 条纹徽标印花V-Neck Slim V领修身美式复古长袖卫衣 女款 黑色",
      price: 337,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250811/9376cac23265427e9ab79dd57d963101.jpg",
      name: "【品牌专供】Champion FW24 script shop 草写刺绣Logo拉链纯色基础款休闲百搭连帽加绒卫衣 欧版 女款",
      price: 0,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250703/0df309d586534138a1cab79d384abad4.jpg",
      name: "Arcteryx始祖鸟 BETA SL logo刺绣户外运动防水防风透气户外休闲运动拉链连帽 防水防风透气夹克 女款",
      price: 3289,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250418/ba3e99a71e814b9fac72eb2a95fff9c5.jpg",
      name: "Arcteryx始祖鸟 KYANITE 吸湿排汗保暖 时尚舒适柔软立领抓绒夹克 女款",
      price: 1509,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {goodList.map((good, index) => (
        <div className="mt-[32px mr-[32px] no-underline" key={index}>
          <Good {...good} />
        </div>
      ))}
    </div>
  );
};

export default Ladies;
