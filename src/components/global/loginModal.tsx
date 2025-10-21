import { Modal } from "antd";

interface LoginModalProps {
  modalWasOpen: boolean;
  setModalWasOpen: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={props.modalWasOpen}
      onCancel={() => props.setModalWasOpen(false)}
      className="rounded-[4px]"
      footer={false}
    >
      <div className="flex flex-col justify-center items-center py-[48px]">
        <div className="mt-[8px]">
          <img
            className="w-[96px] h-[77px]"
            src="https://h5static.dewucdn.com/node-common/cf08bb8c-a1ed-99e4-91d3-8e5a4e169b35-294-232.png"
            alt="img"
            loading="lazy"
          />
        </div>
        <div className="mt-[8px]">
          <img
            className="w-[246px] h-[48px]"
            src="https://h5static.dewucdn.com/node-common/0bb9117e-08f4-8e83-5886-acccdde7cb7d-739-144.png"
            alt="img"
            loading="lazy"
          />
        </div>
        <div className="w-[132px] h-[132px] mt-6">
          <img
            className="w-[132px] h-[132px]"
            src="https://cdn.poizon.com/node-common/5d50c2f1-f8e9-4c95-4561-f64b734b3fb3-500-500.png?x-oss-process=image/format,webp"
            alt="img"
            loading="lazy"
          />
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
