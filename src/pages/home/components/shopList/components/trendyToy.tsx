import { type GoodType } from "../../../types/global";
import Good from "./good";

const trendyToy: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240621/66d1a784a6304cd1b13b3bfc055a534f.jpg",
      name: "【品牌专供】雄俊 粉红乖乖龙小粉龙毛茸茸软糯布娃娃生日快乐小龙宝龙年吉祥物粉嘟嘟桃花龙妹妹 旺财蛇年萌趣陪伴 玩偶 毛绒公仔 30/33/46/53cm高",
      price: 42,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250723/9b731c554b20460496a88a469289424b.jpg",
      name: "【品牌专供】万童乐 晚安睡衣小猪熊熊小象陪睡布娃娃泰迪熊 小熊战士女生生日可爱 玩偶 毛绒公仔 40cm高",
      price: 29,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250918/9ea55874467e41bab814d8f7ffadd54d.jpg",
      name: "【品牌专供】灵动创想 x Crayon Shinchan/蜡笔小新 野原新之助 搪胶毛绒Q萌龙年  盲盒类 单个盲盒/整盒4个",
      price: 53,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241029/eef890de4b1741cf8fc2092b7491bc56.jpg",
      name: "【品牌专供】The Green Party 动物系列 可爱泰迪熊 睡觉安抚玩具熊生日 玩偶 毛绒公仔 25cm-35cm高",
      price: 0,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240404/4a44288ac91342949080f2dd5036a0be.jpg",
      name: "泡泡玛特 POP MART THE MONSTERS 春天野在家系列 毛绒  大春野 搪胶玩偶  潮流公仔",
      price: 679,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240404/3e22e0bcc5f74903a05afa3e36e74d36.jpg",
      name: "泡泡玛特 POP MART THE MONSTERS 春天野在家系列 搪胶 小春野  毛绒挂件  潮流公仔",
      price: 276,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240407/c199ec95a98f441a9e3eb351600db16f.jpg",
      name: "【品牌专供】The Green Party 各有千球 可爱篮球 男生生日六一 玩偶 毛绒挂件 约16cm高",
      price: 25,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240407/2ef097056577403fa75aad07b7586891.jpg",
      name: "JELLYCAT 趣味运动系列 足球 Amuseable 玩偶 毛绒挂件 9cm高",
      price: 214,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240519/87a1a95ae07a4ad1a0a916b2b138f7cb.jpg",
      name: "【品牌专供】名创优品MINISO x chiikawa usagi 乌萨奇 吉伊卡哇 小八 站姿 坐姿 玩偶 毛绒公仔 18.9cm/20.7cm/25.3cm高",
      price: 178,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250918/50f773919a2341d3a3a58dcd3f5c15e8.jpg",
      name: "【品牌专供】TOP TOY x Sanrio/三丽鸥 魔女的盛典系列酷洛米  盲盒类 单个盲盒/整盒8个",
      price: 47,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240510/713cc6ef18da4519ac0904a131d6c513.jpg",
      name: "【品牌专供】泡泡玛特 POP MART Zsiga 允许，这一切系列 盲盒类 单个盲盒/整盒12个",
      price: 135,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240511/9e45f01457de457895d3f6628b27d7e4.jpg",
      name: "JELLYCAT 趣味系列 英国jellycat新郎新娘水煮蛋 组合套装 玩偶 毛绒公仔 坐高11cm高",
      price: 439,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240514/e199ac544f9e46419f1f17168693ead1.jpg",
      name: "【品牌专供】POTDEMIEL 蜂蜜罐 x Disney/迪士尼 小熊维尼 系列 云朵 玩偶 毛绒公仔 9.5cm高",
      price: 19,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/bc888dbb67b74323be4655780bc9c1d1.jpg",
      name: "JELLYCAT 动物系列 Bartholomew 巴塞罗熊 陪伴安抚 棕色 玩偶 毛绒公仔 36cm高",
      price: 319,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/f67c735585224aefb28c3eee7ce9842f.jpg",
      name: "JELLYCAT 邦尼兔系列 害羞 安抚 银色 玩偶 毛绒公仔 31cm/51cm高",
      price: 265,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240311/666d151c21e8431b8c74dc4553c8d478.jpg",
      name: "JELLYCAT 邦尼兔系列 害羞 安抚 蓝色 玩偶 毛绒公仔 31cm/51cm高",
      price: 319,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/e8ebf5d029d747a497c77f8ff588ada6.jpg",
      name: "JELLYCAT 波浪毛系列 小狮子 安抚 棕黄色 玩偶 毛绒公仔 23cm/31cm高",
      price: 235,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240906/cdf6e1ca18d5430a9abd85180e512553.jpg",
      name: "JELLYCAT 狗系列 动物 TUMBLE 牧羊犬 浅灰色 玩偶 毛绒公仔 12cm高",
      price: 294,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240520/217294055b39410796ba85405f88ba67.png",
      name: "JELLYCAT 神话动物系列 Sky Dragon天龙 蓝色 玩偶 毛绒公仔 坐姿12cm/19cm高",
      price: 629,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240811/1d29111a54524abc9f741b89009bad31.png",
      name: "JELLYCAT 趣味食物系列 Amuseables Peanut Bag Charm花生吊饰 棕色 玩偶 毛绒挂件 坐姿12cm高",
      price: 219,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250703/face551705d4417db79619c6ad76b5f0.jpg",
      name: "【品牌专供】名创优品MINISO B-BO小猪 卡通侧睡夹腿 枕 趣味阿柴可爱安抚陪伴礼袋卡片 玩偶 毛绒公仔 14cm高",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250703/6ec881a1b52b418b8d6f405b3c37f2dd.jpg",
      name: "【品牌专供】名创优品MINISO 吉福特熊系列 乖乖坐姿小熊棕色泰迪熊 可爱柔软熊 玩偶 毛绒公仔 26cm/50cm高",
      price: 28,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/8df437461e8443deb9afec38fc03fbd1.jpg",
      name: "JELLYCAT 邦尼兔系列 甜美小兔 萌趣 yummy兔 郁金香粉色 玩偶 毛绒公仔 13cm高",
      price: 218,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240614/283358dcb47d41709310d2c23f44c92c.jpg",
      name: "【品牌专供】万童乐 娃娃泰迪熊 守护睡觉抱小熊战士可爱带帽小熊 玩偶 毛绒公仔 28cm/40cm高",
      price: 31,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240616/333f67b6b9354755bb4f0c8d80c291df.jpg",
      name: "泡泡玛特 POP MART CRYBABY 落日歌会系列-毛绒挂件 盲盒类 单个盲盒/整盒6个",
      price: 112,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250403/485d0bf015854568bdb3a34c174bdd57.jpg",
      name: "【品牌专供】LFashion Life x Sanrio/三丽鸥 凯蒂猫/库洛米甜美软妹可爱少女心高颜值学生党轻奢小众毛绒公仔玩偶涤纶钥匙扣男女同款情侣款 谷圈挂件",
      price: 49,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/79f9ffb518d84e3c8177b4754f28b2bc.jpg",
      name: "JELLYCAT 树林动物系列 little 小狐狸 橘色 玩偶 毛绒公仔 18cm高",
      price: 188,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240621/4b661ae17b2e46c7a04419b3577a1d30.jpg",
      name: "JELLYCAT 圣诞系列 企鹅 滑雪板 灰白 玩偶 毛绒公仔 坐高11cm高",
      price: 252,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240622/de7c682661eb4d7bb86cdc3d95a7f071.jpg",
      name: "JELLYCAT 北极南极系列 花生企鹅装饰 可爱 玩偶 毛绒挂件 坐高10cm高",
      price: 244,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/b0e45296b8b84246bb3b7fce8b5a29a4.jpg",
      name: "JELLYCAT 北极南极系列 LITTLE LEGS 花生小企鹅 黑白色 玩偶 毛绒公仔 11cm/23cm高",
      price: 184,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/addc1f63bac24e54b610b8a7a37f2829.jpg",
      name: "JELLYCAT 害羞系列 黑白色小狗 安抚 玩偶 毛绒公仔 31cm高",
      price: 218,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240711/f9cda410449246a798d7a31dbfde3c48.jpg",
      name: "【品牌专供】多爱 动物 趴姿海獭 懒懒躺姿海豹 柔软可爱呆萌 玩偶 毛绒公仔 40cm/70cm高",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250628/67f2163d9d02413e9f61584f22c52b56.jpg",
      name: "泡泡玛特 POP MART Labubu TH EMONSTERS 坐坐派对搪胶毛绒盲盒二代  盲盒类 单个盲盒/整盒6个",
      price: 127,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250627/efd465f18c194615bb6e564d6026b625.jpg",
      name: "泡泡玛特 POP MART LABUBU THEMONSTERS-FLIPWITH ME 捷胶毛绒公仔 夏日野  可爱 夏日系列  潮流公仔 40cm",
      price: 649,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240708/a4fcb7098d304645a3508807f5eb0c08.jpg",
      name: "【品牌专供】灵动创想 x Crayon Shinchan/蜡笔小新 幻想搪小偶 可爱Q萌搪胶脸  盲盒类 单个盲盒/整盒6个",
      price: 44,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240711/45ff17c461f540ed89711b2b368c6963.jpg",
      name: "【品牌专供】The Green Party 饼干小熊T恤 蓬蓬裙钥匙扣包包装饰钥匙扣生日 玩偶 毛绒公仔生日挂件 10cm高",
      price: 28,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250822/a66f5292553840e1a3ce765cef6f8711.jpg",
      name: "【品牌专供】妙记 盒装韦特塔罗牌典藏版 金箔pvc防水经典太阳背 桌游",
      price: 82,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20251014/3d4a8d744678478c9b8ba0f0d0092561.jpg",
      name: "JELLYCAT 农家动物系列 小猪 little 粉色 玩偶 毛绒公仔 18cm/25cm高",
      price: 244,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240724/519cc399135748d6b5c4e1dba079ada7.jpg",
      name: "【品牌专供】皓奇乐HUGKIS x 华纳 飞天小女警 可爱花花泡泡雨衣装扮 玩偶 毛绒挂件 13cm高",
      price: 39,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250325/bc62918a179f473e80146502ef822355.jpg",
      name: "【品牌专供】蒙小仔 可爱呆萌蛋糕挂饰 陪伴治愈 玩偶 毛绒挂件 9cm高",
      price: 36,
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

export default trendyToy;
