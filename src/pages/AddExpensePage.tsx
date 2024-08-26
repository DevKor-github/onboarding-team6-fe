import { IoIosArrowBack } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { addTransaction } from '../api/user';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const AddExpensePage = () => {
  const navigate = useNavigate();
  const [memo, setMemo] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const type = 'spend';

  const userInfo = useSelector((state: RootState) => state.userState.user);

  const handleBackClick = () => {
    navigate('/my');
  };

  const handleSubmit = async () => {
    if (!userInfo || !userInfo.username) return;
    const username = userInfo?.username;
    try {
      const transactionData = { amount, memo, type, date };
      await addTransaction(username, transactionData);
      navigate('/my');
    } catch (error) {
      console.error('지출/수입 내역 추가 중 오류 발생:', error);
    }
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
        <div className="flex flex-row justify-center">
          <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
          <h1 className="text-[18px] text-black font-9black">지출 추가하기</h1>
        </div>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="flex flex-col items-center px-[20px]">
        <div className="w-[150px] h-[150px] bg-[#F8EDED] rounded-full my-[50px] text-[100px] flex justify-center items-center shadow-lg pr-[5px]">
          💸
        </div>
        <div className="w-full flex bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] items-start mb-[10px]">
          <input
            type="text"
            placeholder="간단한 설명"
            className="text-black text-[18px] font-4regular flex-grow bg-transparent border-none outline-none resize-none overflow-hidden"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
        <div className="w-full flex bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] items-start mb-[10px]">
          <input
            type="text"
            placeholder="금액"
            className="text-black text-[18px] font-4regular flex-grow bg-transparent border-none outline-none resize-none overflow-hidden"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="w-full flex bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] items-start mb-[10px]">
          <input
            type="date"
            placeholder="날짜"
            className="text-black text-[18px] font-4regular flex-grow bg-transparent border-none outline-none resize-none overflow-hidden"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full flex bg-[#8C6A5D] justify-center items-center rounded-[10px] font-7bold text-white text-[18px] p-2"
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default AddExpensePage;
