import { IoIosArrowBack } from 'react-icons/io';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMemberProfile, getBalance, getTransactions } from '../api/user';
import { UserProfileResponse, History } from '../api/types';
import { User } from '../redux/userTypes';

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { memberUsername, roomId } = location.state || {};
  const [profile, setProfile] = useState<UserProfileResponse>({
    username: '',
    profilePicture: '',
    bio: '',
  });
  const [balance, setBalance] = useState('');
  const [history, setHistory] = useState<History[]>([]);

  const fetchMemberProfile = async () => {
    try {
      const response = await getMemberProfile(memberUsername);
      setProfile(response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMemberBalance = async () => {
    try {
      const response = await getBalance(memberUsername);
      setBalance(response.total);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await getTransactions(memberUsername);

      const sortedHistory = response.history.sort((a: History, b: History) => {
        return (
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      });

      setHistory(sortedHistory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMemberProfile();
    fetchMemberBalance();
    fetchHistory();
  }, []);

  const handleBackClick = () => {
    navigate('/memberlist', { state: { roomId } });
  };

  const handleMoreClick = () => {
    navigate('/transactionlist2', {
      state: { username: memberUsername, roomId: roomId },
    });
  };

  const handleChatClick = () => {
    navigate('/oneononeroom');
  };

  return (
    <div className="bg-white h-[120vh] flex flex-col">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="w-full flex flex-row items-center px-[20px] my-[10px]">
        <h1 className="font-9black text-[18px] text-black mr-[5px]">
          {profile.username}님의 프로필
        </h1>
      </div>
      <div className="w-full h-[0.5px] bg-[#aaa]" />
      <div className="flex flex-col items-center px-[20px]">
        <div className="w-[200px] h-[200px] bg-[#D9D9D9] rounded-full my-[30px]"></div>
        <div className="w-full flex flex-col bg-[#f1f1f1] rounded-[10px] mt-[5px] px-[15px] py-[8px]">
          <div className="flex w-full justify-between items-center my-[2px]">
            <h1 className="text-black text-[18px] font-9black">닉네임</h1>
            <h1 className="text-black text-[18px] font-4regular">
              {profile.username}
            </h1>
          </div>
          <div className="flex w-full justify-between items-center my-[2px]">
            <h1 className="text-black text-[18px] font-9black">한줄 소개</h1>
            <h1 className="text-black text-[18px] font-4regular">
              {profile.bio}
            </h1>
          </div>
          <div className="flex w-full justify-between items-center my-[2px]">
            <h1 className="text-black text-[18px] font-9black">잔고</h1>
            <h1 className="text-black text-[18px] font-4regular">{balance}</h1>
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
        {history.length === 0 ? (
          <div className="w-full mt-[20px]">
            <h1 className="text-[18px] text-[#686D76] text-center font-6semibold">
              지출/수입 내역이 없습니다
            </h1>
          </div>
        ) : (
          history.slice(0, 3).map((transaction) => (
            <div
              key={transaction._id}
              className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[5px]"
            >
              <div
                className={`w-[18px] h-[18px] rounded-full shrink-0 mt-[4px] mr-[10px] ${
                  transaction.type === 'spend' ? 'bg-[#800000]' : 'bg-[#00712D]'
                }`}
              />
              <div className="flex flex-col w-full">
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-9black text-[18px] text-black">
                    {transaction.memo}
                  </h1>
                  <h1 className="font-4regular text-[18px] text-black">
                    {transaction.type === 'spend'
                      ? `-${transaction.amount}`
                      : `+${transaction.amount}`}
                    원
                  </h1>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-4regular text-[12px] text-[#aaa]">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </h1>
                </div>
              </div>
            </div>
          ))
        )}

        {history.length > 3 && (
          <button
            onClick={handleMoreClick}
            className="w-full flex bg-[#f1f1f1] rounded-[10px] py-[10px] mt-[5px] mb-[30px] justify-center items-center text-center font-7bold text-[18px] text-[#686D76] mt-[5px]"
          >
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
