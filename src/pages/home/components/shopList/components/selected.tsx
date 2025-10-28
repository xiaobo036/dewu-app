import { type GoodType } from "../../../types/global";
import Good from "./good";

const Selected: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/80fe2f142192483595c4fd47124b49b4.jpg",
      name: "【品牌专供】CASIO卡西欧 YOUTH系列-金属小方块 复古经典小方块 石英机芯 不锈钢表带 日韩表 男女同款 黑色表盘",
      price: 145,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250113/0509edaa4d6d43dc881e6931e77b1fdb.jpg",
      name: "【品牌专供】CPB肌肤之钥 光采洁面膏 舒缓紧致保湿滋润清爽修护清洁 125ml",
      price: 268,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240726/1eed0defcabe44b989217ec6ef6a8431.jpg",
      name: "【品牌专供】New Balance NB 530 单层 春季 经典复古 网布织物人造革减震耐磨透气 低帮跑步鞋 男女同款 白银色 D宽",
      price: 379,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240718/3631a53c72a648f6b7cf50852c7c481b.jpg",
      name: "科颜氏第一代 白泥面膜 祛痘去角质去黑头控油清洁收缩毛孔 125ml",
      price: 174,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241001/1b56d167d2a34659bae2e6867f498e25.jpg",
      name: "【品牌专供】Nike logo运动高帮袜训练健身中筒袜 通用 男女同款 组合装 白色",
      price: 145,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/530a47727a5f480eb59adb1c26c9d590.jpg",
      name: "【品牌专供】MAC 尤雾弹 子弹头丝缎柔雾唇膏口红 丝绒 气色素颜 顺滑持色不拔干 3g",
      price: 96,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250328/179e12df3a66469dbdb132bd4bca7250.jpg",
      name: "adidas ESSENTIALS 针织立领合身防风运动Logo复古条纹夹克 国际版 秋季 男款 黑色",
      price: 197,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250331/12dc0c8a52aa4fd386cac36abbf0d79b.png",
      name: "adidas originals RETRO TREFOIL 撞色运动复古运动立领长袖夹克外套 男女同款 亮白",
      price: 309,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2cbf0395f8e64b08b53704523c4fa52b.jpg",
      name: "CHANEL香奈儿 双效持色 镜面 唇釉 易上色不沾杯 4.5ml炫色头+3.5ml锁色头",
      price: 357,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250909/a0f238780d1e47b493e21bf0c9fa19d2.jpg",
      name: "【品牌专供】3CE 单色腮红膨胀收缩自然修容 修饰肤色修饰轮廓亮泽气色 5g",
      price: 64,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250117/5a605e8076f04323831cc2a68d1ed42c.jpg",
      name: "【品牌专供】Whoo后 拱辰享系列 气韵生洁面膏 保湿控油清洁卸妆 180ml/180ml*2/180ml*3/40ml*5",
      price: 92,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/ce7433deb18f443aae5c68df7650d5e0.jpg",
      name: "lululemon露露乐蒙 Scuba 系列 开衫全拉链修身长袖长款Hoodie连帽外套夹克 女款",
      price: 759,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240323/8e7c0d3998564f9e869342c6983e9ac0.jpg",
      name: "【品牌专供】雨宝 16骨全自动 纯色系列自动雨伞 晴雨两用 抗风遮阳伞加大号折叠自动",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220522/73b61df11cdf40f983ac1d3cd348ad60.jpg",
      name: "MLB Logo刺绣 夏季潮流运动遮阳 棉 棒球帽 男女同款情侣款 多色",
      price: 177,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250825/f35991e8feba423892461e5a8c0d1f5f.jpg",
      name: "【品牌专供】FANCI 范琦 【999足银|可分开发货】熔岩之恋对戒 纯银糖果纸开口戒可调节 纪念日生日表白礼盒款 S925银 对戒情侣戒指一对 男女同款情侣款",
      price: 399,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220520/b75a49fde7674ae0b95fff36ac667218.jpg",
      name: "【品牌专供】卡诗 黑钻钥源护发精油 柔顺 50ml/100ml/100ml*2 女友生日礼物",
      price: 379,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250519/e8bbf37e7ab04a88ab8d056cc8fe87c3.jpg",
      name: "【品牌专供】Nike Hyperdunk 2017 Low EP 低帮 篮球鞋 男款 蓝白",
      price: 419,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/577b17b2bab741f8b100e0edf4cafbee.jpg",
      name: "CASIO卡西欧 YOUTH系列-金属小方块 运动防水 复古经典小方块 学生小银块 石英机芯 日韩表 男女同款 银色表盘",
      price: 151,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250829/b1c923ec63334897a002c712335b58c4.jpg",
      name: "MCM 经典老花满印菜篮子托特Tote斜挎购物袋单肩包 人造革 手提包 迷你 女款 棕色拼干邑色",
      price: 2339,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250319/5700498dcbec4540aab3c75fc374c3f1.jpg",
      name: "【品牌专供】德佑DEEYEO 一次性洗脸巾5包悬挂美容院卸妆洁面擦脸巾加厚加大珍珠纹壁挂式 擦脸巾",
      price: 13,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/92ef5ce983474cb79c5f1130405da293.jpg",
      name: "PUMA彪马 Skye 皮革 街头风 低帮 板鞋 女款 白黑",
      price: 233,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240403/38da2be207434044bbde04ed3aa9c1a6.jpg",
      name: "【品牌专供】LiNing李宁 赤兔7 pro 棉花糖 䨻 高回弹 体测体考 轻量透气 专业竞速减震防滑轻便 低帮 短跑跑步鞋 男款 白紫",
      price: 224,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250120/271ae749fc8e41d780ea50357025fd93.jpg",
      name: "MAC 定制无瑕粉底液 2.0 控油持久不脱妆保湿 30ml",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250125/71f03585328f4c3ab568cce67d48db35.png",
      name: "【品牌专供】音贝奇YINPAGE Real 1 Pro ANC主动降噪高音质男女生学生情侣运动电竞游戏无感延迟超长续航高颜值适配于华为苹果安卓通用 入耳式 真无线蓝牙耳机",
      price: 115,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240404/3e22e0bcc5f74903a05afa3e36e74d36.jpg",
      name: "泡泡玛特 POP MART THE MONSTERS 春天野在家系列 搪胶 小春野  毛绒挂件  潮流公仔",
      price: 287,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241120/e06354c3b8e84cebbfa08e78b4bc360f.jpg",
      name: "【品牌专供】FoYes 【增肌粉1.2磅】545g/桶 健身乳清蛋白粉瘦人增肌增重增胖健肌粉男女运动",
      price: 67,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240626/237a7e11e173443db9a3dbdec68d8592.jpg",
      name: "【品牌专供】niurui纽睿 充电宝 10000毫安/7000mAh 10W10.5W12W 自带四线 大容量 四色可选 迷你便携 安卓苹果通用 自带挂绳 带数显 快充移动电源 NR03",
      price: 37,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250621/21606125c25144bfb5a7f75817c6d7a9.jpg",
      name: "【品牌专供】COACH蔻驰 Kay 20 经典老花满印徽标Logo盒子包单肩斜挎包 PVC配皮 手提包 小号 女款 黑色拼棕色老花",
      price: 1297,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220809/7416314ad2244a7d96f8f77cc2e8d007.jpg",
      name: "阿玛尼 玉龙茶香香水高定私藏清新系列 木质调柑橘调 淡香水EDT 柠檬绿茶 50ml/50ml*2/100ml",
      price: 801,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220627/f0b72d59a62145a2b41af751e4d31205.jpg",
      name: "MAC 尤雾弹 液体丝缎柔雾唇唇釉 丝绒 易上色持久素颜显白 5ml",
      price: 123,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250304/01775d7f782c4bd6a1b6f661755ed7f2.jpg",
      name: "【品牌专供】CHINISM ch基础款字母印花logo套头抓绒卫衣 男女同款",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20221007/3d0d5f3afdfd43f389399190fdb71a0b.jpg",
      name: "【品牌专供】CHINISM CH基础款字母印花logo套头纯色连帽卫衣 男女同款 情侣款",
      price: 151,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250409/802418658f914353871db52da22ea63c.jpg",
      name: "【品牌专供】维动 VEIDOORN 更迭 篮球薄款梭织速干吸汗透气训练美式直筒九分休闲裤 男女同款",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241230/f285b72764944152a66a1a6ee8591f5a.png",
      name: "【品牌专供】白象 方便面火鸡拌面5/21包*1/2/3/4/5/6/7/8袋 大辣椒韩式",
      price: 12,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240618/3d9381cad69c4e038b5df4330dc706b1.jpg",
      name: "adidas originals HANDBALL SPEZIAL 舒适百搭 低帮 板鞋 男女同款 深蓝色",
      price: 457,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250108/9a13df93edb2406fa3ce0ed24b3bbf65.jpg",
      name: "【品牌专供】Maison Margiela梅森马吉拉 慵懒周末淡香水 花香调 淡香水EDT 7ml/30ml/100ml 送女友礼物",
      price: 437,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240704/c4a6aa28dcb6476ead58fb6714394222.png",
      name: "【品牌专供】卡尔美KELME 插板设计方便穿戴 减震抗冲击 坚固足球护腿板 PP 男女同款 均码",
      price: 38,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240805/969083c28b1a4b3390c85de498a7e2c9.jpeg",
      name: "【品牌专供】【幸运四叶草】 珍·尚银 中国黄金 时尚经典百搭 在逃公主精致优雅双层叠戴小众轻奢复古设计 告白约会礼盒 好运 玉髓 银925手链 女款",
      price: 259,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250828/ce51c3c525364023bae457c7d9378e57.jpg",
      name: "【品牌专供】伯希和PELLIOT  岩壳 性能系列全防护单层硬壳户外防风防水专业登山服硬核外套耐磨时尚实用 冲锋衣 男女同款",
      price: 589,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250407/bd500a945b9a4d1280a33a9b369a8061.jpg",
      name: "【品牌专供】adidas TAEKWONDO logo标识侧边条纹松紧复古休闲针织运动裤 男女同款 黑色",
      price: 191,
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

export default Selected;
