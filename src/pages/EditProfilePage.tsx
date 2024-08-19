import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { UserProfileResponse } from '../api/types';
import { getUserProfile, updateUserProfile } from '../api/user';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfileResponse | null>(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setProfile(profileData);
        setUsername(profileData.username);
        setBio(profileData.bio);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleBackClick = () => {
    navigate('/my');
  };

  const handleSave = async () => {
    try {
      await updateUserProfile({ bio, username, password: '1111' });
      navigate('/my');
    } catch (error) {
      console.error('프로필 수정 중 오류 발생:', error);
    }
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
        <h1 className="text-[18px] text-black font-9black">프로필 편집하기</h1>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="flex flex-col items-center px-[20px]">
        <div className="w-[200px] h-[200px] bg-[#D9D9D9] rounded-full mt-[30px] mb-[10px]"></div>
        <h1 className="text-[18px] text-[#8C6A5D] font-8extrabold underline">
          사진 변경
        </h1>
        <div className="w-full flex flex-col mt-[30px]">
          <div className="w-full flex bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] items-center mb-[10px]">
            <h1 className="w-1/4 text-black text-[18px] font-9black">닉네임</h1>
            <input
              type="text"
              defaultValue={profile?.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-black text-[18px] font-4regular flex-grow bg-transparent border-none outline-none"
            />
          </div>
          <div className="w-full flex bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] items-start mb-[10px]">
            <h1 className="w-1/4 text-black text-[18px] font-9black">
              한줄 소개
            </h1>
            <input
              type="text"
              defaultValue={profile?.bio}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="text-black text-[18px] font-4regular flex-grow bg-transparent border-none outline-none resize-none overflow-hidden"
            />
          </div>
          <div className="w-full flex bg-[#f1f1f1] rounded-[10px] px-[15px] py-[8px] items-center mb-[10px]">
            <h1 className="w-1/4 text-black text-[18px] font-9black">잔고</h1>
            <input
              type="text"
              defaultValue="0원"
              className="text-black text-[18px] font-4regular flex-grow bg-transparent border-none outline-none"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full flex bg-[#8C6A5D] justify-center items-center rounded-[10px] font-7bold text-white text-[18px] p-2"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
