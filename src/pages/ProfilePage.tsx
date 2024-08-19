import { IoIosArrowBack } from 'react-icons/io';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMoreClick = () => {
    navigate('/transactionlist');
  };

  const handleChatClick = () => {
    navigate('/oneononeroom');
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="w-full flex flex-row items-center px-[20px] my-[10px]">
        <h1 className="font-9black text-[18px] text-black mr-[5px]">
          안지형님의 프로필
        </h1>
      </div>
      <div className="w-full h-[0.5px] bg-[#aaa]" />
      <div className="flex flex-col items-center px-[20px]">
        <div className="w-[200px] h-[200px] bg-[#D9D9D9] rounded-full my-[30px]"></div>
        <div className="w-full flex flex-col bg-[#f1f1f1] rounded-[10px] mt-[5px] px-[15px] py-[8px]">
          <div className="flex w-full justify-between items-center my-[2px]">
            <h1 className="text-black text-[18px] font-9black">닉네임</h1>
            <h1 className="text-black text-[18px] font-4regular">안지형</h1>
          </div>
          <div className="flex w-full justify-between items-center my-[2px]">
            <h1 className="text-black text-[18px] font-9black">한줄 소개</h1>
            <h1 className="text-black text-[18px] font-4regular">
              절약만이 살길이다
            </h1>
          </div>
          <div className="flex w-full justify-between items-center my-[2px]">
            <h1 className="text-black text-[18px] font-9black">잔고</h1>
            <h1 className="text-black text-[18px] font-4regular">0원</h1>
          </div>
        </div>
        <button
          onClick={handleChatClick}
          className="w-full flex bg-[#8C6A5D] rounded-[10px] py-[10px] mt-[10px] justify-center items-center text-center font-6semibold text-[18px] text-white"
        >
          <IoChatboxEllipsesOutline className="mr-[10px]" />
          일대일 채팅방으로 이동
        </button>
        <div className="w-full mt-[30px]">
          <h1 className="text-[24px] text-black text-left font-8extrabold">
            지출/수입 내역
          </h1>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]">
          <div className="w-[18px] h-[18px] bg-[#00712D] rounded-full shrink-0 mt-[4px] mr-[10px]" />
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-9black text-[18px] text-black">
                알바비 입금
              </h1>
              <h1 className="font-4regular text-[18px] text-black">
                +200,000원
              </h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-4regular text-[12px] text-[#aaa]">
                2024.08.21
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]">
          <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-9black text-[18px] text-black">택시</h1>
              <h1 className="font-4regular text-[18px] text-black">
                -20,000원
              </h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-4regular text-[12px] text-[#aaa]">
                2024.08.21
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]">
          <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-9black text-[18px] text-black">마라엽떡</h1>
              <h1 className="font-4regular text-[18px] text-black">
                -20,000원
              </h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-4regular text-[12px] text-[#aaa]">
                2024.08.21
              </h1>
            </div>
          </div>
        </div>
        <button
          onClick={handleMoreClick}
          className="w-full flex bg-[#f1f1f1] rounded-[10px] py-[10px] mt-[5px] mb-[20px] justify-center items-center text-center font-7bold text-[18px] text-[#686D76] mt-[5px]"
        >
          더보기
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
