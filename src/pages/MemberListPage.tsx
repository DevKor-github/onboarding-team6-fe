import { IoIosArrowBack } from 'react-icons/io';
import { FaCrown } from 'react-icons/fa6';

import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getRoomById } from '../api/room';
import { Member, Room } from '../api/types';
import { RootState } from '../redux/store';

const MemberListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roomId } = location.state || {};
  const [room, setRoom] = useState<Room>({
    id: '',
    createdAt: '',
    memberCount: 0,
    members: [],
    ownerId: '',
    roomName: '',
  });
  const userInfo = useSelector((state: RootState) => state.userState.user);

  const fetchRoom = async () => {
    try {
      const response = await getRoomById(roomId);
      setRoom(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  const handleBackClick = () => {
    navigate('/beggarroom', { state: { roomId } });
  };

  const handleMemberClick = (
    memberId: string,
    memberUsername: string,
    roomId: string
  ) => {
    if (memberId === userInfo?.id) {
      navigate('/my');
    } else {
      navigate('/profile', { state: { memberUsername, roomId } });
    }
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
        <h1 className="text-[18px] text-black font-9black">대화상대</h1>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="w-full flex flex-col px-[20px]">
        {room.members.map((member) => (
          <div
            key={member.id}
            className="w-full flex flex-row items-center mt-[20px]"
            onClick={() =>
              handleMemberClick(member.id, member.username, room.id)
            }
          >
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
            {userInfo?.id === member.id && (
              <h1 className="bg-[#686D76] rounded-[20px] text-white mr-[5px] font-6semibold px-[5px] text-[12px]">
                나
              </h1>
            )}
            <h1 className="font-9black text-[18px] text-black mr-[5px]">
              {member.username}
            </h1>
            {room.ownerId === member.id && (
              <FaCrown className="text-[#FFD700] text-[18px] ml-[5px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberListPage;
