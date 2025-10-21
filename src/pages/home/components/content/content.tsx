import { Fragment, useState } from "react";
import "@/styles/home/content.scss";
import LoginModal from "../../../../components/global/loginModal";

const Content: React.FC = () => {
  interface Poster {
    id: number;
    src: string;
  }

  interface PosterList {
    left: Poster[];
    center: Poster[];
    right: Poster[];
  }

  const posterList: PosterList = {
    left: [
      {
        id: 1,
        src: "https://h5static.dewucdn.com/node-common/1dcd282c-8276-73ad-d478-4237297aa770-280-439.png",
      },
      {
        id: 2,
        src: "https://h5static.dewucdn.com/node-common/c976712d-f02d-0254-23f4-55f0a5500229-420-658.png",
      },
      {
        id: 3,
        src: "https://h5static.dewucdn.com/node-common/86ddf63a-2c2b-4902-bd49-b153c5dc7bbc-420-658.png",
      },
    ],
    center: [
      {
        id: 1,
        src: "https://h5static.dewucdn.com/node-common/2cafc249-f789-c06a-be9e-4df0812c8544-420-658.png",
      },
      {
        id: 2,
        src: "https://h5static.dewucdn.com/node-common/56bca2e8-0738-d9f5-ccb4-15b1e1c83054-420-658.png",
      },
      {
        id: 3,
        src: "https://h5static.dewucdn.com/node-common/dca560ec-ef91-b307-2b8b-138fa880daba-420-658.png",
      },
    ],
    right: [
      {
        id: 1,
        src: "https://h5static.dewucdn.com/node-common/2b5d552e-7d0d-ef2b-4cfd-c4493f1a184e-420-657.png",
      },
      {
        id: 2,
        src: "https://h5static.dewucdn.com/node-common/86ddf63a-2c2b-4902-bd49-b153c5dc7bbc-420-658.png",
      },
      {
        id: 3,
        src: "https://h5static.dewucdn.com/node-common/ab1af514-d1f1-8490-a0a6-72ac8e41a42b-306-480.png",
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);

  const getPosterList = (posterList: Poster[]) => {
    return posterList.map((row: Poster) => {
      return (
        <div className="w-[120px] h-[219px] relative mb-[20px]" key={row.id}>
          <img
            src={row.src}
            width="100%"
            height="100%"
            onClick={() => setShowModal(true)}
            alt="poster-image"
          />
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="main-wrapper">
        <div className="background">
          <div className="document">
            <div className="topBox"></div>
            <div className="flex justify-between">
              <div className="documentLeft">
                <div className="mt-[100px]">
                  <img
                    className="w-[423px] h-[96px]"
                    src="https://h5static.dewucdn.com/node-common/33daf7c1-1ffc-4895-0762-f31480fee2f8-1036-237.png"
                    alt="img"
                  />
                </div>
                <div className="mt-[52px]">
                  <img
                    className="w-[374px] h-[108px]"
                    src="https://cdn.poizon.com/node-common/782c53ec-c4e8-53dd-5d7c-63f841c0218f-715-216.png?x-oss-process=image/format,webp"
                    alt="img"
                  />
                </div>
              </div>
              <div className="carouselRight">
                <div className="w-[140px] h-[460px] pt-[80px] relative overflow-hidden">
                  <div className="posterRollUp">
                    {getPosterList(posterList.left)}
                  </div>
                </div>
                <div className="w-[140px] h-[460px] pt-[80px] relative overflow-hidden">
                  <div className="posterRollDown">
                    {getPosterList(posterList.center)}
                  </div>
                </div>
                <div className="w-[140px] h-[460px] pt-[80px] relative overflow-hidden">
                  <div className="posterRollUp">
                    {getPosterList(posterList.right)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal modalWasOpen={showModal} setModalWasOpen={setShowModal} />
    </Fragment>
  );
};

export default Content;
