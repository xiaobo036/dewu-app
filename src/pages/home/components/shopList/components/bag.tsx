import { type GoodType } from "../../../types/good";
import Good from "./good";

const bag: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250805/8c01207f51974af184966d6d1dbac5de.jpg",
      name: "【品牌专供】COACH蔻驰 Laurel 31 通勤大容量可拆卸肩带流浪包腋下包单肩 涂层帆布拼皮革 斜挎手提包 大号 女款 浅卡其色",
      price: 3435,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250530/89ea187c6c6347049e2b2e3150e91b20.png",
      name: "【品牌专供】CinvaiKrose 精致实用时尚气质高级感菱格纹小香风链条腋下包包女士通勤休闲百搭高颜值 牛皮拼合成革 托特包斜挎单肩包 中号 女款 黑色/米白",
      price: 259,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250829/b1c923ec63334897a002c712335b58c4.jpg",
      name: "MCM 经典老花满印菜篮子托特Tote斜挎购物袋单肩包 人造革 手提包 迷你 女款 棕色拼干邑色",
      price: 2329,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240407/35370eb8b22b4ef6967d1c8a8129f14a.jpg",
      name: "【品牌专供】ULDUM 小型结实耐用密码可登机 ABS+PC 行李箱拉杆箱 20寸24寸26寸22寸29寸 男女同款情侣款 粉色/白色/黑色/蓝色/薄荷绿",
      price: 109,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250621/21606125c25144bfb5a7f75817c6d7a9.jpg",
      name: "【品牌专供】COACH蔻驰 Kay 20 经典老花满印徽标Logo盒子包单肩斜挎包 PVC配皮 手提包 小号 女款 黑色拼棕色老花",
      price: 1279,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250325/4ce8c582660a46f38a184a62fe9677c3.png",
      name: "【品牌专供】FCTOSSR法缇斯 日常高级外出ins风简约日系纯色休闲通勤旅行小众气质优菱格链条休闲百搭 pu 斜挎腋下单肩包 女款 银色/白色/黑色",
      price: 56,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250325/276389bc7c1e43918ddd7db72b5447a3.png",
      name: "【品牌专供】FCTOSSR法缇斯 大学生日常外出潮流简约百搭高颜值小众设计休闲感洋气简约 PU 链条包高级质感云朵包腋下斜挎单肩包 常规 女款 黑色/白色/绿色",
      price: 81,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250909/20ed584b685e4361a80993b1b164cc4f.jpg",
      name: "MCM 老花满印波士顿包单肩斜挎包 涂层帆布 手提包 迷你 女款 棕色拼干邑色",
      price: 2899,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220520/d2c28fe2d2714050b07d9ed43c27dcf3.jpg",
      name: "Nike 耐克 Heritage 运动潮流 涤纶 书包背包双肩包 常规 男女同款情侣款 浅矿木棕白",
      price: 184,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250512/817a0320d7844d2aab14f31276dfeceb.jpg",
      name: "【品牌专供】COACH蔻驰 Kay 20 经典老花徽标Logo拉链开合 牛皮革 盒子包单肩斜挎手提包 小号 女款 棕色拼黑色",
      price: 1279,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241221/01efd86b7a2d411887b81e56a1c49848.jpg",
      name: "【品牌专供】MINLUBAOLUO珉璐保罗 时尚通勤满印小熊老花高级感大容量 PU+PVC 双肩包 大号 女款 棕色/米白色/粉色",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250327/678aeb897a76412f9161f5450d62572e.png",
      name: "【品牌专供】FCTOSSR法缇斯 日常通勤梦幻高级简约大学生上课外出小众百搭洋气个性唯美百搭蝴蝶结珍珠链条潮流 pu 斜挎 常规 女款 狂狼/紫灰/棕色/灰黑",
      price: 50,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240426/a46f27d72cd245b0a9a9e9cf5ce0d06f.jpg",
      name: "【品牌专供】CHARLES&KEITH 小ck 早秋人气款多巴胺绗缝菱格链条水桶包 PU 斜挎包 中号 女款 Noir黑色/Beige米色/Light Pink浅粉色/深牛仔蓝色/Black黑色",
      price: 524,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250620/948572a18f99441fad84a85e4dabce67.jpg",
      name: "LONGCHAMP Le Pliage 28长柄大容量 织物 托特包Tote包购物袋饺子手提单肩包 女款 黑色",
      price: 889,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240514/269362e3e1464e4aa34d22907dc6591b.jpg",
      name: "【品牌专供】Nike 3brand系列满印多口袋大容量 涤纶（聚酯纤维） 背包书包双肩包 常规 男女同款情侣款 纯白色",
      price: 161,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240805/ff3607c8d320429fb1b8610186034dcc.png",
      name: "【品牌专供】Villelon 颜值初高中生大学生上课书包个性女韩版撞色背包初高中大容量轻便舒实用适百搭 尼龙 双肩包 男女同款情侣款 红色/粉色/黄色/蓝色",
      price: 76,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250602/735373596a514828a1020af7217bf407.jpg",
      name: "【品牌专供】FCTOSSR法缇斯 时尚通勤简约小众hobo百搭背包满印小熊老花高级感大学生高中生上课大容量上学书包 PU 双肩包 常规 女款 米白色/黑色/棕色/粉色",
      price: 73,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240626/48153563e0d24e18a5ebb37fbe343d53.jpg",
      name: "【品牌专供】CARTELO卡帝乐鳄鱼 大容量行李箱 ABS+PC 拉杆箱旅行箱密码箱 20寸24寸26寸22寸32寸29寸 男女同款情侣款",
      price: 95,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250530/a5f7f6c5db9f4de394cff4e88ac3691d.jpg",
      name: "【品牌专供】Warrior回力 潮牌港风工装潮流街拍休闲骑行运动 尼龙布 胸包腰包斜跨包 男女同款情侣款 白色/黑色",
      price: 79,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240513/d38ea570c7484a72aa667cf2dfc7a3a8.jpg",
      name: "【品牌专供】Dickies 满印老花大容量托特包 时尚休闲百搭 上课通勤 聚氯乙烯拼PU 单肩包Tote包 女款 米杏粉/灰色/黑色/浅卡其色/牛仔蓝",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240514/61800ba3f5d6407e88e69dc1bd646b9e.jpg",
      name: "【品牌专供】CAMEL骆驼21L 双肩登山旅行包轻量书包大学生徒步旅游登山背包户外包  涤纶黑色/红色  男女同款情侣款",
      price: 47,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250620/1ace3f0648a74790b455cedb44755116.jpg",
      name: "Nike 耐克 3M反光 涤纶 单肩斜挎包腰包 男女同款情侣款 黑色",
      price: 185,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240805/110ed1945eae43798c978725feaa01b4.jpg",
      name: "【品牌专供】Dickies 皮质logo轻便大容量学生通勤电脑背包 聚酯纤维 双肩包 男女同款情侣款 多色",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/c0ee02dc1cc7469986a4eefd5dad336a.jpg",
      name: "Nike 40L Brasilia 双拉链大容量多功能休闲运动 涤纶 篮球包健身包露营包旅行包 男女同款 黑色",
      price: 153,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240909/001aba34cbe2499f9e42aa86e0697983.jpg",
      name: "【品牌专供】POLG 普洛格 小熊印花拉链开合百搭休闲书包高中生 聚氨酯人造革 背包双肩包 常规 女款 棕色/黑色/粉色/米白色",
      price: 96,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250812/94b8f854fed8489eb1d93bc513fad66e.jpg",
      name: "【品牌专供】Lee 秋冬季柔软舒适软乎云朵包小众设计感 大学生校园通勤大容量菱格购物袋托特包Tote单肩包 牛津纺 手提包 常规 女款 米白色/黑色",
      price: 198,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250804/c4391710ac1847759158ad9152a2507c.jpg",
      name: "【品牌专供】MICHAEL KORS 迈克高仕 MK Jet Set 老花满印拼色通勤 皮革 托特包Tote包购物袋单肩手提包 迷你 女款 香草白色",
      price: 642,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240607/3302824bc6ed4896b0789f180ef7f8b2.jpg",
      name: "adidas 27.5L 运动休闲大容量 再生聚酯平纹织物 双肩包 常规 女款 沙粉色",
      price: 176,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250124/1ae2bb99d1624a029677908a12125ec3.jpg",
      name: "COACH蔻驰 Georgie 27 时尚徽标Logo 涂层帆布拼光滑皮革拼蛇纹压纹皮革 酒神包腋下包手提斜挎单肩包 大号 女款 黑色配卡其色",
      price: 1569,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/37b86ab61b7541dea47815d41a01a20e.png",
      name: "【品牌专供】COACH蔻驰 Georgie 20 经典老花满印拉链开合可调节肩带盒子包斜挎单肩包 帆布配皮 手提包 常规 女款 卡其色老花",
      price: 1275,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20231013/e553dfc7d31049c2b642472065d00fd7.jpg",
      name: "Nike 耐克 基础大Logo运动 织物 单肩包斜挎包胸包腰包 男女同款情侣款 浅骨色",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240611/b715eec557be4a92aa1a4cce31b4a19a.jpg",
      name: "【品牌专供】Crying Center 日常通勤不规则大容量拉链开合 PU 单肩包 常规 男女同款情侣款 黑色",
      price: 189,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240618/a08185bcec2f4a95b8cf6bcc5a961eea.jpg",
      name: "【品牌专供】COACH蔻驰 City 23 经典老花金属徽标 涂层帆布拼皮革 托特包Tote包购物袋单肩手提包 中号 女款 银色拼沙色",
      price: 1199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240813/43caadd48b8545caa09f5e713ac2eac1.jpg",
      name: "【品牌专供】COACH蔻驰 Cally 17 经典满印 PVC 琴谱包单肩斜挎包手提包 迷你 女款 黑色拼棕色老花",
      price: 999,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/b27b2e4324e846a1805c2901d8792310.jpg",
      name: "【品牌专供】COACH蔻驰 Zip Top Tote 30 老花托特包Tote包购物袋 PVC 单肩包 中号 女款 棕色老花",
      price: 1100,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/393a5fc2239e4fc2a8ae06a1145481ab.jpg",
      name: "COACH蔻驰 Zip Top Tote 30 PVC 托特包Tote包购物袋手提单肩包 中号 女款 白色配棕色老花",
      price: 1629,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250828/d868899f0f74487786e8a74d5b755a4d.jpg",
      name: "【品牌专供】古蚁GUYI COACH蔻驰city33 30托特包内衬配件 减压宽肩垫改造内胆撑包 防变形 毛毡 超纤 包周边 女款 多色",
      price: 109,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240705/9e9e2daf62a14c9b8a991fcf9f5bf253.jpg",
      name: "【品牌专供】Barbie芭比 甜美小众出行收纳月牙包 PU 腋下包单肩斜挎手提包 中号 女款 黑色/米白色",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240709/ab9e8b6d265a4db7a27a731fdfcb7cf5.jpg",
      name: "【品牌专供】Converse 大容量拉链开合 聚酯纤维 双肩包 常规 浅雾霾蓝",
      price: 193,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240712/3d5267352b2a4f0ea3d93a22f89bfa2b.jpg",
      name: "【品牌专供】Teenie Weenie 小众可爱印花高级感简约百搭 PU 波士顿包手提斜挎包 女款 奶油黄/樱花粉/米棕色",
      price: 189,
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

export default bag;
