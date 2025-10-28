import { type GoodType } from "../../../types/global";
import Good from "./good";

const accessories: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241205/0a56b6d7b8a64e42821d4e90f1aaccac.jpg",
      name: "Carhartt Acrylic Watch Hat A18徽标装饰保暖 聚丙烯酸 绒线帽 男女同款情侣款 黑色",
      price: 151,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250902/46247f2ab4b042b0a92ad01e6261ba23.png",
      name: "【品牌专供】珍·如金 中国黄金 莫比乌斯 爱无止境钟爱久久浪漫爱意交织简约可调节素圈 足银999 对戒 男女同款情侣款",
      price: 209,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241202/132ac2c02e5f4a8ca24ab8e45c14ad5b.jpg",
      name: "【品牌专供】MLB 运动休闲Logo刺绣 棉 鸭舌帽 男女同款情侣款",
      price: 180,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241203/7038851db1b64759b209083bd4cba1e2.jpg",
      name: "【品牌专供】【可烫金刻字】 COACH蔻驰 经典c纹压花商务休闲时尚 皮质 皮带 男款 黑色 宽3.8cm",
      price: 529,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250625/a77688616e7a4f849443d997869a7729.jpg",
      name: "【品牌专供】啄木鸟TUCANO 玫瑰粉显肤白棒球帽大头围显脸小遮脸 时尚字母刺绣 棉 鸭舌帽 男女同款情侣款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240702/e2648bf41edf499e9aa27d9c14b4d830.png",
      name: "carhartt 卡哈特 经典弯檐棒球帽 灰色",
      price: 169,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220522/73b61df11cdf40f983ac1d3cd348ad60.jpg",
      name: "MLB Logo刺绣 夏季潮流运动遮阳 棉 棒球帽 男女同款情侣款 多色",
      price: 177,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241203/c8c8207a70fc43928ce1af3cde38ee01.jpg",
      name: "Carhartt 水洗做旧 街头嘻哈 品牌标识 棉 棒球帽 男款",
      price: 125,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240325/c92b8228c1294e61a0c6e87765508e40.png",
      name: "New Era 刺绣字母 棉 鸭舌帽 男女同款情侣款 蓝色",
      price: 198,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250825/f35991e8feba423892461e5a8c0d1f5f.jpg",
      name: "【品牌专供】FANCI 范琦 【999足银|可分开发货】熔岩之恋对戒 纯银糖果纸开口戒可调节 纪念日生日表白礼盒款 S925银 对戒情侣戒指一对 男女同款情侣款",
      price: 399,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240808/86c3752c9da7456c8f7a956144cddfd4.png",
      name: "纪梵希 轻奢高级感设计镶小碎钻 合金 手镯 女款 玫瑰金",
      price: 439,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250807/ec80d2dfbce24d46b17e5e0e7fe8826d.jpg",
      name: "【品牌专供】金大福 白月光猫眼镯 国潮新中式古风清透温润清冷感精致优雅 旗袍汉服百搭 叠戴素圈女友甜蜜浪漫告白#好运 琉璃 手镯 女款",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241129/6e1a7eef3a5845aa95ed195907934c16.jpg",
      name: "【品牌专供】Swarovski施华洛世奇 Solitaire 璀璨星光 甜蜜饰爱 施华洛世奇元素 耳钉 女款 镀白金色",
      price: 257,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240313/378e9b94528a4996b05e83604f11ae07.jpg",
      name: "【品牌专供】Swarovski施华洛世奇 Stone满钻 仿水晶石 耳环 女款 镀白金色",
      price: 242,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250725/5dc3991ab8494397aabc25fecd3c1312.jpg",
      name: "【品牌专供】老凤祥 【赠玫瑰花束贺卡】天作之合对戒 简约浪漫钟爱久久冰川纹理素圈甜蜜示爱可调节精美礼盒 足银999 戒指 男女同款情侣款",
      price: 243,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240407/1c68297225644ee1bb41d904d34e51d3.jpg",
      name: "【品牌专供】韵系 锆石雪花轻奢小众小巧精致养耳洞 999足银 耳钉 女款",
      price: 15,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240409/0245a893a1994e1cb4e2b9a3018b5681.jpg",
      name: "【品牌专供】ONEKISS 高级感粉光小众设计感高级轻奢简约耳饰气质时尚潮流 铜镀金 耳钉 女款",
      price: 13,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240723/0731b5f1d632457890e615be2b3743f0.jpg",
      name: "Arcteryx始祖鸟 印花图案装饰 氨纶 聚酯纤维 锦纶 绒线帽 男女同款情侣款 黄色/褐色/绿色/灰白色/粉色/藏蓝色/红色/隐秘灰",
      price: 639,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241203/f3175fddc6474ceea050513cec0278be.jpg",
      name: "COACH蔻驰 双头平滑扣 - 腰带 男款 黑灰色 宽3.8cm",
      price: 719,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250509/6292a0d54fc74729a163ffbd740388e8.jpg",
      name: "【品牌专供】素 【S925银针｜爆闪华子】 新潮小众菱形十字架耳环设计高级感时尚嘻哈街头甜酷辣妹满钻痞帅潮流耳饰情侣同款 合金锆石 耳钉 男款",
      price: 54,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250331/d995e57182b3456091e9d3f8946f3700.jpg",
      name: "【品牌专供】海澜之家 HLA 哑光胶片黑色自动扣腰带荔枝纹简约商务休闲时尚腰带 二层牛皮 皮带 男款 宽3.5cm",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240805/969083c28b1a4b3390c85de498a7e2c9.jpeg",
      name: "【品牌专供】【幸运四叶草】 珍·尚银 中国黄金 时尚经典百搭 在逃公主精致优雅双层叠戴小众轻奢复古设计 告白约会礼盒 好运 玉髓 银925手链 女款",
      price: 259,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250702/441c9f42d8014cbe964b04ab2bd3c401.jpg",
      name: "【品牌专供】Swarovski施华洛世奇 Angelic Round 125周年纪念款 镀铑 项链 女款 银色",
      price: 319,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241203/f7c50174029c4b40930335c7f5b0982f.jpg",
      name: "【可烫金刻字】 COACH蔻驰 针扣大C暗扣 牛皮 皮带 男款 黑色 宽3.5cm",
      price: 579,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240428/9d86fa308f344120be7826421f9b2c91.jpg",
      name: "【品牌专供】Warrior回力 无牙内穿男士真皮商务简约时尚腰带自动扣青年休闲百搭潮流高端 牛剖层移膜皮革 皮带 男款 宽：3.3cm",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20231109/2f0fb5501604421693c3518028b66219.png",
      name: "北面THE NORTH FACE 徽标Logo针织 尼龙 绒线帽 3FJX 男女同款 黑色",
      price: 154,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250813/eed7327e2a5f46c9a34ab9dd84ca177e.jpg",
      name: "【品牌专供】【通勤神器】 IOTS 字母R 韩系简约时尚街头显脸小美式户外遮阳 涤纶 鸭舌帽 男女同款情侣款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240504/2011bb636a444f3392efd023585838c6.jpg",
      name: "【品牌专供】CHARLES&KEITH 小ck 蔚蓝秘境系列 早秋人气款可调节设计#好运 黄铜 水晶 手链 女款 Silver银色/Multi综合色",
      price: 169,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250922/294b364c9e7f4099ba0eb55aa41a8c97.png",
      name: "GUCCI古驰 双G双面织花 流苏披肩 羊毛 绒线围巾 男女同款情侣款 浅灰色",
      price: 904,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241218/2f8710fdc1b545ab89a6b6dc2ddb19e8.jpg",
      name: "GUCCI古驰 双G双面织花 流苏披肩 羊毛 绒线围巾 男女同款情侣款 浅卡其色",
      price: 980,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241231/035ec534fb7b4e2bb82cbaf58afae54f.jpg",
      name: "GUCCI古驰 双G双面织花 保暖 绒线围巾 女款 浅咖色",
      price: 958,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250531/90a19a762e6c489098f950d2f92d7e8e.jpg",
      name: "【品牌专供】【999足银|支持异地分开发货|可定制刻字】 匆匆那年 爱意交织对戒 轻奢开口可调节一对 莫比乌斯环 纯银 戒指 男女同款情侣款",
      price: 181,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240517/958e64471ada44fcb30c2ddf25164c55.png",
      name: "【品牌专供】【腰缠爱意】 15 MINS 商务休闲高级感真皮自动扣腰带男士舒适潮流学生 礼盒款 二层牛皮 皮带 男款 3.5cm",
      price: 109,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250528/17f65d9c05e841838adc1ab9e180745a.jpg",
      name: "【品牌专供】老凤祥 【 足银&可刻字】满天星对戒 闪耀轻奢高级感开口可调节简约百搭精美礼盒 S999银 戒指 男女同款情侣款",
      price: 243,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250727/d8c06583d5d947098f267457839d680c.jpg",
      name: "【品牌专供】【足银貔貅宝宝】 老凤祥 招财进宝吞金兽新中式本命年百搭情侣手饰 可爱萌趣转运珠财源滚滚小众精美礼盒 S999银 手链 女款",
      price: 219,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250116/e308d65cc168404eb843f885c760d06b.jpg",
      name: "【品牌专供】New Era 纽亦华 MLB系列 NY小刺绣Logo 940 弯檐 棉 棒球帽 男女同款情侣款 深灰色",
      price: 175,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250410/c92c699f90284e06bfd42da55ac29931.jpg",
      name: "【品牌专供】Yab 华子耳钉爆闪轻奢高级感6mm 炫亮小众精致氛围感日常个性设计闺蜜学生百搭一周首饰 锆石 钛钢 耳钉 男女同款情侣款",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240523/49a00f5da4be48de93add08aaa6cdd6c.jpg",
      name: "【品牌专供】啄木鸟TUCANO 礼盒款 时尚经典百搭条纹懒人免打结拉链领带男商务正装衬衣通勤简约潮流结婚婚礼新郎伴郎 聚酯纤维 领带 男款",
      price: 109,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240524/1cef2d918b99430898210e7ebe0e94a4.jpg",
      name: "【品牌专供】Disney迪士尼 史迪仔呆萌可爱卡通系列挂件萌趣学生书包史迪奇挂件小众时尚挂饰 涤纶 钥匙扣 男女同款情侣款",
      price: 29,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240701/d85b593e10b840ada677690c0ef7d060.jpg",
      name: "【品牌专供】TRUE ME 穗穗平安手饰 新中式ins设计轻奢气质百搭高级感日常通勤麦穗紫藤花在逃公主闺蜜款 合金 手链 女款",
      price: 109,
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

export default accessories;
