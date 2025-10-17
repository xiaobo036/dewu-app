import { type GoodType } from "../../../types/global";
import Good from "./good";

const tideClothes: React.FC = () => {
  
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

export default tideClothes;
