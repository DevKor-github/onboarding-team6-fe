import { IoSearch } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import beggarProfileImage from '../assets/images/beggar_profile.jpg';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRoomList } from '../api/room';

import { RootState } from '../redux/store';
import { Room } from '../api/types';

const ChattingListPage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.userState.user);
  const [roomList, setRoomList] = useState<Room[]>([]);

  const fetchRoomList = async () => {
    try {
      const response = await getRoomList();
      console.log(response);
      setRoomList(response);
    } catch (error) {
      console.error('채팅방 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchRoomList();
  }, []);

  const handleBeggarRoomClick = (roomId: string) => {
    navigate('/beggarroom', { state: { roomId } });
  };

  const addRoomClick = () => {
    navigate('/searchchattingroom');
  };

  const filteredRoomList = roomList.filter((room) =>
    room.members.some((member) => member.id === userInfo?.id)
  );

  return (
    <div className="h-[100vh] bg-white flex flex-col items-center px-[20px]">
      <div className="w-full flex items-center bg-[#f1f1f1] rounded-[10px] px-[10px] py-[5px] my-[20px]">
        <IoSearch className="text-[18px] text-[#686D76] mr-[10px]" />
        <input
          type="text"
          placeholder="검색"
          className="font-7bold text-black text-[18px] bg-transparent border-none outline-none"
        />
      </div>
      {filteredRoomList.map((room) => (
        <div
          key={room.roomName}
          className="w-full flex flex-row items-center my-[10px]"
          onClick={() => handleBeggarRoomClick(room.id)}
        >
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
          <h1 className="font-9black text-[18px] text-black mr-[5px]">
            {room.roomName}
          </h1>
          <div className="mr-[5px] font-8extrabold text-[12px] text-black bg-[#DFD3C3] rounded-[10px] px-[8px] py-[4px]">
            오픈채팅방
          </div>
          <h1 className="font-6semibold text-[#A9A9A9]">{room.memberCount}</h1>
        </div>
      ))}
      <div
        onClick={addRoomClick}
        className="fixed w-[70px] h-[70px] flex items-center justify-center bottom-[30px] right-[30px] bg-[#686D76] text-white rounded-full shadow-lg cursor-pointer"
      >
        <IoIosAdd className="text-[48px]" />
      </div>
    </div>
  );
};

export default ChattingListPage;
