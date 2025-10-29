import "@/styles/community/content.scss";
import { useEffect, useRef, useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import type { CardItem } from "../types/content";

const Content: React.FC = () => {
  const [cardList, setCardList] = useState<CardItem[]>([
    {
      id: 1,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1638606331_byte917711byte_6b2c36b02fa05222e308585a1ba99c7c_iOS_w1280h1704.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "晚上闪光灯拍照小技巧",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/1638606331_byte533604byte_95ff029727ea3472376a4e3f7f587daf_iOS_w1273h1272.jpg",
        name: "梁博文BowenLeung",
        likes: 50000,
      },
    },
    {
      id: 2,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/45250474_byte1351887byte_ac91e69d6e9b399409647a7af8f61496_iOS_w1164h1550.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "当你化完妆疲惫收场时",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2024/other/45250474_byte154632byte_54c4039158eca19a427a8242a1236d86_iOS_w813h812.jpg",
        name: "小小蛋白__",
        likes: 44000,
      },
    },
    {
      id: 3,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/165876437_byte1040894byte_5c0f6e6ded8d3be088efb18e95a70980_iOS_w1280h1705.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "早秋穿搭公式",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/165876437_byte303709byte_5a77e5e7b8671d77bd80f2a69bfac6b1_iOS_w1440h1440.jpg",
        name: "圆子咕噜_",
        likes: 43000,
      },
    },
    {
      id: 4,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1747676658_byte1211071byte_07865884f81156218e256d65a406bdf6_iOS_w1170h1558.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "教你一招！拉近社交距离",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2022/other/1747676658_byte452838byte_43b7fa9f992e65be65bc326600f8266a_iOS_w1280h1281.jpg",
        name: "爱跑步的李老师",
        likes: 38000,
      },
    },
    {
      id: 5,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1549915003_byte1427248byte_8df0512011e03f10a70bdbe7863cdd8c_iOS_w1290h1720.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "手残党快来！45s学会3种发型变美小技巧！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/1549915003_byte168622byte_7d42e5eb31680c0d6e678ad4b2656d34_iOS_w951h950.jpg",
        name: "一枝钳",
        likes: 35000,
      },
    },
    {
      id: 6,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2645306097_model23117RK66Cmodel_byte165888byte_52c3642eb7314fcf08b4f55627fa1e13_1759131425838_du_android_w1080_h1440.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "早期电影牺牲这么大么",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/2645306097_model23117RK66Cmodel_byte182505byte_1cc4b0319df00c3673f7be07da2d1986_1755931815687_du_android_w1080_h1080.jpg",
        name: "陈词追剧",
        likes: 34000,
      },
    },
    {
      id: 7,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2025353206_modelPCKM80model_byte333474byte_5f17164a49c709cd8abbe2b0aa0c37fc_1758460738319_du_android_w1080_h1440.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "一不小心刷新了黢黑胳膊肘！告别关节黑",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/2025353206_modelJER-AN10model_byte54014byte_89f41ba7cab1d0c3d25273e1339ba85b_1759928397166_du_android_w1079_h1079.jpeg",
        name: "姜江Carrie",
        likes: 32000,
      },
    },
    {
      id: 8,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/54211542_byte335513byte_a20b31eeb3e485a74e9d265f2b4450fe_iOS_w735h980.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "“钞能力”",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2023/other/54211542_byte131024byte_ebdf94b0d0e9f19805381f3bdf437d40_iOS_w1054h1053.jpg",
        name: "Maxo__",
        likes: 31000,
      },
    },
    {
      id: 9,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1686470080_byte1434589byte_1bdee113acb4ca3efaa703b2d41bf2da_iOS_w1080h1440.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "“四个跑步常见问题”",
      authorInfo: {
        avatarUrl:
          "https://cdn.poizon.com/usericon3d10d290abac4e7085865c97b08a8f0f.png",
        name: "刘致玮耶",
        likes: 31000,
      },
    },
    {
      id: 10,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1712446164_byte1528694byte_8d9c258b1399ac29f582209ae201ed94_iOS_w1262h1680.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "当你发现原来头发才是最关键的变美器官",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/1712446164_byte183429byte_b142323ac58fe8f599b00e1fc225d755_iOS_w1290h1290.jpg",
        name: "几许鑫",
        likes: 30000,
      },
    },
    {
      id: 11,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/1574674495_41d0e299ca1abeb2094852da042165c7_1759243272760_w960h1280.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "你会心动吗",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/1574674495_modelV2307Amodel_byte164641byte_30587948cdc40d728091cb2454ab51c2_1761211687652_du_android_w1260_h1260.jpg",
        name: "衫川电影_",
        likes: 29000,
      },
    },
    {
      id: 12,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/2580739389_41d0e299ca1abeb2094852da042165c7_1757645545030_w842h632.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "男孩只是扔出一枚硬币，结果竟酿成地狱级的灾难！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/2580739389_modelV2353Amodel_byte162244byte_c4a3db921c47185476c172e1c2a52d86_1750390991302_du_android_w1080_h1080.jpg",
        name: "火火电影v",
        likes: 29000,
      },
    },
    {
      id: 13,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2645306097_model23117RK66Cmodel_byte272158byte_dd4d4ce96bea19f5de86abc840d08184_1757158230953_du_android_w1080_h1440.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "女海王钓鱼的手段",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/2645306097_model23117RK66Cmodel_byte182505byte_1cc4b0319df00c3673f7be07da2d1986_1755931815687_du_android_w1080_h1080.jpg",
        name: "陈词追剧",
        likes: 29000,
      },
    },
    {
      id: 14,
      imageUrl:
        "https://image-cdn.dewu.com/sociality/mcn/206198833/1859166252_8c7dd922ad47494fc02c388e12c00eac_1758597151110_w1080h1920.jpeg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "原来iphone自带的软件是这么用的！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2022/other/1859166252_modelCOL-AL10model_byte182123byte_71fdbf6468d220c048d1a9f030e0c602_du_android_w1080_h1080.jpg",
        name: "野原香菜v",
        likes: 27000,
      },
    },
    {
      id: 15,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/117733890_41d0e299ca1abeb2094852da042165c7_1757040336253_w570h761.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "“迟迟拿不下男孩，向闺蜜求助”",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/117733890_byte35181byte_406bdc5ad68a82ad268245fc4ed1d85b_iOS_w399h399.jpg",
        name: "白首混剪",
        likes: 27000,
      },
    },
    {
      id: 16,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2619222746_byte965818byte_d896105b0e15edf6b1aaf78182900833_iOS_w1080h1438.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "专柜专欺负老实人！！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/2619222746_byte87838byte_df4a9a01c53870252861f0c472d3aebf_iOS_w951h950.jpg",
        name: "阿君别打小贝",
        likes: 26000,
      },
    },
    {
      id: 17,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2559694460_byte215394byte_8c567e1b89aec20e86cfe9463b6ceb36_iOS_w540h719.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "爱是细节 是下意识的惦记...",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/2559694460_byte23537byte_0ebfc3c8872b41aa49f1be33e59335f8_iOS_w300h300.jpg",
        name: "阿喻AYU啊",
        likes: 26000,
      },
    },
    {
      id: 18,
      imageUrl:
        "https://image-cdn.dewu.com/sociality/mcn/1844630999/2270552359_8c7dd922ad47494fc02c388e12c00eac_1759803240638_w1440h1080.jpeg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "那些看似平凡的小事 却是最动人的情书 ",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2024/other/2270552359_byte71600byte_aceb88be2e355e517ec0452e8488a7a5_iOS_w748h748.jpg",
        name: "喵喵酱追剧",
        likes: 26000,
      },
    },
    {
      id: 19,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/134547027_41d0e299ca1abeb2094852da042165c7_1756964077575_w1125h1500.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "死飞场地自行车，蹬一圈跑好几圈",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/134547027_byte56303byte_d74b685b2d0f136b0cee9fd0d0c6b6bd_iOS_w1081h1080.jpg",
        name: "松哥带你看世界",
        likes: 24000,
      },
    },
    {
      id: 20,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2498824965_byte1436920byte_7e3fc7f96d3ae593e1bf884d539a62df_iOS_w1280h1705.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "这些家居好物效果太顶！快爱鼠咯！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/2498824965_byte69682byte_0ae3708f483fd4d5e717eeaf7a57d489_iOS_w939h940.jpg",
        name: "鲨鱼娜娜Nabi",
        likes: 24000,
      },
    },
    {
      id: 21,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/1917220474_41d0e299ca1abeb2094852da042165c7_1756489642623_w1125h843.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "#电影解说 #电影解说分享 #电影高分解说 #电影解说每日更新 ",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/1917220474_byte444612byte_e71539cdf23d7472b35e1b0af1e2e738_iOS_w1080h1080.jpg",
        name: "小黑讲电影",
        likes: 23000,
      },
    },
    {
      id: 22,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2602896210_modelPHJ110model_byte140980byte_c7cfb60924629270f6675528cb8d1741_1759662496747_du_android_w720_h960.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "女人的第六感",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/2602896210_modelPHJ110model_byte99681byte_9359e92f873d645bd06d8d5124bf6f84_1760529461153_du_android_w720_h719.jpg",
        name: "阿星Cut",
        likes: 24000,
      },
    },
    {
      id: 23,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/1574674495_41d0e299ca1abeb2094852da042165c7_1758130419025_w960h1280.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "水与火都能在一起 那我们呢",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/1574674495_modelV2307Amodel_byte164641byte_30587948cdc40d728091cb2454ab51c2_1761211687652_du_android_w1260_h1260.jpg",
        name: "衫川电影_",
        likes: 23000,
      },
    },
    {
      id: 24,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/2433061550_41d0e299ca1abeb2094852da042165c7_1760516333808_w842h632.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "Lisa神级solo | 舞蹈直拍",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/2433061550_model23117RK66Cmodel_byte131641byte_2517e7dfbe437aa7523ffd673604c041_1758161709881_du_android_w1440_h1440.jpeg",
        name: "Zachariah_W",
        likes: 23000,
      },
    },
    {
      id: 25,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1724954564_byte1253285byte_6238d4e5f0ad52ed61e3145190c29fa5_iOS_w1280h1704.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "换头日记｜第一视角带你体验 接发染发全过程",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2022/other/1724954564_byte47321byte_7535463feec520d1a59b21c52fa2dd6d_iOS_w888h889.jpg",
        name: "北京染发的神",
        likes: 23000,
      },
    },
    {
      id: 26,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/138031316_byte1096848byte_7befe7ba2b21ba9fdf7b04d8f70d441e_iOS_w986h1315.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "薛凯琪🥰",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/138031316_byte121430byte_69dd190a1b589aef65f5172b19435532_iOS_w1280h1280.jpg",
        name: "麦麦会走路malt",
        likes: 23000,
      },
    },
    {
      id: 27,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1805964693_modelPHM110model_byte246776byte_35626a198c6273eef657844685da77f6_1756640318941_du_android_w1080_h1440.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "他教的全是好东西🔥",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/1805964693_modelPHM110model_byte81954byte_f6d07be3e035cfd9c55fc925c87e10f7_1748246446285_du_android_w1080_h1080.jpeg",
        name: "晚上不练篮球",
        likes: 22000,
      },
    },
    {
      id: 28,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1571796199_byte805379byte_bb8db9725da93252eeaf3d165ab9fddd_iOS_w720h959.jpg?x-oss-process=image/quality,q_75/resize,w_750",
      title: "老公每年都给我送一个黄金Kitty、越送越让人生气😤",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/1571796199_byte84745byte_2f5d9b0de0c9a1d585eb6364ac9f96b2_iOS_w1080h1081.jpg",
        name: "喵脆角yy",
        likes: 22000,
      },
    },
    {
      id: 29,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1234898747_modelKOZ-AL00model_byte95420byte_8bd0c43a6b2ed25fba97738f47a40289_1759914130136_du_android_w720_h720.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "当身体机能几乎耗尽时，意志会带你杀出重围！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/third-avatar/1234898747_modelKOZ-AL00model_byte66865byte_c5b5fe04ebfe97833d93cf1d0257caec_1742722615001_du_android_w720_h719.jpg",
        name: "小黑dwo",
        likes: 21000,
      },
    },
    {
      id: 30,
      imageUrl:
        "https://image-cdn.dewu.com/creator/2024/133284239_41d0e299ca1abeb2094852da042165c7_1758689665910_w632h843.png?x-oss-process=image/quality,q_75/resize,w_750",
      title: "可以装菜鸟，不能真是菜鸟",
      authorInfo: {
        avatarUrl:
          "https://cdn.poizon.com/usericon_weixin_a89c60e56eb64dc9a04b7b7b67f5f0bb.png",
        name: "戏瓜Cut",
        likes: 21000,
      },
    },
    {
      id: 31,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/1910927881_modelMT2110model_byte539394byte_dd08519597b36308a7d7a850483a2c1a_1759065337240_du_android_w1080_h1440.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "选鞋射门挑战！哪种威力大！赤脚大仙啊！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2023/other/1910927881_modelOPD2101model_byte105582byte_58546be5d1d17e7f44ca00c8cd95b438_du_android_w1600_h1600.jpeg",
        name: "体育综合球迷中心",
        likes: 21000,
      },
    },
    {
      id: 32,
      imageUrl:
        "https://image-cdn.dewu.com/app/2025/community/2668759319_modelJEF-AN00model_byte535428byte_8de1cfdcc713526988b82a2546bd2a8c_1758448595515_du_android_w1080_h1440.webp?x-oss-process=image/quality,q_75/format,png/resize,w_750",
      title: "姿势越怪 变美越快有时候显胖都是体态不好的问题！",
      authorInfo: {
        avatarUrl:
          "https://image-cdn.poizon.com/app/2025/other/2668759319_byte80595byte_fd202dd7d91c267d6df9a89bc8f624ed_iOS_w954h953.jpg",
        name: "吴千金呀",
        likes: 21000,
      },
    },
  ]);

  const waterFall = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrent] = useState(0);

  const [itemPerPage, setItemPerPage] = useState(12);

  // 1、生成随机高度的卡片
  const generateCard = (count = itemPerPage) => {
    const newCards = cardList.slice(0, count).map((card) => ({
      ...card,
      height: Math.floor(Math.random() * 300) + 200, // 为每个卡片生成200-500之间的随机高度
    }));
    setCardList(newCards);
  };

  // 2、生成瀑布流布局
  const generateWaterFall = () => {
    const container = waterFall.current;
    if (!container) return;

    // 清空容器
    container.innerHTML = "";

    cardList.forEach((item) => {
      if (!item.height) return; // 跳过没有height属性的卡片

      const cardItem = document.createElement("div");
      cardItem.className = "card-item masonry-item";
      cardItem.innerHTML = `
      <div class="relative group">
        <img 
          src="${item.imageUrl}" 
          alt="瀑布流图片 ${item.id}" 
          class="w-full lazy-load"
          style="height: ${item.height}px; object-fit: cover;"
        >
        <div class='card-footer'>
          <div class='card-title'>${item.title}</div>
          <div class='card-author'>
             <div class='author-details'>
                <img src="${item.authorInfo.avatarUrl}" alt="${item.authorInfo.name}" class="author-avatar">
                <div class='author-name'>${item.authorInfo.name}
             </div>
             <div class='likes'>
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ${item.authorInfo.likes}
             </div>
          </div>
        </div>
      </div>
    `;
      container.appendChild(cardItem);
    });
  };

  // 在页面挂载时加载
  useEffect(() => {
    generateCard();
  }, []);

  // 当cardList加载时,更新页面
  useEffect(() => {
    if (cardList && cardList.length > 0) {
      generateWaterFall();
    }
  }, [cardList]);

  return (
    <div className="container">
      <p className="title">热门动态</p>
      <div className="content">
        <div className="masonry-grid" ref={waterFall}></div>
      </div>
    </div>
  );
};

export default Content;
