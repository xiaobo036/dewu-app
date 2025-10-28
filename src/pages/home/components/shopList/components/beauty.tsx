import { type GoodType } from "../../../types/global";
import Good from "./good";

const beauty: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20251011/940115b8fee54e72b7e2b738b485589f.png",
      name: "【品牌专供】科颜氏 第一代 金盏花爽肤水 保湿舒缓祛痘控油 湿敷修护 40ml/75ml/250ml/500ml",
      price: 276,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/c4c6d9d094c14147ac2a110bdcb5d63d.jpg",
      name: "【品牌专供】SK-II 男士保湿焕活氨基酸洁面霜洗面奶 保湿控油 清洁毛孔清爽 120g/120g*2/120g*4 送男友礼物 生日礼物",
      price: 302,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230825/8d71cf6a9daa475c8dd8a77f3b8d2dc0.jpg",
      name: "TF 细白管口红 琉璃焕彩唇膏 奶油滋润 气色玻璃唇亮泽素颜 3.3g",
      price: 272,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250113/0509edaa4d6d43dc881e6931e77b1fdb.jpg",
      name: "【品牌专供】CPB肌肤之钥 光采洁面膏 舒缓紧致保湿滋润清爽修护清洁 125ml",
      price: 269,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250107/45a778966a1d4485b1314063f5ecea03.jpg",
      name: "【品牌专供】CPB肌肤之钥 长管隔离光凝润采妆前乳 自然无瑕 国际滋润版 37ml 女友生日礼物",
      price: 227,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240831/d1d6367d46d24e868fe3d1e53cc58e8e.jpg",
      name: "海蓝之谜 奇迹精华护肤面霜 舒缓紧致保湿滋润修护抗皱 经典版 干皮敏感肌 7ml/30ml/60ml/100ml/250ml/500ml",
      price: 1199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250714/a49421382461440684da378b1735803b.png",
      name: "【品牌专供】黛珂 心悦容光丝柔蜜粉 自然无瑕持久不脱妆 16g/20g",
      price: 181,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2c469b4bb8a04f3d87460e9f77fef936.jpg",
      name: "娇韵诗第八代 黄金双萃赋活精华 淡纹维稳紧致保湿修护控油抗皱 抗老熬夜护肤品 30ml/50ml/75ml/100ml/20ml",
      price: 0,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240427/a46a6df49a384d57937f9f4006af95c9.jpg",
      name: "纪梵希 旧版明星四宫格散粉 皮面 持久不卡粉定妆 透亮 12g",
      price: 339,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250113/841651b3e6e840ac9384dc32965c3617.jpg",
      name: "【品牌专供】3CE 九宫格眼影 易上色自然修饰轮廓 九色",
      price: 125,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/530a47727a5f480eb59adb1c26c9d590.jpg",
      name: "【品牌专供】MAC 尤雾弹 子弹头丝缎柔雾唇膏口红 丝绒 气色素颜 顺滑持色不拔干 3g",
      price: 95,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230127/a3ae9de3ac2b4b86bcb8d6fa9f37da75.jpg",
      name: "【品牌专供】VERSACE 绅情 云淡风轻男士淡香水 木质香调水生香调 淡香水EDT 30ml/50ml/100ml/200ml",
      price: 277,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250324/1c8b52b9f4bc442b9e91dee98e3268db.jpg",
      name: "【品牌专供】Burberry博柏利 周末男士淡香水 柑橘香调 淡香水EDT 30ml/50ml/100ml",
      price: 187,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250106/dd2a55e172de43b9a97005045ae83d9b.jpg",
      name: "【品牌专供】VERSACE 粉耀晶钻淡香水(粉钻) 花果调 淡香水EDT 石榴木兰琥珀 30ml/50ml/90ml/200ml",
      price: 369,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/ee072319642d47d9ae0d206399616778.jpg",
      name: "CT 奢彩 四色眼影 气色 粉调红棕色玫瑰象牙白暖棕色 5.2g/6g",
      price: 263,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240913/cf579b3ce22d4df68355a0254c5f8be2.jpeg",
      name: "DIOR迪奥 真我女士香水 花香调 香水EDP 浓香优雅持久 30ml/50ml/100ml/150ml 女友生日礼物 送女友礼物",
      price: 732,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2cbf0395f8e64b08b53704523c4fa52b.jpg",
      name: "CHANEL香奈儿 双效持色 镜面 唇釉 易上色不沾杯 4.5ml炫色头+3.5ml锁色头",
      price: 349,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240818/9d043b5c952249f891dc6b8fde47528b.jpg",
      name: "CHANEL香奈儿 限量 可可小姐口红 奶油滋润 润泽 气色显白 3g",
      price: 319,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250115/4d5be886163e455db8032b37da689f04.jpg",
      name: "【品牌专供】雅诗兰黛 鲜活营养红石榴洗面奶 提亮保湿清洁卸妆 125ml/125ml*2",
      price: 146,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230121/4982fd0341cc4cff82cc00387a2c6b8b.jpg",
      name: "【品牌专供】倩碧 天才黄油 卓越润肤乳液 舒缓维稳保湿滋润修护控油",
      price: 124,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250117/58760ed070774375a66d72a801c95182.jpg",
      name: "【品牌专供】BOBBI BROWN 清润舒盈洁肤油经典卸妆油洁面油 保湿滋润清爽抗氧化清洁 200ml/400ml",
      price: 0,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250117/ddc6e36942bd4ff1990085f4310c870a.png",
      name: "【品牌专供】完美日记 十二色动物眼影经典猫咪盘 易上色细闪 自然哑光",
      price: 68,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/02aa7d284a854c67906f9a3a660adc4f.jpg",
      name: "【品牌专供】欧莱雅 小金管防晒乳 防紫外线隔离保湿滋润清爽抗氧化紧致 SPF50+ PA++++",
      price: 57,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/a21defbffb3e4e14bf47d56be55e749e.jpg",
      name: "CHANEL香奈儿 柔光持妆粉底液 丝绒自然持久服帖 30ml",
      price: 469,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250909/a0f238780d1e47b493e21bf0c9fa19d2.jpg",
      name: "【品牌专供】3CE 单色腮红膨胀收缩自然修容 修饰肤色修饰轮廓亮泽气色 5g",
      price: 66,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240831/55658eb11b0b477999a13c200da953bc.jpg",
      name: "兰蔻 第一代 菁纯面霜轻盈型 霜状 淡纹舒缓提亮紧致保湿滋润修护抗氧化去角质抗皱 30ml/60ml/100ml",
      price: 959,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250117/5a605e8076f04323831cc2a68d1ed42c.jpg",
      name: "【品牌专供】Whoo后 拱辰享系列 气韵生洁面膏 保湿控油清洁卸妆 180ml/180ml*2/180ml*3/40ml*5",
      price: 92,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220520/f8f98ba9b78340cba7fea608b54e4e7e.jpg",
      name: "【品牌专供】Chloe蔻依 恋旅 流浪女士香水 西普香调花香调 浓香水EDP 20ml/30ml/50ml/75ml",
      price: 310,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240817/e38208b99d6f46258f26fdcbc42f52af.jpg",
      name: "CHANEL香奈儿 米色时尚 五色眼影 自然 粉调深棕色樱花浅棕色香槟金 4.5g",
      price: 549,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220520/04936ac4072847b1b510da52f53b2e1d.jpg",
      name: "【品牌专供】安娜苏 筑梦天马独角兽女士香水 花果调美食香调 淡香水EDT 柚子树莓兰花 30ml/50ml/75ml",
      price: 182,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250621/d200f2e0603b4d9187861121b9348943.png",
      name: "【品牌专供】AHC 男士水乳洗面奶护肤套装 保湿舒缓补水 深层清洁控油三件套 送男友礼物生日",
      price: 77,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250109/74fbe3f6116544dea93d8d396d9903d1.jpg",
      name: "Elégance雅莉格丝 E大饼 欢颜蜜粉饼 控油自然不脱妆气色遮瑕修饰肤色 持妆 27g",
      price: 899,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220520/b75a49fde7674ae0b95fff36ac667218.jpg",
      name: "【品牌专供】卡诗 黑钻钥源护发精油 柔顺 50ml/100ml/100ml*2 女友生日礼物",
      price: 379,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240831/067e020fb94043ee8b70c64642cc4007.jpg",
      name: "【品牌专供】可复美 重组胶原蛋白光奕律时修护精华面霜 舒缓紧致保湿修护抗皱 50g/瓶",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250123/74dc6389ffd54096852b954f7e8c3838.jpg",
      name: "【品牌专供】卡诗 白金赋活丰盈含氨基酸洗发水 护发保湿丰盈蓬松清洁 80ml/250ml/500ml/80ml*3 牡丹佛手柑香雪松",
      price: 206,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/92f7fb9c6eec4ffba5851a5c412b5bbb.jpg",
      name: "【品牌专供】兰蔻 极光 洁面乳净澈焕肤 提亮保湿滋润去角质控油清洁 氨基酸洗面奶 50ml/125ml",
      price: 178,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/439b95ad7b6d4ab387dc54bb1f8093f2.jpg",
      name: "【品牌专供】Whoo后 水妍系列 拱辰享洗面奶 舒缓保湿清爽清洁 油性肤质干皮混合肌 补水 180ml",
      price: 76,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240329/ad84a990edca499fb671410ea2d5600a.jpg",
      name: "NARS 细腻柔焦提升气色腮红 易上色提亮肤色细闪 4.8g",
      price: 132,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250620/563e3270d1274a8e983bc4bd59e74f62.jpg",
      name: "祖玛珑 经典香氛 鼠尾草与海盐香水 木质调 古龙水EDC 奶油盐椰子 30ml/50ml/100ml",
      price: 269,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250620/af1d2b56e614447986d80fc2f07c69ba.jpg",
      name: "祖玛珑 蓝风铃女士香水 绿叶调花香调 古龙水EDC 风铃草蜜桃 夏日气息 30ml/50ml/100ml 送女友礼物",
      price: 294,
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

export default beauty;
