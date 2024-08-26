import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserProfileResponse, History } from '../api/types';
import {
  getUserProfile,
  getBalance,
  getTransactions,
  deleteTransaction,
} from '../api/user';
import { RootState } from '../redux/store';
import TransactionEditModal from '../components/TransactionEditModal';

const MyPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfileResponse | null>(null);
  const [balance, setBalance] = useState('');
  const [history, setHistory] = useState<History[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<History | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userInfo = useSelector((state: RootState) => state.userState.user);

  const handleOpenModal = (transaction: History) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = (refresh?: boolean) => {
    setIsModalOpen(false);
    if (refresh) {
      fetchTransaction(); // 새로고침
    }
  };

  const handleTrashClick = async (id: string) => {
    try {
      if (!userInfo || !userInfo.username) return;

      await deleteTransaction(userInfo.username, id);

      setHistory((prevHistory) =>
        prevHistory.filter((transaction) => transaction._id !== id)
      );
    } catch (error) {
      console.error('거래 내역 삭제 중 오류 발생:', error);
    }
  };

  const fetchTransaction = async () => {
    if (!userInfo || !userInfo.username) return;

    try {
      const response = await getTransactions(userInfo.username);

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
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setProfile(profileData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
    fetchTransaction();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!userInfo || !userInfo.username) return;

      try {
        const balance = await getBalance(userInfo.username);
        setBalance(balance.total);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBalance();
  }, [history]);

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
    if (userInfo && userInfo.username) {
      navigate('/transactionlist', { state: { username: userInfo.username } });
    }
  };

  return (
    <div className="bg-white h-[100vh] flex flex-col items-center px-[20px]">
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
          <h1 className="text-black text-[18px] font-4regular">{balance}원</h1>
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
                <div className="flex ml-auto items-center">
                  <MdEdit
                    className="text-[16px] text-[#aaa]"
                    onClick={() => handleOpenModal(transaction)}
                  />
                  <FaTrash
                    className="text-[14px] text-[#aaa] ml-[10px]"
                    onClick={() => handleTrashClick(transaction._id)}
                  />
                </div>
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

      <TransactionEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction!}
      />
    </div>
  );
};

export default MyPage;
