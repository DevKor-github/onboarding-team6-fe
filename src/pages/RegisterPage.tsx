import backgroundImage from '../assets/images/background.jpg';
import { IoClose } from 'react-icons/io5';
import { IoIosCamera } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { RegisterPayload, AuthResponse } from '../api/types';
import { registerUser, initBalance } from '../api/auth';
import { setUser } from '../redux/userActions';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [balance, setBalance] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation<AuthResponse, Error, RegisterPayload>({
    mutationFn: registerUser,
    onSuccess: async (data: AuthResponse) => {
      dispatch(setUser(data.user));
      try {
        await initBalance(username, balance);
        navigate('/chattinglist');
      } catch (error) {
        console.error('잔고 초기화 실패:', error);
      }
    },
    onError: (error: Error) => {
      console.error('회원가입 실패:', error);
    },
  });

  const { mutate, isError } = mutation;

  const handleClose = () => {
    navigate('/');
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const profilePicture = 'S3에서 받아온 링크';

    const payload: RegisterPayload = {
      username,
      password,
      profilePicture,
      bio,
    };

    mutate(payload);
  };

  const isPasswordMatch = password === confirmPassword;

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <IoClose
        className="absolute top-[20px] right-[20px] text-[32px] text-black cursor-pointer"
        onClick={handleClose}
      />

      <div className="flex flex-col w-3/4">
        <h1 className="font-8extrabold text-[18px] text-black mb-[5px]">
          회원가입
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="닉네임"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && (
            <p
              className={`font-6semibold text-[18px] mb-[5px] text-center ${
                isPasswordMatch ? 'text-[#12372A]' : 'text-[#A02334]'
              }`}
            >
              {isPasswordMatch
                ? '비밀번호가 일치합니다!'
                : '비밀번호가 일치하지 않습니다!'}
            </p>
          )}
          <input
            type="text"
            placeholder="한줄 소개"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="text"
            placeholder="잔고"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          <div
            className="flex flex-row items-center font-6semibold text-[18px] w-full rounded-[10px] bg-[#ccc] text-white text-left p-2 mb-[5px]"
            onClick={handleFileUploadClick}
          >
            <IoIosCamera className="mr-2 text-[24px] mb-[2px]" />
            <h1>프로필 사진 업로드</h1>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {fileName && (
            <p className="font-5medium underline text-[18px] text-black mb-[5px]">
              {fileName}
            </p>
          )}
          <button
            type="submit"
            className="font-6semibold text-[18px] w-full rounded-[10px] bg-[#8C6A5D] text-white p-2 mb-[5px]"
          >
            회원가입
          </button>
          {isError && (
            <p className="font-6semibold text-[18px] text-red-500 text-center">
              회원가입에 실패했습니다.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
