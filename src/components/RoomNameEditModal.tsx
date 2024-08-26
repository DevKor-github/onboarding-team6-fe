import { IoClose } from 'react-icons/io5';

import { useState, useEffect } from 'react';

import { editRoomName } from '../api/room';

interface ModalProps {
  isOpen: boolean;
  onClose: (refresh?: boolean) => void;
  roomName: string;
  roomId: string;
}

const RoomNameEditModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  roomName,
  roomId,
}) => {
  const [name, setName] = useState(roomName);

  useEffect(() => {
    setName(roomName);
    console.log(roomId);
  }, []);

  const handleSubmit = async () => {
    try {
      await editRoomName(roomId, name);
      onClose(true);
    } catch (error) {
      console.error('채팅방 이름 수정 중 오류 발생:', error);
    }
  };

  const handleClose = (refresh?: boolean) => {
    onClose(refresh);
    setName(roomName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col w-2/3 relative bg-white p-[20px] rounded-[10px]">
        <IoClose
          className="text-black text-[18px] ml-auto"
          onClick={() => handleClose()}
        />
        <h1 className="text-black text-[18px] font-9black">이름 수정하기</h1>
        <input
          type="text"
          placeholder="거지방 이름"
          defaultValue={roomName}
          className="text-black text-[18px] font-4regular border-none outline-none bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] mt-[5px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default RoomNameEditModal;
