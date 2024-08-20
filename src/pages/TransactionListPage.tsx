import { MdEdit } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa6';
import { TbArrowsSort } from 'react-icons/tb';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionEditModal from '../components/TransactionEditModal';

const TransactionListPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackClick = () => {
    navigate('/my');
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
      <div className="w-full px-[20px]">
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[10px]">
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
              <div className="flex ml-auto items-center">
                <MdEdit
                  className="text-[16px] text-[#aaa]"
                  onClick={handleOpenModal}
                />
                <FaTrash className="text-[14px] text-[#aaa] ml-[10px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[10px]">
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
              <div className="flex ml-auto items-center">
                <MdEdit
                  className="text-[16px] text-[#aaa]"
                  onClick={handleOpenModal}
                />
                <FaTrash className="text-[14px] text-[#aaa] ml-[10px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[10px]">
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
              <div className="flex ml-auto items-center">
                <MdEdit
                  className="text-[16px] text-[#aaa]"
                  onClick={handleOpenModal}
                />
                <FaTrash className="text-[14px] text-[#aaa] ml-[10px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[10px]">
          <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-9black text-[18px] text-black">아이스크림</h1>
              <h1 className="font-4regular text-[18px] text-black">
                -20,000원
              </h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-4regular text-[12px] text-[#aaa]">
                2024.08.08
              </h1>
              <div className="flex ml-auto items-center">
                <MdEdit
                  className="text-[16px] text-[#aaa]"
                  onClick={handleOpenModal}
                />
                <FaTrash className="text-[14px] text-[#aaa] ml-[10px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#f1f1f1] rounded-[10px] px-[15px] py-[10px] my-[10px]">
          <div className="w-[18px] h-[18px] bg-[#800000] rounded-full shrink-0 mt-[4px] mr-[10px]" />
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-9black text-[18px] text-black">젤리</h1>
              <h1 className="font-4regular text-[18px] text-black">
                -20,000원
              </h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-4regular text-[12px] text-[#aaa]">
                2024.08.01
              </h1>
              <div className="flex ml-auto items-center">
                <MdEdit
                  className="text-[16px] text-[#aaa]"
                  onClick={handleOpenModal}
                />
                <FaTrash className="text-[14px] text-[#aaa] ml-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionEditModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TransactionListPage;
