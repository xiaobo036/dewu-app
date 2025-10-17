import { type GoodType } from "../../../types/global";
import Good from "./good";

const Ladies: React.FC = () => {
  const goodList: GoodType[] = [
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
      img: "https://cdn.poizon.com/pro-img/cut-img/20250407/231b307a219f4c64a0487e7cf5279766.jpg",
      name: "【品牌专供】卡尔美KELME 复古运动拼接Logo印花修身九分针织运动裤 男女同款",
      price: 134,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250408/637efd3ab61c4104afb0eae4c183f645.jpg",
      name: "【品牌专供】slamble 跑步健身篮球运动九分侧拉链梭织弹力休闲裤 男女同款",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250404/7365bbf133d5456a91c56cf8795e57ff.jpg",
      name: "【品牌专供】Under Armour WOVEN系列 Vital 松紧中腰卫裤直筒裤针织运动裤 男款 黑色",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250304/3e93d54b99b547eb8b61da9e14695734.jpg",
      name: "【品牌专供】CHINISM CH字母印花logo纯色简约圆领长袖T恤 男女同款",
      price: 135,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250304/01775d7f782c4bd6a1b6f661755ed7f2.jpg",
      name: "【品牌专供】CHINISM ch基础款字母印花logo套头抓绒卫衣 男女同款",
      price: 158,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20221007/3d0d5f3afdfd43f389399190fdb71a0b.jpg",
      name: "【品牌专供】CHINISM CH基础款字母印花logo套头纯色连帽卫衣 男女同款 情侣款",
      price: 151,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250312/e970a0096d3a46a69fc69725e1db3d51.jpg",
      name: "【品牌专供】COLDSTONE 斯巴达印花圆领休闲短袖T恤 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250409/802418658f914353871db52da22ea63c.jpg",
      name: "【品牌专供】维动 VEIDOORN 更迭 篮球薄款梭织速干吸汗透气训练美式直筒九分休闲裤 男女同款",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250809/ae4c8519cd004b61a2f8fda4b1f15292.jpg",
      name: "【品牌专供】EUSU 纯色防风防水面料降落伞兵裤美式复古高街休闲裤子直筒宽松阔腿机能风加绒加厚保暖户外运动工装裤 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250828/ce51c3c525364023bae457c7d9378e57.jpg",
      name: "【品牌专供】伯希和PELLIOT 岩壳 性能系列全防护单层硬壳户外防风防水专业登山服硬核外套耐磨时尚实用 冲锋衣 男女同款",
      price: 589,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250409/d9c70f118b7a4bda99fada7f7ff4429e.jpg",
      name: "Nike Dri-Fit 速干透气运动训练足球休闲短裤 男款 黑色",
      price: 94,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250407/bd500a945b9a4d1280a33a9b369a8061.jpg",
      name: "【品牌专供】adidas TAEKWONDO logo标识侧边条纹松紧复古休闲针织运动裤 男女同款 黑色",
      price: 191,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250409/020a6e0555b548499375e88b21559624.jpg",
      name: "【品牌专供】准者 RIGORER 纯色训练直筒弹力速干透气舒适 秋季梭织休闲裤 男女同款 纯正黑",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250527/c73f061aa9824206b3e7f7f4b25b9e68.jpg",
      name: "【品牌专供】恒源祥 轻商务休闲系列 经典绅士都市通勤见客户婚庆男 婚前伴郎成人毕业礼季职场西服外套西裤西装套装 男款",
      price: 319,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250412/f861ce699bfe4c219feec7a6da965233.jpg",
      name: "【品牌专供】维动 VEIDOORN 纯色基础款 弹力紧身纯色训练吸汗散热透气五分篮球运动短裤 男女同款",
      price: 29,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250408/ba21293b5c1b41488365d80c13109910.jpg",
      name: "【品牌专供】slamble 美式毛圈纯色宽松运动健身五分休闲短裤 男女同款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250322/045a69ca81b448daac3de3f587cd42d3.jpg",
      name: "【品牌专供】The Simpsons辛普森一家 美式复古基础款撞色内搭打底外套春秋多季适用衬衣推荐叠穿穿搭休闲宽松潮流百搭多巴胺落肩长袖上衣翻领条纹衬衫 男女同款",
      price: 119,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250322/ac3fa5872a6e4f56ba0c7a465cbee0e5.jpg",
      name: "【品牌专供】The Simpsons辛普森一家 美式复古基础款纯色内搭打底外套春秋多季适用衬衣推荐叠穿穿搭休闲宽松潮流百搭多巴胺落肩长袖上衣翻领衬衫 男女同款",
      price: 119,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250916/143abff369bb4caaa5cf3e1255189f35.jpg",
      name: "【品牌专供】GBXM 美式做旧水洗复古立体多口袋通勤微喇叭工装裤 男女同款",
      price: 177,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250412/44aaba2f171c492fa92dd02cc48e3f15.jpg",
      name: "【品牌专供】卡尔美KELME 纯色休闲跑步弹力中腰直筒运动长裤 男款",
      price: 96,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250518/062321a73949423f84ae3bf083c04b14.jpg",
      name: "【品牌专供】BIPOLAR 无限循环贴布毛球球上衣夏季男美式复古嘻哈潮流街头圆领宽松套头短袖T恤 男女同款",
      price: 149,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250703/aa9fa15cbe8049f8bcf646c50bd24476.jpg",
      name: "【品牌专供】REXSHION 美式高街clean fit重工水洗微喇显高显瘦潮流牛仔裤 男女同款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250704/9d0a9af0bc1e4c7aae5bbdffe94c573a.jpg",
      name: "【品牌专供】大卫贝肯 美式高街西裤可拆卸织带扣宽松纯色显高直筒轻薄透气垂坠感微喇休闲裤 男女同款",
      price: 94,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250321/68643aff45b54181a4087018ca45d56a.jpg",
      name: "【品牌专供】帕丁顿熊 套头基础款花体Logo万针刺绣纯色休闲宽松百搭长袖圆领卫衣 男女同款",
      price: 299,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250328/803de5f772a04310aab94f2e828ed8f8.jpg",
      name: "adidas ESSENTIALS M 3s Ft Fz Hd 运动训练Logo夹克 秋季 男款 黑色",
      price: 236,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250704/cdca8b6d640f4c26b65b02d77513345d.jpg",
      name: "【品牌专供】SESAME STREET芝麻街 美式复古高街纯色水洗做旧基础款潮流宽松直筒弹力感牛仔裤 男女同款",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250321/313718e72af1455b9df6dd3d093c3d18.jpg",
      name: "【品牌专供】CAMEL骆驼 胶囊系列 纯色百搭方章LOGO基础款圆领抓绒长袖卫衣 男女同款",
      price: 98,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250321/5c07313c4e304abdb4a01dd0aaca88b2.jpg",
      name: "【品牌专供】BIPOLAR 小香风贴布长袖毛球球美式复古嘻哈街头宽松休闲薄圆领上衣套头卫衣 男女同款",
      price: 169,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240609/0f729134f9d949688d12b46302c6a382.jpg",
      name: "【品牌专供】adidas originals ADICOLOR RUGBY ADICOLOR 复古美式条纹学院风套头柔软舒适logo长袖Polo衫 男款 黑色",
      price: 309,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/daf0ee7267554f5ea5e36c31d00d5298.jpg",
      name: "【品牌专供】八哥 美式高街机能字母Logo印花拉链设计抽绳松紧户外运动登山跑步防风防水速干直筒伐木伞兵裤工装休闲裤 男女同款",
      price: 82,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250508/753f238bee974829af9dcb1428b23389.jpg",
      name: "【品牌专供】环球 HUANQIU 美式宽松中性机能vibe风休闲中腰阔腿高街微喇垂感品牌Logo工装长裤百搭拖地户外通勤拼接复古休闲结构牛仔裤 男女同款 迷彩色",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250701/d247e8327ca54c6886d6877068a0d75a.jpg",
      name: "【品牌专供】FUERZA CleanFit 美式巴黎简约柔感不硬舒适亲肤微弹高街中腰微喇出街通勤休闲百搭水洗牛仔裤 男女同款",
      price: 89,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250412/97fda3ea2cae490581cbba913367b61d.jpg",
      name: "【品牌专供】沃兰迪 俄勒冈 速干透气松紧宽松带内衬田径 跑步短裤 通用",
      price: 79,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250402/3c7cb6a2527245e2ac0fb886b01af78c.jpg",
      name: "【品牌专供】CAMEL骆驼 胶囊系列 幻影2.0 纯色户外蓄热保暖硬核暴雨级防水防风抗静电耐磨外套可拆卸三合一抓绒内胆 冲锋衣 男女同款",
      price: 439,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250405/a0cee2aa665b4e528eea8cd78d56d025.jpg",
      name: "【品牌专供】熊猫 泡泡羽绒系列 户外防水防风纯色短款加厚保暖锁温连帽700蓬白鸭绒抗寒外套面包羽绒服 男女同款",
      price: 339,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250402/34b022e147274071aa58ac61cd08254d.jpg",
      name: "【品牌专供】JEEP SPIRIT 吉普户外登山宽松可拆卸帽三合一防风防水连帽耐磨保暖 防水耐磨保暖冲锋衣 男女同款",
      price: 158,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250415/db83c04bc66b48139f50d39e1e9cb268.jpg",
      name: "【品牌专供】The Simpsons辛普森一家 美式基础款多巴胺字母刺绣绣花logo纯色条纹拼接撞色宽松休闲潮流百搭教练衣服山系户外穿搭防水防风学生夹克外套 男女同款",
      price: 123,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250915/022523834a374ee99ec9960a1ef69c5a.jpg",
      name: "【品牌专供】Jeep吉普 休闲系列 户外运动登山三合一纯色休闲风衣连帽长袖可拆卸内胆2件套 都市生活/旅游 防水防风透气防泼水吸湿排汗夹克 男女同款",
      price: 659,
    },
    // 以下为从 HTML 提取的美妆类商品
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/c4c6d9d094c14147ac2a110bdcb5d63d.jpg",
      name: "【品牌专供】SK-II 男士保湿焕活氨基酸洁面霜洗面奶 保湿控油 清洁毛孔清爽 120g/120g*2/120g*4 送男友礼物 生日礼物",
      price: 302,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230825/8d71cf6a9daa475c8dd8a77f3b8d2dc0.jpg",
      name: "TF 细白管口红 琉璃焕彩唇膏 奶油滋润 气色玻璃唇亮泽素颜 3.3g",
      price: 270,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250113/0509edaa4d6d43dc881e6931e77b1fdb.jpg",
      name: "【品牌专供】CPB肌肤之钥 光采洁面膏 舒缓紧致保湿滋润清爽修护清洁 125ml",
      price: 268,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240718/3631a53c72a648f6b7cf50852c7c481b.jpg",
      name: "科颜氏第一代 白泥面膜 祛痘去角质去黑头控油清洁收缩毛孔 125ml",
      price: 174,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250714/a49421382461440684da378b1735803b.png",
      name: "【品牌专供】黛珂 心悦容光丝柔蜜粉 自然无瑕持久不脱妆 16g/20g",
      price: 181,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2c469b4bb8a04f3d87460e9f77fef936.jpg",
      name: "娇韵诗第八代 黄金双萃赋活精华 淡纹维稳紧致保湿修护控油抗皱 抗老熬夜护肤品 30ml/50ml/75ml/100ml/20ml",
      price: 0, // 注意：此商品价格为 0，可能为占位或需跳转查看
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240427/a46a6df49a384d57937f9f4006af95c9.jpg",
      name: "纪梵希 旧版明星四宫格散粉 皮面 持久不卡粉定妆 透亮 12g",
      price: 291,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/530a47727a5f480eb59adb1c26c9d590.jpg",
      name: "【品牌专供】MAC 尤雾弹 子弹头丝缎柔雾唇膏口红 丝绒 气色素颜 顺滑持色不拔干 3g",
      price: 96,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220627/fc2e05c864464aeba2c9ed01cfbc9874.jpg",
      name: "植村秀 第一代小方瓶羽纱持妆粉底液 哑光清透遮瑕防晒修饰肤色 SPF24 35ml",
      price: 358,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230127/a3ae9de3ac2b4b86bcb8d6fa9f37da75.jpg",
      name: "【品牌专供】VERSACE 绅情 云淡风轻男士淡香水 木质香调水生香调 淡香水EDT 30ml/50ml/100ml/200ml",
      price: 277,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250324/1c8b52b9f4bc442b9e91dee98e3268db.jpg",
      name: "【品牌专供】Burberry博柏利 周末男士淡香水 柑橘香调 淡香水EDT 30ml/50ml/100ml",
      price: 205,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/ee072319642d47d9ae0d206399616778.jpg",
      name: "CT 奢彩 四色眼影 气色 粉调红棕色玫瑰象牙白暖棕色 5.2g/6g",
      price: 269,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240913/cf579b3ce22d4df68355a0254c5f8be2.jpeg",
      name: "DIOR迪奥 真我女士香水 花香调 香水EDP 浓香优雅持久 30ml/50ml/100ml/150ml 女友生日礼物 送女友礼物",
      price: 747,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2cbf0395f8e64b08b53704523c4fa52b.jpg",
      name: "CHANEL香奈儿 双效持色 镜面 唇釉 易上色不沾杯 4.5ml炫色头+3.5ml锁色头",
      price: 357,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240818/9d043b5c952249f891dc6b8fde47528b.jpg",
      name: "CHANEL香奈儿 限量 可可小姐口红 奶油滋润 润泽 气色显白 3g",
      price: 328,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230121/4982fd0341cc4cff82cc00387a2c6b8b.jpg",
      name: "【品牌专供】倩碧 天才黄油 卓越润肤乳液 舒缓维稳保湿滋润修护控油",
      price: 125,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250117/58760ed070774375a66d72a801c95182.jpg",
      name: "【品牌专供】BOBBI BROWN 清润舒盈洁肤油经典卸妆油洁面油 保湿滋润清爽抗氧化清洁 200ml/400ml",
      price: 0, // 注意：此商品价格为 0，可能为占位或需跳转查看
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250117/ddc6e36942bd4ff1990085f4310c870a.png",
      name: "【品牌专供】完美日记 十二色动物眼影经典猫咪盘 易上色细闪 自然哑光",
      price: 68,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/02aa7d284a854c67906f9a3a660adc4f.jpg",
      name: "【品牌专供】欧莱雅 小金管防晒乳 防紫外线隔离保湿滋润清爽抗氧化紧致 SPF50+ PA++++",
      price: 58,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/a21defbffb3e4e14bf47d56be55e749e.jpg",
      name: "CHANEL香奈儿 柔光持妆粉底液 丝绒自然持久服帖 30ml",
      price: 469,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250909/a0f238780d1e47b493e21bf0c9fa19d2.jpg",
      name: "【品牌专供】3CE 单色腮红膨胀收缩自然修容 修饰肤色修饰轮廓亮泽气色 5g",
      price: 64,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240831/55658eb11b0b477999a13c200da953bc.jpg",
      name: "兰蔻 第一代 菁纯面霜轻盈型 霜状 淡纹舒缓提亮紧致保湿滋润修护抗氧化去角质抗皱 30ml/60ml/100ml",
      price: 969,
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
      price: 176,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250621/d200f2e0603b4d9187861121b9348943.png",
      name: "【品牌专供】AHC 男士水乳洗面奶护肤套装 保湿舒缓补水 深层清洁控油三件套 送男友礼物生日",
      price: 77,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250109/74fbe3f6116544dea93d8d396d9903d1.jpg",
      name: "Elégance雅莉格丝 E大饼 欢颜蜜粉饼 控油自然不脱妆气色遮瑕修饰肤色 持妆 27g",
      price: 909,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220520/b75a49fde7674ae0b95fff36ac667218.jpg",
      name: "【品牌专供】卡诗 黑钻钥源护发精油 柔顺 50ml/100ml/100ml*2 女友生日礼物",
      price: 379,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250124/82fa2ced1ee24ab8b2c0beed618c927e.jpg",
      name: "碧欧泉 新版水动力洁面乳男士 保湿清洁 125ml/125ml*2",
      price: 170,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250123/74dc6389ffd54096852b954f7e8c3838.jpg",
      name: "【品牌专供】卡诗 白金赋活丰盈含氨基酸洗发水 护发保湿丰盈蓬松清洁 80ml/250ml/500ml/80ml*3 牡丹佛手柑香雪松",
      price: 206,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/6b23e78d48394c9a8bd1fead2bf39af0.jpg",
      name: "【品牌专供】卡诗 黑钻钥源洗发水 护发保湿清洁芳香滋养 80ml/80ml*2/250ml/250ml*2/250ml*4/1000ml",
      price: 177,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/439b95ad7b6d4ab387dc54bb1f8093f2.jpg",
      name: "【品牌专供】Whoo后 水妍系列 拱辰享洗面奶 舒缓保湿清爽清洁 油性肤质干皮混合肌 补水 180ml",
      price: 76,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240329/ad84a990edca499fb671410ea2d5600a.jpg",
      name: "NARS 细腻柔焦提升气色腮红 易上色提亮肤色细闪 4.8g",
      price: 135,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250620/563e3270d1274a8e983bc4bd59e74f62.jpg",
      name: "祖玛珑 经典香氛 鼠尾草与海盐香水 木质调 古龙水EDC 奶油盐椰子 30ml/50ml/100ml",
      price: 271,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250319/5700498dcbec4540aab3c75fc374c3f1.jpg",
      name: "【品牌专供】德佑DEEYEO 一次性洗脸巾5包悬挂美容院卸妆洁面擦脸巾加厚加大珍珠纹壁挂式 擦脸巾",
      price: 13,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240628/9f884ae5b3a7483d8f6997626ebeb4ef.jpg",
      name: "【品牌专供】PIARA 佩冉星河与我锁妆散粉 控油自然无瑕持久磨皮雾面不脱妆服帖不卡粉定妆 6g",
      price: 0, // 注意：此商品价格为 0，可能为占位或需跳转查看
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240625/f9cb83609c604f3aaeaebc3a16725904.jpg",
      name: "【品牌专供】PIARA 佩冉纤长卷翘定型睫毛膏 浓黑 6g",
      price: 47,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250120/271ae749fc8e41d780ea50357025fd93.jpg",
      name: "MAC 定制无瑕粉底液 2.0 控油持久不脱妆保湿 30ml",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240403/990c84de65754cb1a7acf618a6048601.jpg",
      name: "【品牌专供】Mistine 蜜丝婷 蜜丝婷清爽泰版小黄帽防晒霜 防水防汗控油隔离保湿抗氧化修护舒缓 SPF50+PA++++ 40ml/60ml/90ml 女友",
      price: 39,
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

export default Ladies;
