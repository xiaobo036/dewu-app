import "@/styles/community/content.scss";

const Content: React.FC = () => {
  return (
    <div className="w-[1090px]" style={{ margin: "80px auto" }}>
      <p className="text-[#2b2c3c] text-2xl font-medium mb-[30px]">热门动态</p>
      <div
        style={{
          minHeight: "2400px",
          transition: "min-height 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default Content;
