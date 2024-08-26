import { IoIosArrowBack } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { HiLightningBolt } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CreateRoomModal from '../components/CreateRoomModal';
import { getRoomList } from '../api/room';
import { Room } from '../api/types';
import JoinRoomModal from '../components/JoinRoomModal';
import { RootState } from '../redux/store';

const SearchChattingRoomPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userInfo = useSelector((state: RootState) => state.userState.user);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [roomList, setRoomList] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<{
    roomId: string;
    roomName: string;
  } | null>(null);

  const fetchRoomList = async () => {
    try {
      const response = await getRoomList();
      setRoomList(response);
    } catch (error) {
      console.error('채팅방 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchRoomList();
  }, []);

  const handleBackClick = () => {
    navigate('/chattinglist');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenJoin = (roomId: string, roomName: string) => {
    setSelectedRoom({ roomId, roomName });
    setIsJoinOpen(true);
  };

  const handleCloseJoin = () => {
    setIsJoinOpen(false);
    setSelectedRoom(null);
  };

  const handleBeggarRoomClick = (roomId: string, roomName: string) => {
    const room = roomList.find((r) => r.id === roomId);

    if (room && room.members.some((member) => member.id === userInfo?.id)) {
      // 사용자가 이미 참여 중인 방인 경우 바로 이동
      navigate('/beggarroom', { state: { roomId } });
    } else {
      // 참여하지 않은 방이면 참여 모달 열기
      handleOpenJoin(roomId, roomName);
    }
  };

  const handleCloseModal = (refresh?: boolean) => {
    setIsModalOpen(false);
    if (refresh) {
      fetchRoomList();
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
          <h1 className="text-[18px] text-black font-9black">거지방 찾기</h1>
        </div>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="flex flex-col items-center px-[20px]">
        <div
          onClick={handleOpenModal}
          className="text-black flex items-center justify-center font-7bold text-[18px] bg-[#DFD3C3] w-full rounded-[10px] mt-[20px] mb-[10px] text-center px-[10px] py-[5px]"
        >
          <HiLightningBolt className="mr-[5px] text-[#FFAF00]" />
          새로운 거지방 생성
        </div>
        <div className="w-full flex items-center bg-[#f1f1f1] rounded-[10px] px-[10px] py-[5px] my-[10px]">
          <IoSearch className="text-[18px] text-[#686D76] mr-[10px]" />
          <input
            type="text"
            placeholder="검색"
            className="font-7bold text-black text-[18px] bg-transparent border-none outline-none"
          />
        </div>
        {roomList.map((room) => (
          <div
            key={room.roomName}
            className="w-full flex flex-row items-center my-[10px]"
            onClick={() => handleBeggarRoomClick(room.id, room.roomName)}
          >
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
            <h1 className="font-9black text-[18px] text-black mr-[5px]">
              {room.roomName}
            </h1>
            <div className="mr-[5px] font-8extrabold text-[12px] text-black bg-[#DFD3C3] rounded-[10px] px-[8px] py-[4px]">
              오픈채팅방
            </div>
            <h1 className="font-6semibold text-[#A9A9A9]">
              {room.memberCount}
            </h1>
          </div>
        ))}
      </div>
      <CreateRoomModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {selectedRoom && (
        <JoinRoomModal
          isOpen={isJoinOpen}
          onClose={handleCloseJoin}
          roomName={selectedRoom.roomName}
          roomId={selectedRoom.roomId}
        />
      )}
    </div>
  );
};

export default SearchChattingRoomPage;
