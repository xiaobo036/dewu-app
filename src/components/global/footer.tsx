import "@/styles/home/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="flex ">
          <div className="flex gap-[130px]">
            <div className="topItem">
              <div className="text-[16px] font-[600]">关联平台</div>
              <div className="text-[14px] font-normal mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  得物商家后台
                </a>
              </div>
              <div className="text-[14px] font-normal mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  得物开放平台
                </a>
              </div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  加入我们
                </a>
              </div>
            </div>
            <div className="topItem">
              <div className="text-[16px] font-[600]">声明</div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  隐私政策
                </a>
              </div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  用户协议
                </a>
              </div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  知识产权
                </a>
              </div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  自律声明
                </a>
              </div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <a
                  className="no-underline text-white"
                  href="https://stark.dewu.com/"
                >
                  廉政举报
                </a>
              </div>
            </div>
            <div className="topItem">
              <div className="text-[16px] font-[600]">关注我们</div>
              <div className="text-[14px] font-normal mt-[20px] text-[#ececf2]">
                <div className="flex gap-[10px]">
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "cover",
                    }}
                    src="https://h5static.dewucdn.com/node-common/f8ca3d4a-9d9b-a8e2-1ab9-ca4f1ca47f57-72-72.png"
                    alt="wechat-logo"
                  />
                  微信公众号
                </div>
              </div>
              <div className="text-[14px] font-normal mt-[20px] text-[#ececf2]">
                <div className="flex gap-[10px]">
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "cover",
                    }}
                    src="https://h5static.dewucdn.com/node-common/434b8e48-c267-e378-2494-fadee15ac5ac-72-72.png"
                    alt="wechat-miniprogram-logo"
                  />
                  微信小程序
                </div>
              </div>
              <div className="text-[14px] font-normal  mt-[20px] text-[#ececf2]">
                <div className="flex gap-[10px]">
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "cover",
                    }}
                    src="https://h5static.dewucdn.com/node-common/632b308e-a630-2f7a-2aa0-4c7cbd2739c4-72-72.png"
                    alt="weibo-logo"
                  />
                  微博
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
