import { IoClose } from 'react-icons/io5';
import { FaToggleOn } from 'react-icons/fa6';
import { FaToggleOff } from 'react-icons/fa6';

import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { History } from '../api/types';
import { editTransaction } from '../api/user';

interface ModalProps {
  isOpen: boolean;
  onClose: (refresh?: boolean) => void;
  transaction?: History;
}

const TransactionEditModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  transaction,
}) => {
  const [toggleOn, setToggleOn] = useState(transaction?.type === 'spend');
  const [type, setType] = useState('');
  const [memo, setMemo] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const userInfo = useSelector((state: RootState) => state.userState.user);

  useEffect(() => {
    setToggleOn(transaction?.type === 'spend');
    setType(transaction?.type || '');
    setMemo(transaction?.memo || '');
    setAmount(transaction?.amount.toString() || '');
    setDate(transaction?.timestamp.split('T')[0] || '');
  }, []);

  useEffect(() => {
    setToggleOn(transaction?.type === 'spend');
    setType(transaction?.type || '');
    setMemo(transaction?.memo || '');
    setAmount(transaction?.amount.toString() || '');
    setDate(transaction?.timestamp.split('T')[0] || '');
  }, [transaction]);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  const handleSubmit = async () => {
    if (!userInfo || !userInfo.username) {
      return;
    }

    const username = userInfo?.username;

    if (!transaction) {
      return;
    }

    const updatedType = toggleOn ? 'spend' : 'earn';

    try {
      const transactionData = { amount, memo, type: updatedType, date };
      console.log(updatedType);
      await editTransaction(username, transaction?._id, transactionData);
      onClose(true);
    } catch (error) {
      console.error('지출/수입 내역 추가 중 오류 발생:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col w-2/3 relative bg-white p-[20px] rounded-[10px]">
        <IoClose
          className="text-black text-[18px] ml-auto"
          onClick={() => onClose()}
        />
        {toggleOn ? (
          <div className="flex items-center bg-[#F8EDED] rounded-[10px] w-full px-[15px] py-[8px] my-[10px]">
            <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mr-[5px] border border-[#fff]" />
            <h1 className="text-[#800000] text-[18px] font-9black">지출</h1>

            <FaToggleOn
              className="text-[30px] text-[#ccc] ml-auto"
              onClick={handleToggleClick}
            />
          </div>
        ) : (
          <div className="flex items-center bg-[#E7F0DC] rounded-[10px] w-full px-[15px] py-[8px] my-[10px]">
            <div className="w-[18px] h-[18px] bg-[#00712D] rounded-full shrink-0 mr-[5px] border border-[#fff]" />
            <h1 className="text-[#00712D] text-[18px] font-9black">수입</h1>

            <FaToggleOff
              className="text-[30px] text-[#ccc] ml-auto"
              onClick={handleToggleClick}
            />
          </div>
        )}
        <h1 className="text-black text-[18px] font-9black">간단한 설명</h1>
        <input
          type="text"
          defaultValue={transaction?.memo}
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
        />
        <h1 className="text-black text-[18px] font-9black mt-[10px]">금액</h1>
        <input
          type="text"
          defaultValue={`${transaction?.amount.toString()}`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
        />
        <h1 className="text-black text-[18px] font-9black mt-[10px]">날짜</h1>
        <input
          type="date"
          defaultValue={transaction?.timestamp.split('T')[0]}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
        />
        <button
          onClick={handleSubmit}
          className="w-full flex bg-[#f1f1f1] justify-center items-center rounded-[10px] font-7bold text-[#686D76] text-[18px] p-2 mt-[10px]"
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default TransactionEditModal;
