import { type GoodType } from "../../../types/global";
import Good from "./good";

const digital: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250411/3ffbf53d039a482d89c80ef3009cb2d5.jpg",
      name: "【品牌专供】UIG 2025款【可插卡通话】全网通双卡双待Pad 10.95英寸 超清全面屏 5GWiFi 安卓 大学生考研写作绘画八核高性能 平板电脑",
      price: 699,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/4dfef662f43947bda687537e77551b15.jpg",
      name: "【品牌专供】FUJIFILM富士 拍立得 INSTAX MINI11 透明镜头圈",
      price: 608,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240408/1f1253486b36495a87083702df5754ad.jpg",
      name: "【品牌专供】华为HUAWEI 手环 9 标准版 佩戴舒适 智能手环",
      price: 178,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240408/893239093d1f4c209442bed10850cfd4.jpg",
      name: "【品牌专供】华为HUAWEI 手环 9 NFC版 轻盈纤薄 佩戴舒适 智能手环",
      price: 189,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240326/0e1fa4531f1c4a838b9b5938f2505afd.jpg",
      name: "【品牌专供】松典SONGDIAN DC403 普通数码相机 全新卡片机学生数码照相机高清高像素自拍校园旅游vlog便携式迷你卡片机",
      price: 249,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240328/4c8d411bf4e2426ebc30f271c0d8cd4c.jpg",
      name: "【品牌专供】马克图布 x小王子 联名IP款 复古蓝牙音箱 MG21-39 蓝牙连接 桌面无线便携音响 百元性价比小众简约高级感桌面摆件装饰 男生生日惊喜礼",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240329/19ff03bf380c46269012d7e39b3d709a.jpg",
      name: "【品牌专供】FUJIFILM富士 拍立得 INSTAX MINI 99 一次成像",
      price: 1279,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241205/647bc19c30814ee1aac134fef733e603.jpg",
      name: "【品牌专供】HAVIT 海威特 E9 电竞游戏低延迟HiFi级立体环绕音效舒服佩戴小巧便携学生宿舍通用 半入耳式 蓝牙耳机",
      price: 79,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240402/07cc823816c64d689c9f00a8325f017e.jpg",
      name: "【品牌专供】具乐 MP3/MP4 JX177 迷你版便于收纳隐藏款带蓝牙连接功能看小说听音乐查单词校园必备",
      price: 79,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240523/cb48fd189a034445962660805fb425f7.jpg",
      name: "【品牌专供】iKF FM 无线蓝牙 四六级听力大学英语考试调频 独立CET键 46级 专四专八 音乐通用 HiFi音效 校园频道 头戴式 被动降噪 耳机",
      price: 90,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250125/71f03585328f4c3ab568cce67d48db35.png",
      name: "【品牌专供】音贝奇YINPAGE Real 1 Pro ANC主动降噪高音质男女生学生情侣运动电竞游戏无感延迟超长续航高颜值适配于华为苹果安卓通用 入耳式 真无线蓝牙耳机",
      price: 115,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240406/3d93468c19304e2b8a69ae0670c209eb.jpg",
      name: "【品牌专供】前行者 机械手 有线连接 舒适手感 游戏 静音 电竞 专用 宏编程 电镀双侧翼 四档DPI可调 酷炫呼吸灯 鼠标",
      price: 65,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240626/237a7e11e173443db9a3dbdec68d8592.jpg",
      name: "【品牌专供】niurui纽睿 充电宝 10000毫安/7000mAh 10W10.5W12W 自带四线 大容量 四色可选 迷你便携 安卓苹果通用 自带挂绳 带数显 快充移动电源 NR03",
      price: 37,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240408/7db3e659a7cf4867866835e28f441927.jpg",
      name: "【品牌专供】臻火 电竞鼠标垫 渡 FPS游戏专用超大号垫",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240410/5a9f22d95e96431183b902ffadfd4caf.jpg",
      name: "【品牌专供】小米 Redmi Pad Pro 12.1英寸 2.5K高清 10000mAh大电池 平板电脑",
      price: 1058,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240410/3aa91d8a526f44e2afb289153544adac.jpg",
      name: "【品牌专供】蒙奇奇 MONQIQI 吃鸡指套 防汗职业手机平板电竞手套 触摸屏手套",
      price: 29,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220519/80be0bf143b040f18c65e9508aa09660.jpg",
      name: "Apple 1 米 一拖一 Type-C转Lightning 原装 闪电连接线 数据线",
      price: 143,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/6426ec0841f34c33b69134244ab8f69b.jpg",
      name: "【品牌专供】vivo iQOO Z9 第三代骁龙7 6000mAh 蓝海电池 1.5K 144Hz 护眼屏 5G 电竞 手机",
      price: 1095,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241016/533e4556c39044478cd3ec9ac14694d6.jpg",
      name: "【品牌专供】狄飞尼Difini A系列 ANC主动降噪 360°环绕大声场 多功能全彩触控屏 蓝牙5.4长续航音质好 游戏低延迟 苹果安卓通用 入耳式 耳机",
      price: 88,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250722/632130fa40eb40af838fd527919211c3.jpg",
      name: "【品牌专供】彩族 Z3 普通数码相机 16/32/64/128G 4K高清学生入门校园vlog卡片机",
      price: 239,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240418/c3bdec9cc761448a8f324a24a117bb0d.jpg",
      name: "【品牌专供】HP惠普 GK100S 青轴茶轴 99键 电竞机械有线版 游戏工作双模式调节 20种炫光 情侣款 黑莓侧刻 键盘",
      price: 119,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240418/ebedb5b64b694c11ac3a34554adea8e9.jpeg",
      name: "【品牌专供】HONOR荣耀 手环9 超长续航 轻薄双曲面设计 智能手环",
      price: 133,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250513/2ddf76a7cc7b4eaa9bd93b5b079694f7.jpg",
      name: "【品牌专供】星游者 磁吸充电宝 3000/5000/10000毫安 5W 超薄小巧便携 适用于iphone苹果 SG-A02",
      price: 38,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/c17d9fc23e344435a49ba2542eebb309.jpg",
      name: "【品牌专供】vivo iQOO Z9x 手机 第一代骁龙6 6000mAh 超薄大电池 5G 电竞 全网通",
      price: 959,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240818/ce0b2f09cc5642afb457a645a22d9a70.jpg",
      name: "【品牌专供】Disney迪士尼 D61 IP联名款礼盒装 皮革纹理 可爱高颜值 运动游戏低延迟 HIFI音质长续航 适用苹果安卓 半入耳式 通话降噪 耳机",
      price: 59,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240424/392688e9ef7b44138ce1b7c2d63719fb.jpg",
      name: "【品牌专供】Razer雷蛇 毒蝰V3专业版pro 无线连接连接 8K 电竞游戏轻量化鼠标 类肤材质 吃鸡/LOL 鼠标",
      price: 1109,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240429/1165008e44204bb3932a6b9472b9448e.jpg",
      name: "【品牌专供】Sanrio三丽鸥 S05 高颜值穿搭情侣款 可爱卡通女生 学生党性价比 运动音乐电竞 低延迟长续航高音质 适用苹果安卓电脑 头戴式 通话降噪 蓝牙耳机",
      price: 119,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240818/ce9d8c90f90846c78e0789ff0721700e.jpg",
      name: "【品牌专供】FUJIFILM富士 拍立得 instax SQUARE SQ1 一次成像 方形相机",
      price: 1190,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250704/e583ef32f82e4b52a0147fd70dc83ea7.jpg",
      name: "Apple Pencil Pro 特惠 手写笔 适用于 2024款 iPad Air/ iPad Pro",
      price: 919,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240802/982ad75b68c04e39a5be44a6a35760a9.jpg",
      name: "【品牌专供】闪魔 二合一/三合一 手写笔 适用于苹果/华为/小米/OPPO/vivo平板 精准顺滑流畅无延迟",
      price: 27,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240509/c53739303d0f4d0c878780c941a3f463.jpg",
      name: "【品牌专供】beats Solo Buds 真无线耳机 兼容苹果安卓系统 入耳式 蓝牙耳机",
      price: 509,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240518/abc6ff402ae14cac883b01574bad08db.jpg",
      name: "【品牌专供】方览 4G 路由器 随身WIFI6+ 便携式移动无线网卡三合一免插卡 带1500G体验流量 设备通用无线上网 学生上班旅行通勤 FL2",
      price: 85,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240515/4f55047b66544640838d823c6e9c79cc.jpg",
      name: "【品牌专供】华为 WATCH FIT 3 实时监测血氧 支持NFC 蓝牙通话 5ATM防水 轻薄大屏运动减脂 男女情侣 智能手表",
      price: 524,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240515/0ba7d52b047d4fed8596a43d4e0e58cd.jpg",
      name: "【品牌专供】华为HUAWEI MatePad 11.5 'S 144Hz高刷 2.8K全面屏 平板电脑'",
      price: 1416,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240702/aa44072aa76d4c40809dc07a2f1fb6c4.jpg",
      name: "【品牌专供】方览 F6 增强版随身WIFI6+ 便携式移动无线网卡三合一免插卡 带1500G体验流量 设备通用无线上网 学生上班旅行通勤 路由器",
      price: 35,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240531/c6fe57eb50c34ff6b839e66a98cc4b08.jpg",
      name: "【品牌专供】OPPO Enco Air4 Pro 无线降噪 音乐运动跑步游戏 入耳式 蓝牙耳机",
      price: 178,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240516/47b041f7d6274851bab77ca6fb05f147.jpg",
      name: "【品牌专供】狼蛛 AULA F87/L87 87键 2025款 三模客制化 Gasket结构 87配列 全键热插拔 RGB背光灯效 宏驱动 音乐律动 超长续航 键盘",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240818/6563d198b70c4cbf9a70e501adc4fbb7.jpg",
      name: "Apple 原装 20W USB-C 电源适配器 大陆国行 20W 快速充电头",
      price: 115,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240929/5c5e436b14d749f29bb7262fe2a83d7a.jpg",
      name: "【品牌专供】imobile Z9pro 微信qq来电消息通知 带app全彩触控屏 自定义壁纸 主动降噪 遥控拍照 小游戏 高清通话 苹果华为安卓通用 入耳式 蓝牙耳机",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240516/d664f48815e849fb88447f3770183529.jpg",
      name: "【品牌专供】小米 Buds 6 活力版 30H长续航 半入耳式 通话降噪 蓝牙耳机",
      price: 88,
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

export default digital;
