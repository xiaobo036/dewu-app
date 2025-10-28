import { Dropdown, Space } from "antd";
import { RightOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Fragment, useState } from "react";
import { useScroll } from "../../../../hooks/useScroll";
import "@/styles/home/topbar.scss";
import LoginModal from "../../../../components/global/loginModal";

const mechartCheckInItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        企业商家入住 <RightOutlined />
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        个人卖家入住 <RightOutlined />
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        国际卖家入住 <RightOutlined />
      </a>
    ),
  },
];

const creatorServiceItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        发布视频 <RightOutlined />
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        工会管理 <RightOutlined />
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        直播中控台 <RightOutlined />
      </a>
    ),
  },
];

const institutionServiceItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        MCN管理 <RightOutlined />
      </a>
    ),
  },
];

const Topbar: React.FC = () => {
  const display = useScroll(400);

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div
        className="w-full bg-[#000] fixed z-50 top-0 left-0 transition-transform duration-300 ease-in-out"
        style={{
          transform: display ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="max-w-[1440px] min-w-[994px] min-h-[80px] mx-auto px-[96px] py-[20px] flex justify-between items-center">
          <div className="flex align-center">
            <div className="w-[40px] h-[40px]">
              <a
                title="得物"
                href="/"
                style={{
                  background:
                    "url('https://h5static.dewucdn.com/node-common/2b06036c-45e4-11eb-e923-918dc63592df-120-120.png')",
                  display: "block",
                  width: "40px",
                  height: "40px",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></a>
            </div>
            <div className="flex items-center gap-[8px]">
              <a className="menu-text" href="/">
                首页
              </a>
              <a className="menu-text" href="/community">
                社区精选
              </a>
              <Space className="menu-text">
                <Dropdown
                  menu={{ items: mechartCheckInItems }}
                  placement={"bottom"}
                >
                  商家入住
                </Dropdown>
              </Space>
              <Space className="menu-text">
                <Dropdown
                  menu={{ items: creatorServiceItems }}
                  placement={"bottom"}
                >
                  创作者服务
                </Dropdown>
              </Space>
              <Space className="menu-text">
                <Dropdown
                  menu={{ items: institutionServiceItems }}
                  placement={"bottom"}
                >
                  机构服务
                </Dropdown>
              </Space>
              <a className="menu-text" href="/">
                关于得物
              </a>
              <a className="menu-text" href="/">
                加入得物
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="download-btn" onClick={() => setShowModal(true)}>
              下载得物App
            </div>
          </div>
        </div>
      </div>
      <LoginModal modalWasOpen={showModal} setModalWasOpen={setShowModal} />
    </Fragment>
  );
};

export default Topbar;
