import "@/styles/home/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="bottom-box">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <div className="leftItem">
              <div className="itemTitle">关联平台</div>
              <a
                className="channel"
                href="https://stark.dewu.com/"
                target="_blank"
                rel="noreferrer"
              >
                得物商家后台
              </a>
              <a
                className="channel"
                href="https://open.dewu.com"
                target="_blank"
                rel="noreferrer"
              >
                得物开放平台
              </a>
              <a
                className="channel"
                href="https://poizon.jobs.feishu.cn/index"
                target="_blank"
                rel="noopener noreferrer"
              >
                加入我们
              </a>
            </div>
            <div className="leftItem">
              <div className="itemTitle">声明</div>
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="channel"
              >
                隐私政策
              </a>
              <a
                href="/usage.html"
                target="_blank"
                rel="noopener noreferrer"
                className="channel"
              >
                用户协议
              </a>
              <a
                href="/property.html"
                target="_blank"
                rel="noopener noreferrer"
                className="channel"
              >
                知识产权
              </a>
              <a
                href="https://fast.dewu.com/nezha-plus/detail/60ab99b09af89b5e0e0bb647"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="channel"
              >
                自律声明
              </a>
              <a
                href="/government.html"
                target="_blank"
                rel="noopener noreferrer"
                className="channel"
              >
                廉政举报
              </a>
            </div>
            <div className="leftItem">
              <div className="itemTitle">关注我们</div>
              <div className="itemContent">
                <div className="itemConIcon">
                  <img
                    width={24}
                    height={24}
                    src="https://h5static.dewucdn.com/node-common/f8ca3d4a-9d9b-a8e2-1ab9-ca4f1ca47f57-72-72.png"
                    alt="weixin"
                  />
                </div>
                <div className="channel">微信公众号</div>
                <div className="tooltip left-[110px] top-[-45px]">
                  <img
                    style={{ width: "170px", height: "190px" }}
                    src="https://h5static.dewucdn.com/node-common/cd4face8-0890-9b26-323e-deb476d4785c-510-570.png"
                    alt="wechat"
                  />
                </div>
              </div>
              <div className="itemContent">
                <div className="itemConIcon">
                  <img
                    width={24}
                    height={24}
                    src="https://h5static.dewucdn.com/node-common/434b8e48-c267-e378-2494-fadee15ac5ac-72-72.png"
                    alt="miniprogram"
                  />
                </div>
                <div className="channel">微信小程序</div>
                <div className="tooltip left-[110px] top-[-5px]">
                  <img
                    style={{ width: "170px", height: "190px" }}
                    src="https://h5static.dewucdn.com/node-common/a51f7df0-fa0f-e4c3-68de-7bc14529c740-510-570.png"
                    alt="miniprogram"
                  />
                </div>
              </div>
              <div className="itemContent">
                <div className="itemConIcon">
                  <img
                    width={24}
                    height={24}
                    src="https://h5static.dewucdn.com/node-common/632b308e-a630-2f7a-2aa0-4c7cbd2739c4-72-72.png"
                    alt="weibo"
                  />
                </div>
                <div className="channel">微博</div>
                <div className="tooltip left-[70px] top-[50px]">
                  <a
                    href="https://weibo.com/u/5705359013"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      style={{ width: "147px", height: "162px" }}
                      src="https://h5static.dewucdn.com/node-common/060c9a3e-1c75-3aa0-0ce1-47e06b504c44-441-486.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="text-base font-semibold text-[#fff]">
              下载得物App
            </div>
            <div className="downloadCon">
              <div className="downloadIcon">
                <img
                  width={130}
                  height={130}
                  style={{ objectFit: "cover" }}
                  src="https://h5static.dewucdn.com/node-common/3ccbe2a6-b864-abe1-d31d-a3f2f5a458cc-390-390.png"
                  alt=""
                />
              </div>
              <div className="downloadDevice">
                <div className="download apple">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://h5static.dewucdn.com/node-common/80039c56-9da9-26a0-b7b0-b8542079cb89-72-73.png"
                      width={24}
                      height={24}
                    />
                    <div className="">App Store 内搜索“得物”下载</div>
                  </div>
                </div>
                <div className="download android">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://h5static.dewucdn.com/node-common/91aed15b-6c42-97a8-33ce-68d8d694c2ab-72-73.png"
                      width={24}
                      height={24}
                    />
                    <div className="">安卓应用市场内搜索“得物”下载</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs font-normal">微信或相机扫描下载</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="max-w-[1440px] min-w-[1024px] mx-auto my-0 px-[72px] py-6">
          <div className="flex flex-col items-center gap-2 text-center text-[#ececf2] text-xs">
            <div className="flex flex-wrap justify-center gap-4">
              <span>© 2015–{new Date().getFullYear()} 得物web官网</span>
              <a
                className="no-underline text-[#ececf2]"
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noreferrer"
              >
                沪ICP备16019780号-9号
              </a>
              <a
                className="no-underline text-[#ececf2]"
                href="https://beian.mps.gov.cn/#/query/webSearch?code=31010902003239"
                target="_blank"
                rel="noreferrer"
              >
                沪公网安备31010902003239号
              </a>
            </div>
            <div className="text-[11px] opacity-70">
              公司名称：上海得物信息集团有限公司
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
