import { IoClose } from 'react-icons/io5';
import { FaToggleOn } from 'react-icons/fa6';
import { FaToggleOff } from 'react-icons/fa6';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionEditModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [toggleOn, setToggleOn] = useState(true);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col w-2/3 relative bg-white p-[20px] rounded-[10px]">
        <IoClose className="text-black text-[18px] ml-auto" onClick={onClose} />
        {toggleOn ? (
          <div className="flex items-center bg-[#F8EDED] rounded-[10px] w-full px-[15px] py-[8px] my-[10px]">
            <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mr-[5px] border border-[#fff]" />
            <h1 className="text-[#800000] text-[18px] font-9black">지출</h1>

            <FaToggleOn
              className="text-[30px] text-[#ccc] ml-auto"
              onClick={handleToggleClick}
            />
          </div>
        ) : (
          <div className="flex items-center bg-[#E7F0DC] rounded-[10px] w-full px-[15px] py-[8px] my-[10px]">
            <div className="w-[18px] h-[18px] bg-[#00712D] rounded-full shrink-0 mr-[5px] border border-[#fff]" />
            <h1 className="text-[#00712D] text-[18px] font-9black">수입</h1>

            <FaToggleOff
              className="text-[30px] text-[#ccc] ml-auto"
              onClick={handleToggleClick}
            />
          </div>
        )}
        <h1 className="text-black text-[18px] font-9black">간단한 설명</h1>
        <input
          type="text"
          defaultValue="간단한 설명"
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
        />
        <h1 className="text-black text-[18px] font-9black mt-[10px]">금액</h1>
        <input
          type="text"
          defaultValue="금액"
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
        />
        <h1 className="text-black text-[18px] font-9black mt-[10px]">날짜</h1>
        <input
          type="date"
          defaultValue="2024-01-01"
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
        />
        <button className="w-full flex bg-[#f1f1f1] justify-center items-center rounded-[10px] font-7bold text-[#686D76] text-[18px] p-2 mt-[10px]">
          저장하기
        </button>
      </div>
    </div>
  );
};

export default TransactionEditModal;
