import { type GoodType } from "../../../types/global";
import Good from "./good";

const Selected: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/9c55a095cf97427cb86523d5e2331a22.jpg",
      name: "科颜氏 金盏花爽肤水 保湿舒缓祛痘修护抗氧化控油清洁收缩毛孔 40ml/75ml/250ml/500ml 送男友礼物开学季军训",
      price: 279,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230825/8d71cf6a9daa475c8dd8a77f3b8d2dc0.jpg",
      name: "TF 细白管口红 琉璃焕彩唇膏 奶油滋润 气色玻璃唇亮泽素颜 3.3g",
      price: 229,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250113/0509edaa4d6d43dc881e6931e77b1fdb.jpg",
      name: "【品牌专供】CPB肌肤之钥 光采洁面膏 舒缓紧致保湿滋润清爽修护清洁 125ml",
      price: 269,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240726/1eed0defcabe44b989217ec6ef6a8431.jpg",
      name: "【品牌专供】New Balance NB 530 单层 春季 经典复古 网布织物人造革减震耐磨透气 低帮跑步鞋 男女同款 白银色 D宽",
      price: 409,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/8e398684fb5042d985deb485e5633f3c.jpg",
      name: "兰蔻 第一代 持妆粉底液 控油清透不卡粉保湿滋润防晒修饰肤色 油皮 30ml",
      price: 202,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250107/45a778966a1d4485b1314063f5ecea03.jpg",
      name: "【品牌专供】CPB肌肤之钥 长管隔离光凝润采妆前乳 自然无瑕 国际滋润版 37ml  女友生日礼物",
      price: 230,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241001/1b56d167d2a34659bae2e6867f498e25.jpg",
      name: "【品牌专供】Nike logo运动高帮袜训练健身中筒袜 通用 男女同款 组合装（3件装） 白色",
      price: 148,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250113/841651b3e6e840ac9384dc32965c3617.jpg",
      name: "【品牌专供】3CE 九宫格 哑光眼影 自然修饰轮廓 九色",
      price: 130,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/530a47727a5f480eb59adb1c26c9d590.jpg",
      name: "【品牌专供】MAC 尤雾弹 子弹头丝缎柔雾唇膏口红 丝绒 气色素颜 顺滑持色不拔干 3g",
      price: 102,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220627/1239079d400e41879b74ec17069754d9.jpg",
      name: "雅诗兰黛 DW持妆粉底液 控油持久保湿防晒修饰肤色 油皮亲妈 长效无瑕哑光妆 30ml/30ml*2  女友生日礼物",
      price: 204,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250106/dd2a55e172de43b9a97005045ae83d9b.jpg",
      name: "【品牌专供】VERSACE 粉耀晶钻淡香水 花果调 淡香水EDT 石榴木兰琥珀 30ml/50ml/90ml/200ml 送女友礼物 教师节礼物",
      price: 312,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250328/179e12df3a66469dbdb132bd4bca7250.jpg",
      name: "adidas ESSENTIALS 针织立领合身防风运动Logo复古条纹夹克 国际版 秋季 男款 黑色",
      price: 206,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2cbf0395f8e64b08b53704523c4fa52b.jpg",
      name: "CHANEL香奈儿 双效持色 镜面 唇釉 易上色不沾杯 4.5ml炫色头+3.5ml锁色头 送女友礼物",
      price: 325,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240818/9d043b5c952249f891dc6b8fde47528b.jpg",
      name: "CHANEL香奈儿 可可小姐 炫光唇膏口红 奶油滋润 气色玻璃唇亮泽 3g 送女友礼物",
      price: 329,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240914/db0b79683836470992657ee55bf6f9f5.jpg",
      name: "Nike Court Borough Low 2 皮革 休闲 灵活适应 防滑减震耐磨 低帮 儿童板鞋 白色",
      price: 269,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230121/4982fd0341cc4cff82cc00387a2c6b8b.jpg",
      name: "【品牌专供】倩碧 天才黄油 卓越润肤乳液 维稳舒缓滋润保湿修护控油",
      price: 100,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250726/0fbcf34c5c22462cb655374de4b22c2e.png",
      name: "【品牌专供】AHC 小蓝管防晒霜 保湿清爽舒缓 纯净温和不油腻 50ml/90ml 开学季军训送女友生日礼物",
      price: 26,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/02aa7d284a854c67906f9a3a660adc4f.jpg",
      name: "【品牌专供】欧莱雅 小金管防晒乳 防紫外线隔离保湿滋润清爽抗氧化紧致 SPF50+ PA++++",
      price: 58,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/0fabb74d8aad4884ad9454c3355596fd.jpg",
      name: "PUMA彪马 Smash 绒面革 简约休闲 轻便 低帮 板鞋 男女同款",
      price: 250,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250909/a0f238780d1e47b493e21bf0c9fa19d2.jpg",
      name: "【品牌专供】3CE 单色腮红膨胀收缩自然修容 修饰肤色修饰轮廓亮泽气色 5g",
      price: 66,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250320/9b7d7274d5d34b1294135e4e6532454e.jpg",
      name: "Nike Sportswear 纯色Logo休闲运动翻领短袖Polo衫 男款 黑色",
      price: 178,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250320/bbad10e3faa246edad7504ad3ca4e0c7.jpg",
      name: "【品牌专供】Nike Sportswear 字母Logo刺绣纯色休闲短袖Polo衫 男款 白色",
      price: 98,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240817/e38208b99d6f46258f26fdcbc42f52af.jpg",
      name: "CHANEL香奈儿 米色时尚 五色眼影 自然 粉调深棕色樱花浅棕色香槟金 4.5g 送女友礼物",
      price: 549,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/e765fbb71e5147f4817a2b6b65808781.jpg",
      name: "lululemon露露乐蒙 Scuba 系列 开衫全拉链修身长袖长款Hoodie连帽外套夹克 女款",
      price: 795,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250621/d200f2e0603b4d9187861121b9348943.png",
      name: "【品牌专供】AHC 男士水乳洗面奶护肤套装 保湿舒缓补水 深层清洁控油三件套 送男友礼物生日",
      price: 74,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220522/73b61df11cdf40f983ac1d3cd348ad60.jpg",
      name: "【品牌专供】MLB Logo刺绣 夏季潮流运动遮阳 棉 棒球帽 男女同款情侣款 多色",
      price: 179,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250805/8c01207f51974af184966d6d1dbac5de.jpg",
      name: "【品牌专供】COACH蔻驰 Laurel 31 通勤大容量可拆卸肩带 涂层帆布拼皮革 流浪包腋下包单肩斜挎手提包 大号 女款 浅卡其色",
      price: 2989,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250825/f35991e8feba423892461e5a8c0d1f5f.jpg",
      name: "【品牌专供】FANCI 范琦 【999银】熔岩之恋对戒 999足银纯银 糖果纸开口戒可调节 恋爱戴范琦礼盒款女朋友 S925银 对戒情侣戒指一对 男女同款情侣款",
      price: 399,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240911/2ac7e92b88304d348d20ca81d6f8e5bb.jpg",
      name: "KAPPA KIDS 字母潮流 百搭经典 轻便 防滑透气 儿童板鞋 儿童款",
      price: 129,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240325/97364530218044d6b51df408e57b1a53.jpg",
      name: "【品牌专供】斑马牌 ZEBRA 中性笔子弹头笔芯 替芯/铅芯",
      price: 17,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220212/ac1a6fea1d1f4e57aa21067dd20a569e.jpg",
      name: "Crocs卡骆驰 Classic clog EVA 贝雅沙滩 洞洞鞋 2cm 男女同款 黑",
      price: 205,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250519/e8bbf37e7ab04a88ab8d056cc8fe87c3.jpg",
      name: "【品牌专供】Nike Hyperdunk 2017 Low EP 低帮 篮球鞋 男款 蓝白",
      price: 429,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240415/b8915f3214de49ed839237d071273c7a.jpg",
      name: "adidas originals Nizza Platform 舒适 耐磨 防滑 低帮 板鞋 女款 白黑",
      price: 230,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250829/b1c923ec63334897a002c712335b58c4.jpg",
      name: "MCM Toni Visetos 经典老花满印菜篮子 人造革 托特Tote斜挎购物袋单肩包手提包 迷你 女款 棕色拼干邑色",
      price: 2379,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250319/5700498dcbec4540aab3c75fc374c3f1.jpg",
      name: "【品牌专供】德佑DEEYEO 一次性洗脸巾5包悬挂美容院卸妆洁面擦脸巾加厚加大珍珠纹壁挂式 擦脸巾",
      price: 13,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230721/92ef5ce983474cb79c5f1130405da293.jpg",
      name: "PUMA彪马 Skye 皮革 街头风 低帮 板鞋 女款 白黑",
      price: 226,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250120/271ae749fc8e41d780ea50357025fd93.jpg",
      name: "MAC 定制无瑕粉底液 2.0 控油持久不脱妆保湿 30ml",
      price: 213,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240819/1cbe7caa1d7944a1b67c08cd4af58821.jpg",
      name: "【品牌专供】Nike LOGO 纯色运动舒适训练礼盒装短袜 男女同款 白色",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240403/990c84de65754cb1a7acf618a6048601.jpg",
      name: "【品牌专供】Mistine 蜜丝婷 蜜丝婷清爽泰版小黄帽防晒霜 防水防汗控油隔离保湿抗氧化修护舒缓 SPF50+PA++++ 40ml/60ml/90ml 女友",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240404/4a44288ac91342949080f2dd5036a0be.jpg",
      name: "泡泡玛特 POP MART THE MONSTERS 春天野在家系列 毛绒  大春野 搪胶玩偶  潮流公仔",
      price: 679,
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

export default Selected;
