import { IoClose } from 'react-icons/io5';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { History } from '../api/types';
import { createRoom, getRoomList } from '../api/room';

interface ModalProps {
  isOpen: boolean;
  onClose: (refresh?: boolean) => void;
  transaction?: History;
}

const CreateRoomModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const userInfo = useSelector((state: RootState) => state.userState.user);
  const [roomName, setRoomName] = useState('');

  const handleSubmit = async () => {
    if (!userInfo || !userInfo.username) {
      return;
    }

    const userId = userInfo?.id;

    try {
      const response = await createRoom(roomName, userId);
      console.log(response);
      setRoomName('');
      onClose(true);
    } catch (error) {
      console.error('지출/수입 내역 추가 중 오류 발생:', error);
    }
  };

  const handleClose = (refresh?: boolean) => {
    setRoomName(''); // 모달 닫을 때 입력창 초기화
    onClose(refresh);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col w-2/3 relative bg-white p-[20px] rounded-[10px]">
        <IoClose
          className="text-black text-[18px] ml-auto"
          onClick={() => handleClose()}
        />
        <input
          type="text"
          placeholder="거지방 이름"
          className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mt-[10px] mb-[5px] text-black"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full flex bg-[#f1f1f1] justify-center items-center rounded-[10px] font-7bold text-[#686D76] text-[18px] p-2 mt-[10px]"
        >
          생성하기
        </button>
      </div>
    </div>
  );
};

export default CreateRoomModal;
