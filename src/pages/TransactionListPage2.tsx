import { MdEdit } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa6';
import { TbArrowsSort } from 'react-icons/tb';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { History } from '../api/types';
import { getTransactions, deleteTransaction } from '../api/user';
import TransactionEditModal from '../components/TransactionEditModal';
import { RootState } from '../redux/store';

const TransactionListPage2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, roomId } = location.state || {};
  const [history, setHistory] = useState<History[]>([]);
  const userInfo = useSelector((state: RootState) => state.userState.user);

  const fetchTransaction = async () => {
    if (!username) return;

    try {
      const response = await getTransactions(username);
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
    fetchTransaction();
  }, []);

  const handleBackClick = () => {
    navigate('/profile', {
      state: { memberUsername: username, roomId: roomId },
    });
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
        <div className="flex flex-row justify-center">
          <h1 className="text-[18px] text-black font-9black">지출/수입 내역</h1>
        </div>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="w-full px-[20px] flex items-center justify-end my-[10px]">
        <TbArrowsSort className="text-[#aaa] text-[18px] mr-[5px]" />
        <h1 className="text-[#aaa] text-[18px] font-6semibold">최신순</h1>
      </div>
      <div className="w-full flex flex-col px-[20px]">
        {history.map((transaction) => (
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
        ))}
      </div>
    </div>
  );
};

export default TransactionListPage2;
