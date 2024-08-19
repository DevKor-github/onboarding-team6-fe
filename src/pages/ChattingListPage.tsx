import { IoSearch } from 'react-icons/io5';
import beggarProfileImage from '../assets/images/beggar_profile.jpg';
import { useNavigate } from 'react-router-dom';

const ChattingListPage = () => {
  const navigate = useNavigate();

  const handleBeggarRoomClick = () => {
    navigate('/beggarroom');
  };

  const handleOneOnOneRoomClick = () => {
    navigate('/oneononeroom');
  };

  return (
    <div className="h-[100vh] bg-white flex flex-col items-center px-[20px]">
      <div
        onClick={handleBeggarRoomClick}
        className="w-full flex flex-row items-center my-[20px]"
      >
        <img
          src={beggarProfileImage}
          className="w-[50px] h-[50px] bg-[#8C6A5D] rounded-full shrink-0 mr-[20px] object-cover"
        />
        <h1 className="font-9black text-[18px] text-black mr-[5px]">거지방</h1>
        <div className="font-8extrabold text-[12px] text-black bg-[#DFD3C3] rounded-[10px] px-[8px] py-[4px]">
          오픈채팅방
        </div>
        <h1 className="font-4regular text-[18px] text-[#686D76] ml-auto">
          오후 8:00
        </h1>
      </div>
      <div className="w-full flex items-center bg-[#f1f1f1] rounded-[10px] px-[10px] py-[5px]">
        <IoSearch className="text-[18px] text-[#686D76] mr-[10px]" />
        <input
          type="text"
          placeholder="검색"
          className="font-7bold text-black text-[18px] bg-transparent border-none outline-none"
        />
      </div>
      <div
        className="w-full flex flex-row items-center mt-[20px]"
        onClick={handleOneOnOneRoomClick}
      >
        <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
        <h1 className="font-9black text-[18px] text-black mr-[5px]">강민선</h1>
        <h1 className="font-4regular text-[18px] text-[#686D76] ml-auto">
          오후 8:00
        </h1>
      </div>
      <div
        className="w-full flex flex-row items-center mt-[20px]"
        onClick={handleOneOnOneRoomClick}
      >
        <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
        <h1 className="font-9black text-[18px] text-black mr-[5px]">김예락</h1>
        <h1 className="font-4regular text-[18px] text-[#686D76] ml-auto">
          오후 8:00
        </h1>
      </div>
      <div className="w-full flex flex-row items-center mt-[20px]">
        <div
          className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]"
          onClick={handleOneOnOneRoomClick}
        />
        <h1 className="font-9black text-[18px] text-black mr-[5px]">안지형</h1>
        <h1 className="font-4regular text-[18px] text-[#686D76] ml-auto">
          오후 8:00
        </h1>
      </div>
    </div>
  );
};

export default ChattingListPage;
