import { IoIosArrowBack } from 'react-icons/io';
import { IoIosMore } from 'react-icons/io';
import beggarProfileImage from '../assets/images/beggar_profile.jpg';

import { useNavigate } from 'react-router-dom';

import Type from '../components/Type';

const BeggarRoom = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/chattinglist');
  };

  const handleListClick = () => {
    navigate('/memberlist');
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="w-full flex flex-row items-center px-[20px] my-[10px]">
        <img
          src={beggarProfileImage}
          className="w-[30px] h-[30px] bg-[#8C6A5D] rounded-full shrink-0 mr-[15px] object-cover"
        />
        <h1 className="font-9black text-[16px] text-black mr-[5px]">거지방</h1>
        <div className="font-8extrabold text-[12px] text-black bg-[#DFD3C3] rounded-[10px] px-[8px] py-[4px]">
          오픈채팅방
        </div>
        <IoIosMore
          className="text-[18px] text-black ml-auto"
          onClick={handleListClick}
        />
      </div>
      <div className="w-full h-[0.5px] bg-[#aaa]" />
      <div className="fixed bottom-0 left-0 w-full">
        <Type />
      </div>
    </div>
  );
};

export default BeggarRoom;
