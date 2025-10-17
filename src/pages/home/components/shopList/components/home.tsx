import { type GoodType } from "../../../types/global";
import Good from "./good";

const Home: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240323/8e7c0d3998564f9e869342c6983e9ac0.jpg",
      name: "【品牌专供】雨宝 16骨全自动 纯色系列自动雨伞 晴雨两用 抗风遮阳伞加大号折叠自动",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250525/df257f6dddda4c06b5d2d08c84bf81b3.jpg",
      name: "【品牌专供】雨宝 12股双骨加粗24骨雨伞晴雨通用加大折叠加厚加固遮阳防晒紫外线全自动太阳伞",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240327/4bd78e77b49c439ba8126d03ca1f766c.jpg",
      name: "【品牌专供】YUOU愉欧 抱抱猫腰靠 靠垫 宿舍床头玩手机看书可爱风腰枕靠枕",
      price: 55,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/995e0f97a0f84db288a2a12bc5ae9d96.jpg",
      name: "【品牌专供】Sanrio三丽鸥 凯蒂猫 塑料水杯 丑鱼公仔太空杯 大容量夏季水杯 女生高颜值便携夏天杯子 500ml",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240329/80e9a579cc06498183da2fb024022221.jpg",
      name: "【品牌专供】柒彩熊 u型枕卡通记忆棉护颈枕 出差旅行火车飞机睡觉休息颈椎枕 抱枕",
      price: 34,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240401/1ee963225ae443318f977c9e2faceae6.png",
      name: "【品牌专供】蓝月亮 洗衣留香 深层洁净 羊绒羊毛 薰衣草洁净  洗衣液 500g*2瓶2斤装家用宿舍用",
      price: 22,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250920/1a35c951ec4d4237a18e21bad21f011b.jpg",
      name: "【品牌专供】浪莎 被子 A类原棉大豆被芯加厚秋冬季保暖被冬季厚棉被宿舍单双人亲肤纯色四季化纤被春秋被褥子夏季夏凉被夏被空调被 柔软舒适透气",
      price: 47,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240427/608b9ba7edbd4ecababc5ade57222ec8.jpg",
      name: "【品牌专供】ZORRO 康斯坦丁 1941复刻版仿古银滚花 黄铜煤油防风打火机 男女生超薄创意个性老式复古打火机",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250711/a0922e8bdd5d42d2880582950d12577e.png",
      name: "【品牌专供】言仓 x线条小狗 联名款  快乐小狗尾巴杯 马克杯情侣陶瓷水杯高颜值小众生日送男女生咖啡杯大容量 400mL",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240905/77feb245846c4977a0160b733abf2afb.jpg",
      name: "【品牌专供】途乐霸 保温杯 无缝双饮 316不锈钢保温杯 咖啡杯 带吸管 时尚简约高颜值 通用 水杯 530ml",
      price: 47,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240701/2b546c120208485c92e0645c4bd027ac.jpg",
      name: "【品牌专供】瑞玖 蜡烛蛋糕马克杯 陶瓷杯子高颜值礼盒实用家用马克杯带盖可爱蛋糕杯伴手礼 460ml 通用开学必备 学生党",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250530/cea11b3ad77540f2be12601c296ab2a1.jpg",
      name: "【品牌专供】莱登太太  强遮光一体式床帘 学生宿舍上下铺防蚊蚊帐保护隐私宿舍蚊帐",
      price: 95,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240418/26d96cf3419748fda8e28ed6e28bc2e1.png",
      name: "【品牌专供】蓝月亮 羊绒羊毛 深层洁净自然香瓶装护理家用宿舍用机洗手洗 洗衣液  500g1斤装",
      price: 13,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240709/f53af6b4043c46789abf8f451a21df16.jpg",
      name: "【品牌专供】海澜之家 HLA 航空枕 U型枕脖 颈椎记忆棉脖枕 头枕靠枕飞机枕 办公室员工午休枕头 学生午休枕头 护颈专用",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240420/944dd910d4a94d71adc29336c9f87372.png",
      name: "【品牌专供】SHIGUDE施古德 休闲风纯色 情侣夏季外穿洞洞鞋足弓软底 凉拖鞋",
      price: 20,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240422/b704fa4ee9134743a51dcc55fec330e9.jpg",
      name: "【品牌专供】植护 清野苍兰香水洗衣液 低泡易漂家用衣物清洗液持久留香深层洁净 4斤*1瓶 4斤*1瓶",
      price: 17,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240423/b752acc4cd8e4db395a81010cdf25402.jpg",
      name: "【品牌专供】立白 大师香氛天然洗衣粉350g*1袋+旅行装玫瑰粉35g*5袋 到手6袋 梦幻格拉斯玫瑰香 护色护衣 持久留香72小时",
      price: 27,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250625/d3bce74480c846968d2bb1a77c5ba9f1.jpeg",
      name: "【品牌专供】ZIPPO 爱情系列 爱人的眼睛是第八大洋 男生无法拒绝的zippo打火机 防风煤油打火机礼盒装#免费刻字#",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/47b7e1b7caf84297acda43b7e0c66000.jpg",
      name: "【品牌专供】植护 初夏樱花4斤瓶装香水洗衣液 深层洁净衣物清洁持久留香清洗皂液",
      price: 17,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/a1fa91f863714e2b84a0d6d1c163a0c7.jpg",
      name: "【品牌专供】植护 初夏樱花香水洗衣液 净化除味 深层洁净衣物清洁持久留香清洗液 4斤*2瓶",
      price: 30,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/6a59032d47514e688278d86f109c9280.jpg",
      name: "【品牌专供】植护 晨雾玫瑰 除菌除螨香水洗衣液 羽绒服适用 持久留香自然花香 2斤*1瓶",
      price: 33,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240425/fa5b4adc342d42ffab3d39236acce3ed.jpg",
      name: "【品牌专供】植护 绮梦花园内衣内裤除菌99%洗衣液 专用清洗液女士除螨洗内衣液 500g*1瓶",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240425/29c7d084d36243f69556c5d03412ab72.jpg",
      name: "【品牌专供】海澜之家 HLA A类抗菌防螨全棉面料枕 舒适安眠枕芯 助睡眠护颈椎 适用居家卧室一对装 学生宿舍一只装 四季通用款",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240426/7e9fb7b940e74024b80b7e63b540951d.png",
      name: "【品牌专供】蓝月亮 多衣物适用温和配方 薰衣草香深层洁净洗衣液 瓶装5.5斤装 洗衣液 2.75kg大规格家用",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250122/53cc232b360b4324a6f162cbfd923707.jpg",
      name: "【品牌专供】ZIPPO 爱情系列 渐变幻彩 秋水含情   男生无法拒绝的zippo打火机 防风煤油打火机礼盒套装",
      price: 219,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240502/853f195817624e74a12929f44eb80aa9.jpg",
      name: "【品牌专供】爱夕 眼罩可爱小熊搞怪睡眠遮光 学生游戏护眼夏季午休午睡防光冰贴冰凝袋热敷缓解眼疲劳",
      price: 19,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240703/71cb8cb948364d3eba288c5fd9d1b93a.jpg",
      name: "【品牌专供】宿帕SUPER 椰子洗鞋神器小白鞋泡沫清洗剂无水干洗AJ球鞋除味杀菌快速擦鞋刷鞋去污清洗套装鞋袜除臭防水喷雾10件套 鞋清洁护理剂",
      price: 78,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240510/de47234262e149fb994848934f0e9f01.jpg",
      name: "【品牌专供】Starbucks星巴克 保温杯 薄荷绿系列经典简约 渐变绿 470ml",
      price: 161,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240528/2aaae28e3a7f43609c8abc5f9fc72686.jpeg",
      name: "【品牌专供】ZIPPO 爱情系列 锻纱镀铬 秋水含睛 实用煤油打火机 银色",
      price: 129,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250218/a9511f506554414d95e4b222a3a48d6c.jpg",
      name: "【品牌专供】立白 到手2瓶共2.16斤 羊绒羊毛 大师香氛洗衣液1kg*1瓶+旅行樱香内衣液80g*1瓶 独居宿舍家用实惠装 持久留香72小时",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240523/8e46f66cfac842bf9be0e084c07a4088.jpg",
      name: "【品牌专供】名创优品MINISO x Chiikawa 吉伊卡哇 小八 乌萨奇 可爱卡通U型枕 礼袋 枕头 通用",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241109/77a1de7d863a48aeae4f24139a4eff18.jpg",
      name: "【品牌专供】海澜之家 HLA A类慢回弹记忆棉枕芯 亲肤针织面料 护颈椎助睡眠专用枕头 适用居家卧室一对装 男女学生宿舍一只装",
      price: 72,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250820/52304ab668aa45f8ad3b09357278a213.jpg",
      name: "【品牌专供】海澜之家 HLA 厚底男款凉拖鞋夏天国潮 踩屎感居家室内防滑耐穿百搭拼色凉拖",
      price: 45,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241014/e4defc1e38b14b8ab819573885c8ec06.jpg",
      name: "【品牌专供】奥观 复古铁塔沙漏计时器水晶球八音盒发光桌面摆件毕业季礼生日男朋友女朋友闺蜜同学男生女生 礼盒装 摆件",
      price: 78,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250328/0699f2aad5b54b729b1e8f1c0e718a03.jpg",
      name: "【品牌专供】YOPENG 小白鞋清洗剂 一擦白去污免洗球鞋帆布鞋小白鞋椰子鞋清洗套装干洗清洁剂 AJ鞋除味杀菌鞋袜除臭 鞋清洁护理剂",
      price: 19,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240804/93e3efce59e44dc2a6d67ca11e8a9624.png",
      name: "【品牌专供】ZIPPO 爱情系列 锻纱镀铬 秋水含睛 煤油 打火机 礼盒装 品牌 下单 免费刻字 具体联系客服",
      price: 144,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240710/eeb4f58a91824bf8ba3a1975b077b4d5.jpg",
      name: "【品牌专供】ZIPPO 保温杯  温馨简约咖啡杯 实用水杯 情侣水杯 水杯男生高颜值 生日水杯 便携式水杯 杯子男生 学生杯子保冰 316不锈钢420ml",
      price: 83,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250208/14dab1eb196f4fa0afc34505925318ee.jpg",
      name: "【品牌专供】Starbucks星巴克 星动系列 女生女友 闺蜜 生日 高颜值 秋季水杯 实用家用  高颜值女神杯学生 四季通用 粉色蝴蝶结款玻璃杯吸管杯 550ml",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240620/238bca69e3a647eb8d5738a1ba80eca2.jpg",
      name: "【品牌专供】YOPENG 鞋袜除臭喷雾剂 除味杀菌去异味喷雾去脚臭球鞋鞋袜鞋柜除臭 球鞋防臭生物酶除异味抑菌除菌 学生宿舍用家用",
      price: 34,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250529/07caa6c1122c4b1299f255422f75d6af.jpg",
      name: "【品牌专供】COSTA 巨无霸2.0幸运杯保温保冷杯 冰霸杯吸管杯316L不锈钢高颜值可爱治愈创意水杯男生女生情侣生日男女朋友 大容量1.25L",
      price: 189,
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

export default Home;
