import { type GoodType } from "../../../types/global";
import Good from "./good";

const watch: React.FC = () => {
  const goodList: GoodType[] = [
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/80fe2f142192483595c4fd47124b49b4.jpg",
      name: "【品牌专供】CASIO卡西欧 YOUTH系列-金属小方块 复古经典小方块 石英机芯 不锈钢表带 日韩表 男女同款 黑色表盘",
      price: 144,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/98370622c6a4417582c1f783de774595.jpg",
      name: "CASIO卡西欧 YOUTH系列-圆盘双显 小黑武士 石英机芯 树脂表带 日韩表 男表 黑色表盘",
      price: 229,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/2dbfc42734fd44edb6afd85914854c58.jpg",
      name: "CASIO卡西欧 YOUTH系列-硅胶小方块 小方块复古数显运动50米防水 石英机芯 树脂表带 日韩表 男表 黑色表盘",
      price: 144,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241121/c265e76f2d2840cb9454f6227f033638.jpg",
      name: "【品牌专供】AOMN A19智能手表 蓝牙连接 - 灵动岛信息提醒离线支付 超清大屏情侣款限定礼盒学生穿戴搭配 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/577b17b2bab741f8b100e0edf4cafbee.jpg",
      name: "CASIO卡西欧 YOUTH系列-金属小方块 运动防水 复古经典小方块 学生小银块 石英机芯 日韩表 男女同款 银色表盘",
      price: 155,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/fbdec1442d7946438aa3f0de940f3c74.jpg",
      name: "CASIO卡西欧 STANDARD系列 商务日期显示钢带简约防水 石英机芯 不锈钢表带 日韩表 男表 银色表盘",
      price: 198,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/dd3ea82414554a3b8d3cd9f7ae593fc2.jpg",
      name: "【品牌专供】CASIO卡西欧 STANDARD系列 独角兽 简约时尚防水腕表三盘六眼 石英机芯 皮革表带 日韩表 男表 白色表盘",
      price: 238,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/878714f1639b448ca07bc58095281101.jpg",
      name: "CASIO卡西欧 STANDARD系列 休闲潮流商务 石英机芯 不锈钢表带 日韩表 男表 黑色表盘",
      price: 259,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/a6d6abae02a947fdaa8ad8fc2eafbc1c.jpg",
      name: "CASIO卡西欧 STANDARD系列 三眼商务休闲简约防水 石英机芯 不锈钢表带 日韩表 男表 黑色表盘",
      price: 259,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250909/673b024c4b0443fa8a3d7df9d05af18f.jpg",
      name: "【品牌专供】Lee 腕表 石英机芯 黑色表盘 男表 节点假日经典礼盒 男高中生学生手表校园运动风上班多功能夜光日历窗防水商务风",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20230628/e23135df73d54638a1652228e1801ecb.jpg",
      name: "Vivienne Westwood 腕表 石英机芯 真皮表带 白色表盘 女表 可购礼盒 时尚土星吊坠",
      price: 860,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240622/fff551d5dd2240f5b21d6f235fd1bfb6.jpg",
      name: "【品牌专供】MELSMAO 轻奢人鱼系列 时尚手表 石英机芯 合金表带 国表 女表 贝母色表盘 镶钻女学生职场白领",
      price: 129,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/a2f9f325ff044a8c8ed72571415bdf4d.jpg",
      name: "CASIO卡西欧 STANDARD系列 ENTICER 商务金属简约指针 石英机芯 不锈钢表带 日韩表 女表 粉色表盘",
      price: 218,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240531/750707f569a543a8b7b2072617a66511.jpg",
      name: "CASIO卡西欧 STANDARD系列 经典复古小方表 生活防水 石英机芯 不锈钢表带 日韩表 女表 银色表盘",
      price: 179,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241210/fdd4e6adb87b4c04a86d0ec8a94bd093.jpg",
      name: "【品牌专供】匹克 智能手表 蓝牙连接 - PEAK多功能运动智能手表男女情侣表盘NFC门禁蓝牙通话离线快捷支付学生潮流百搭防水GT45S9手环手表 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250611/b0a666a278e9484581859e5fe4e630dd.png",
      name: "【品牌专供】库宾kubin 智能手表 蓝牙连接 - 多功能灵动岛QQ微信消息提醒可自定义表盘离线支付运动计步健康监测NFC学生青少年情侣对表限定礼盒 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250313/474457ee9a914c65b41f89f0d3e38549.png",
      name: "【品牌专供】kimio 美人鱼系列手链表 金米欧 石英机芯 合金表带 国表 女表 贝母色表盘 镶钻小圆表鱼尾链 高级感气质百搭女学生腕表 礼盒套装",
      price: 299,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/6c184add88804dc39b90e5d0499d52a9.jpg",
      name: "CASIO卡西欧 STANDARD系列 100米防水 石英机芯 不锈钢表带 日韩表 男表 黑色表盘",
      price: 259,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/90276b2354244423850d6c447fb0ff13.jpg",
      name: "CASIO卡西欧 STANDARD系列 DRESS系列 时尚商务复古文艺 石英机芯 不锈钢表带 日韩表 女表 蓝色表盘",
      price: 198,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240703/81c01a34e1b64f0fbd1024d58d791410.png",
      name: "【品牌专供】CHARLOTTE RAFFAELLI夏洛特·拉斐利 爱神之箭 满天星 腕表 石英机芯 不锈钢表带 玫瑰金色表盘 女表 礼盒装 手表女款轻奢小众高级感高中生大学生轻奢防水时尚百搭休闲",
      price: 599,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240611/67c2fc573ea142719c665a8f6c754439.jpg",
      name: "CASIO卡西欧 STANDARD系列 复古指针系列 50米防水 石英机芯 不锈钢表带 日韩表 女表 粉色表盘",
      price: 205,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250912/bf1bee10108b459fb4e6cec664b36e81.jpg",
      name: "【品牌专供】爱依士 AIYISHI 时来运转 美人鱼梦幻蝴蝶小圆表手链表 石英机芯 国表 女表 贝母色表盘 镶钻满天星学生运动防水机械走秒 告白礼盒",
      price: 148,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250925/5d9eea22b37b4a76afbe29c10a3ccba6.jpg",
      name: "【品牌专供】凯度GAIDU 代写贺卡 黑武士系列 时尚潮流男士手表防水夜光学生运动表 石英机芯 真皮表带 国表 男女同款 黑色表盘 百搭休闲男款日常通勤腕表",
      price: 69,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/a613b49535e746cb9a9bfcab6a23e240.jpg",
      name: "CASIO卡西欧 STANDARD系列 剑鱼水鬼海洋之心商务钢带腕表 石英机芯 不锈钢表带 日韩表 男表 黑色表盘",
      price: 180,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/6f3366bb93b445a0a649485179530b6d.jpg",
      name: "CASIO卡西欧 STANDARD系列 剑鱼水鬼海洋之心商务钢带 石英机芯 不锈钢表带 日韩表 男表 蓝色表盘",
      price: 195,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/8a1ca0d827024825966a203cc0ec6973.jpg",
      name: "CASIO卡西欧 STANDARD系列 剑鱼水鬼海洋之心商务 石英机芯 不锈钢表带 日韩表 男表 黑色表盘",
      price: 238,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250812/450e28c125df4fe4b46ae9b81ca20052.jpg",
      name: "【品牌专供】Dickies 日月星辰 腕表 机械机芯 钢表带 黑色表盘 男女同款 限定礼盒装 轻奢金属镂空男生潮流手表学生运动百搭通勤防水男表",
      price: 353,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241121/a63cc1ada21b438cbf292075a4aa170a.jpg",
      name: "【品牌专供】AOMN 蓝牙连接 - 灵动岛功能 离线支付 情侣款学生穿戴搭配智能表 男女同款",
      price: 99,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250908/b68249a1dcaa4d838e1dc04e804afbd7.jpg",
      name: "【品牌专供】Lee 腕表 石英机芯 钢表带 白色表盘 女表 经典节假日情人礼赠物品 手表女时尚轻奢小众复古潮流百搭女款学生校园简约ins风",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20241204/194789a1a94b4005ad8ec26eb3213b3c.png",
      name: "【品牌专供】Lee 腕表 石英机芯 皮革表带 白色表盘 女表 经典节假日情人礼赠物品 时尚轻奢小众复古潮流百搭女款学生校园简约ins风高颜值",
      price: 159,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250328/094261127bb741e68811d1a66b899442.jpg",
      name: "【品牌专供】NATURALLYJOJO 幸运四叶草手表 赠手镯项链 石英机芯 粉色表盘 女表 专属高档礼盒 进口芯时尚轻奢满钻奢华高级精致手链表百搭休闲防水 欧美表",
      price: 199,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240830/d605ff4b6f51473c979836f4a5f22564.jpg",
      name: "【品牌专供】Zero scale 零刻度 轻奢满天星美人鱼镶钻精致温柔公主表 简约高颜值女生腕表 石英机芯 精钢表带 国表 女表 贝母色表盘 运动学生手表生活防水 礼盒",
      price: 108,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250812/78edc7daeaa744399cdc13a803a35d7d.jpg",
      name: "【品牌专供】FILA斐乐 中高考试 石英机芯 米色表盘 男女同款 简易随性百搭 欧美表 学生表",
      price: 97,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/6d7b9918d64d4021a434017bcf96f598.jpg",
      name: "【品牌专供】TISSOT天梭 PRX超级玩家系列 石英机芯 日期显示 防水 可购礼盒 男表 瑞表 40*39.5mm 蓝色表盘 精钢表壳 精钢表带",
      price: 2229,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250730/5fabb07dc96541e383c6db5e049ccce1.jpg",
      name: "【品牌专供】纪斐施 JIFEISHI 方糖轻奢小众 时尚简约 石英机芯 国表 女表 蓝色表盘 精致气质女生腕表高档手链礼盒",
      price: 134,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20220521/405fb8ad4ffa4ba3934fc023c68ce610.jpg",
      name: "CASIO卡西欧 STANDARD系列 复古时尚潮流商务休闲经典指针 石英机芯 不锈钢表带 日韩表 男表 黑色表盘",
      price: 252,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240602/49a6e0dd6f80400c9fc66f8a729e7f9d.jpg",
      name: "CASIO卡西欧 DRESS系列 时尚商务 石英机芯 不锈钢表带 日韩表 女表 白色表盘",
      price: 171,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20240814/b873c374abcf44de874fc7f7a5732682.jpg",
      name: "【品牌专供】纪斐施 JIFEISHI小方糖 手表女款轻奢小众高级感 石英机芯 钢表带 国表 女表 白色表盘 精致优雅 简约百搭校园风 手链礼盒",
      price: 120,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250820/0ce1ff1c3c824509945bd2b5bc89fb0c.jpg",
      name: "【品牌专供】马克华菲FAIRWHALE 探险者系列 双面镂空潮流手表计时夜光防水腕表 自动机械机芯 国表 男女同款 黑色表盘 FW-6960-S",
      price: 409,
    },
    {
      img: "https://cdn.poizon.com/pro-img/cut-img/20250718/2068cfbe69c9482a9c0a6ac1b0a2f4c3.jpg",
      name: "【品牌专供】珂芮柏蒂 Christopher Bailey ins森系气质高级感小圆盘 石英机芯 合金表带 国表 女表 粉色表盘 礼盒装 轻奢小众时尚个性百搭手链女士腕表",
      price: 59,
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

export default watch;
