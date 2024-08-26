import { FaRegFaceSmile } from 'react-icons/fa6';
import { LuSendHorizonal } from 'react-icons/lu';

// Props 타입 정의
interface TypeProps {
  messageInput: string;
  setMessageInput: (input: string) => void;
  handleSendMessage: () => void;
}

const Type: React.FC<TypeProps> = ({
  messageInput,
  setMessageInput,
  handleSendMessage,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="border-t border-solid border-[#ccc] h-[80px] px-[20px] pb-[20px] flex items-center bg-white">
      <FaRegFaceSmile className="text-[#686D76] text-[18px] mr-[10px]" />
      <div className="w-full flex items-center bg-[#f1f1f1] rounded-[20px] px-[15px] py-[5px]">
        <input
          placeholder="start typing..."
          value={messageInput}
          onKeyPress={handleKeyPress}
          onChange={(e) => setMessageInput(e.target.value)}
          className="bg-transparent border-none outline-none text-[18px] text-black font-4regular"
        />
        <LuSendHorizonal
          className="text-[#686D76] text-[18px] ml-auto cursor-pointer"
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Type;
