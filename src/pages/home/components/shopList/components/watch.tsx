import { type GoodType } from "../../../types/good";
import Good from "./good";

const watch: React.FC = () => {
  const goodList: GoodType[] = [
   
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {goodList.map((good, index) => (
        <div className="mt-[32px mr-[32px] no-underline" key={index}>
          <Good {...good} />
        </div>
      ))}
    </div>
  );
};

export default watch;
