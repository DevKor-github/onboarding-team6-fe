import { IoIosArrowBack } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { updateUserProfile } from '../api/user';
import { RootState } from '../redux/store';

const SetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userInfo = useSelector((state: RootState) => state.userState.user);
  const username = userInfo?.username;
  const bio = userInfo?.bio;

  const handleBackClick = () => {
    navigate('/my');
  };

  const isPasswordMatch = password === confirmPassword;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await updateUserProfile({ bio, username, password });
      navigate('/my');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
        <h1 className="text-[18px] text-black font-9black">
          설정-비밀번호 변경
        </h1>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="w-full h-[70vh] p-[20px] justify-center flex flex-col">
        <h1 className="text-[18px] text-black font-7bold text-center">
          새 비밀번호를 입력해주세요
        </h1>
        <form
          className="w-full justify-center flex flex-col"
          onSubmit={handleSubmit}
        >
          <input
            type="password"
            placeholder="새 비밀번호"
            className="font-6semibold text-[18px] p-2 mx-[30px] mt-[20px] border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            className="font-6semibold text-[18px] p-2 mx-[30px] mt-[5px] border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && (
            <p
              className={`font-6semibold text-[18px] my-[5px] text-center ${
                isPasswordMatch ? 'text-[#12372A]' : 'text-[#A02334]'
              }`}
            >
              {isPasswordMatch
                ? '비밀번호가 일치합니다!'
                : '비밀번호가 일치하지 않습니다!'}
            </p>
          )}
          <button
            type="submit"
            className="font-6semibold text-[18px] mx-[30px] py-[10px] mt-[5px] rounded-[10px] bg-[#8C6A5D] text-white mb-[5px]"
          >
            저장하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPasswordPage;
