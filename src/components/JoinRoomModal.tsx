import { IoClose } from 'react-icons/io5';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { joinRoom } from '../api/room';
import { RootState } from '../redux/store';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomId: string;
}

const JoinRoomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  roomName,
  roomId,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState(roomName);
  const userInfo = useSelector((state: RootState) => state.userState.user);

  useEffect(() => {
    setName(roomName);
  }, []);

  const handleSubmit = async () => {
    if (!userInfo || !userInfo.username) return;

    try {
      await joinRoom(roomId, userInfo?.id);
      onClose();
      navigate('/beggarroom', { state: { roomId } });
    } catch (error) {
      console.error('채팅방 참가 중 오류 발생:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col w-2/3 relative bg-white p-[20px] rounded-[10px]">
        <IoClose className="text-black text-[18px] ml-auto" onClick={onClose} />
        <div className="flex flex-col items-center">
          <div className="mr-auto flex items-center">
            <h1 className="mr-[5px] px-2 py-1 text-black text-[18px] font-9black bg-[#DFD3C3] rounded-[10px] inline-block">
              {roomName}
            </h1>
            <h1 className="text-black text-[18px] font-7bold">에</h1>
          </div>
          <h1 className="mr-auto my-[5px] text-black text-[18px] font-7bold">
            입장하시겠습니까?
          </h1>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full flex bg-[#f1f1f1] justify-center items-center rounded-[10px] font-7bold text-[#686D76] text-[18px] p-2 mt-[10px]"
        >
          입장하기
        </button>
      </div>
    </div>
  );
};

export default JoinRoomModal;
