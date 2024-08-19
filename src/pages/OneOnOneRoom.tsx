import { IoIosArrowBack } from 'react-icons/io';
import { IoIosMore } from 'react-icons/io';
import beggarProfileImage from '../assets/images/beggar_profile.jpg';

import { useNavigate } from 'react-router-dom';

import Type from '../components/Type';

const OneOnOneRoom = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/chattinglist');
  };

  const handleMoreClick = () => {
    navigate('/profile');
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
        <div className="w-[30px] h-[30px] bg-[#d1d1d1] rounded-full shrink-0 mr-[15px]" />
        <h1 className="font-9black text-[16px] text-black mr-[5px]">안지형</h1>
        <IoIosMore
          className="text-[18px] text-black ml-auto"
          onClick={handleMoreClick}
        />
      </div>
      <div className="w-full h-[0.5px] bg-[#aaa]" />
      <div className="fixed bottom-0 left-0 w-full">
        <Type />
      </div>
    </div>
  );
};

export default OneOnOneRoom;
