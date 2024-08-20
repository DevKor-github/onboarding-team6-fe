import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfileResponse } from '../api/types';
import { getUserProfile } from '../api/user';

const MyPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfileResponse | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setProfile(profileData);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    navigate('/editprofile');
  };

  const handleSettingClick = () => {
    navigate('/setting');
  };

  const handleAddExpenseClick = () => {
    navigate('/addexpense');
  };

  const handleAddIncomeClick = () => {
    navigate('/addincome');
  };

  const handleMoreClick = () => {
    navigate('/transactionlist');
  };

  return (
    <div className="bg-white flex flex-col items-center px-[20px]">
      <div className="w-[200px] h-[200px] bg-[#D9D9D9] rounded-full my-[30px]"></div>
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex items-center">
          <h1 className="text-[24px] text-black font-8extrabold mr-[6px]">
            프로필
          </h1>
          <MdEdit
            className="text-[24px] text-[#A9A9A9] cursor-pointer"
            onClick={handleEditClick}
          />
          <IoSettingsSharp
            className="text-[24px] text-[#A9A9A9] cursor-pointer ml-auto"
            onClick={handleSettingClick}
          />
        </div>
      </div>
      <div className="w-full flex flex-col bg-[#f1f1f1] rounded-[10px] mt-[5px] px-[15px] py-[8px]">
        <div className="flex w-full justify-between items-center my-[2px]">
          <h1 className="text-black text-[18px] font-9black">닉네임</h1>
          <h1 className="text-black text-[18px] font-4regular">
            {profile?.username}
          </h1>
        </div>
        <div className="flex w-full justify-between items-center my-[2px]">
          <h1 className="text-black text-[18px] font-9black">한줄 소개</h1>
          <h1 className="text-black text-[18px] font-4regular">
            {profile?.bio}
          </h1>
        </div>
        <div className="flex w-full justify-between items-center my-[2px]">
          <h1 className="text-black text-[18px] font-9black">잔고</h1>
          <h1 className="text-black text-[18px] font-4regular">50원</h1>
        </div>
      </div>
      <div className="w-full mt-[30px]">
        <h1 className="text-[24px] text-black text-left font-8extrabold">
          지출/수입 내역
        </h1>
      </div>
      <div className="w-full mt-[5px] mb-[5px] flex flex-row">
        <div
          className="bg-[#F8EDED] rounded-[10px] text-[#800000] text-center text-[18px] font-9black flex-grow py-[5px] mr-[4px]"
          onClick={handleAddExpenseClick}
        >
          - 지출 추가하기
        </div>
        <div
          className="bg-[#E7F0DC] rounded-[10px] text-[#00712D] text-center text-[18px] font-9black flex-grow py-[5px] ml-[4px]"
          onClick={handleAddIncomeClick}
        >
          + 수입 추가하기
        </div>
      </div>
      <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]">
        <div className="w-[18px] h-[18px] bg-[#00712D] rounded-full shrink-0 mt-[4px] mr-[10px]" />
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-9black text-[18px] text-black">알바비 입금</h1>
            <h1 className="font-4regular text-[18px] text-black">+200,000원</h1>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-4regular text-[12px] text-[#aaa]">
              2024.08.21
            </h1>
            <FaTrash className="text-[14px] text-[#aaa]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]">
        <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-9black text-[18px] text-black">택시</h1>
            <h1 className="font-4regular text-[18px] text-black">-20,000원</h1>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-4regular text-[12px] text-[#aaa]">
              2024.08.21
            </h1>
            <FaTrash className="text-[14px] text-[#aaa]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]">
        <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-9black text-[18px] text-black">마라엽떡</h1>
            <h1 className="font-4regular text-[18px] text-black">-20,000원</h1>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-4regular text-[12px] text-[#aaa]">
              2024.08.21
            </h1>
            <FaTrash className="text-[14px] text-[#aaa]" />
          </div>
        </div>
      </div>
      <button
        onClick={handleMoreClick}
        className="w-full flex bg-[#f1f1f1] rounded-[10px] py-[10px] my-[5px] justify-center items-center text-center font-7bold text-[18px] text-[#686D76] mt-[5px]"
      >
        더보기
      </button>
    </div>
  );
};

export default MyPage;
