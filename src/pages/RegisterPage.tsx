import backgroundImage from '../assets/images/background.jpg';
import { IoClose, IoLink } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fileName, setFileName] = useState(''); // 파일명 상태 추가
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    navigate('/');
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 선택 창 열기
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const isPasswordMatch = password === confirmPassword;

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Close Icon */}
      <IoClose
        className="absolute top-[20px] right-[20px] text-[32px] text-black cursor-pointer"
        onClick={handleClose}
      />

      <div className="flex flex-col w-3/4">
        <h1 className="font-8extrabold text-[18px] text-black mb-[5px]">
          회원가입
        </h1>
        <form className="w-full">
          <input
            type="text"
            placeholder="닉네임"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
          />
          <input
            type="text"
            placeholder="아이디"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
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
          <div
            className="flex flex-row items-center font-6semibold text-[18px] w-full rounded-[10px] bg-[#ccc] text-white text-left p-2 mb-[5px]"
            onClick={handleFileUploadClick}
          >
            <IoLink className="mr-2" />
            프로필 사진 업로드
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
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
