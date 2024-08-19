import { FaRegFaceSmile } from 'react-icons/fa6';
import { LuSendHorizonal } from 'react-icons/lu';

const Type = () => {
  return (
    <div className="border-t border-solid border-[#ccc] h-[80px] px-[20px] pb-[20px] flex items-center">
      <FaRegFaceSmile className="text-[#686D76] text-[18px] mr-[10px]" />
      <div className="w-full flex items-center bg-[#f1f1f1] rounded-[20px] px-[15px] py-[5px]">
        <input
          placeholder="start typing..."
          className="bg-transparent border-none outline-none text-[18px] text-black font-4regular"
        />
        <LuSendHorizonal className="text-[#686D76] text-[18px] ml-auto" />
      </div>
    </div>
  );
};

export default Type;
