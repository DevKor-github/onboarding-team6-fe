import { IoIosArrowBack } from 'react-icons/io';
import { IoIosMore } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';
import { MdOutlineLogout } from 'react-icons/md';
import beggarProfileImage from '../assets/images/beggar_profile.jpg';

import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Type from '../components/Type';
import { getRoomById, deleteRoom } from '../api/room';
import { Member, Room } from '../api/types';
import { RootState } from '../redux/store';
import RoomNameEditModal from '../components/RoomNameEditModal';
import LeaveRoomModal from '../components/LeaveRoomModal';

const BeggarRoom = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<
    { id: number; text: string; timestamp: string }[]
  >([]);
  const [messageInput, setMessageInput] = useState('');

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

  useEffect(() => {
    // 메시지 영역이 업데이트될 때마다 스크롤을 가장 아래로 유지
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleBackClick = () => {
    navigate('/chattinglist');
  };

  const handleListClick = () => {
    navigate('/memberlist', { state: { roomId } });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (refresh?: boolean) => {
    setIsModalOpen(false);
    if (refresh) {
      fetchRoom();
    }
  };

  const handleOpenLeave = () => {
    setIsLeaveOpen(true);
  };

  const handleCloseLeave = () => {
    setIsLeaveOpen(false);
  };

  const handleDeleteClick = async () => {
    try {
      await deleteRoom(room.id);
      navigate('/searchchattingroom');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: messageInput,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div className="min-h-[100vh] bg-white flex-grow">
      <div className="bg-white fixed top-0 left-0 w-full z-10">
        <div className="h-[50px] flex justify-between items-center px-[20px]">
          <IoIosArrowBack
            className="text-[24px] text-black"
            onClick={handleBackClick}
          />
          {userInfo?.id === room.ownerId ? (
            <div className="flex items-center">
              <MdEdit
                onClick={handleOpenModal}
                className="text-[18px] text-[#aaa] mr-[10px]"
              />
              <FaTrash
                onClick={handleDeleteClick}
                className="text-[18px] text-[#aaa]"
              />
            </div>
          ) : (
            <MdOutlineLogout
              onClick={handleOpenLeave}
              className="text-[18px] text-[#aaa]"
            />
          )}
        </div>
        <div className="h-[10px] bg-[#f1f1f1]" />
        <div className="w-full flex flex-row items-center px-[20px] my-[10px]">
          <img
            src={beggarProfileImage}
            className="w-[30px] h-[30px] bg-[#8C6A5D] rounded-full shrink-0 mr-[15px] object-cover"
          />
          <h1 className="font-9black text-[16px] text-black mr-[5px]">
            {room.roomName}
          </h1>
          <div className="font-8extrabold text-[12px] mr-[5px] text-black bg-[#DFD3C3] rounded-[10px] px-[8px] py-[4px]">
            오픈채팅방
          </div>
          <h1 className="font-6semibold text-[#A9A9A9]">{room.memberCount}</h1>
          <IoIosMore
            className="text-[18px] text-black ml-auto"
            onClick={handleListClick}
          />
        </div>
        <div className="w-full h-[0.5px] bg-[#aaa]" />
      </div>

      {/* 메시지 표시 영역 */}
      <div className="flex-1 overflow-y-auto p-[20px] pt-[70px] pb-[200px] flex flex-col">
        {messages.map((message, index) => {
          // 다음 메시지의 타임스탬프와 비교 (마지막 메시지인 경우 항상 타임스탬프 표시)
          const isLastInGroup =
            index === messages.length - 1 ||
            messages[index + 1].timestamp !== message.timestamp;

          const isFirstInGroup =
            index === 0 || messages[index - 1].timestamp !== message.timestamp;

          return (
            <div
              key={message.id}
              className="w-full flex flex-col mb-[10px] items-end"
            >
              <div className="flex items-end justify-end max-w-[80%]">
                <div
                  className={`mr-[5px] whitespace-nowrap mt-auto text-[#aaa] text-[12px] font-5medium ${
                    isLastInGroup ? '' : 'opacity-0'
                  }`}
                >
                  {message.timestamp}
                </div>
                <div className="relative">
                  <div
                    className={`bg-[#e4e6eb] px-[15px] py-[5px] text-right ${
                      isFirstInGroup
                        ? 'rounded-[15px] rounded-tr-[5px]'
                        : 'rounded-[15px]'
                    }`}
                  >
                    <p className="text-black text-[18px] font-6semibold">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Type
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          handleSendMessage={handleSendMessage}
        />
      </div>
      <RoomNameEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        roomName={room.roomName}
        roomId={room.id}
      />
      <LeaveRoomModal
        isOpen={isLeaveOpen}
        onClose={handleCloseLeave}
        roomName={room.roomName}
        roomId={room.id}
      />
    </div>
  );
};

export default BeggarRoom;
