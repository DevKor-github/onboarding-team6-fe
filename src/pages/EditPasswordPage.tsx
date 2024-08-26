import { IoIosArrowBack } from 'react-icons/io';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../redux/store';
import { loginUser } from '../api/auth';

const EditPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const userInfo = useSelector((state: RootState) => state.userState.user);
  const username = userInfo?.username;

  const handleBackClick = () => {
    navigate('/setting');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const loginData = {
      username,
      password,
    };

    try {
      await loginUser(loginData);
      navigate('/setpwd');
    } catch (error) {
      setError('잘못된 비밀번호입니다.');
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
          현재 사용중인 비밀번호를 입력해주세요
        </h1>
        <form
          className="w-full justify-center flex flex-col"
          onSubmit={handleSubmit}
        >
          <input
            type="password"
            placeholder="비밀번호"
            className="font-6semibold text-[18px] p-2 mx-[30px] mt-[20px] border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="font-6semibold text-[18px] mx-[30px] py-[10px] mt-[5px] rounded-[10px] bg-[#8C6A5D] text-white mb-[5px]"
          >
            다음
          </button>
          {error && (
            <p className="font-6semibold text-[18px] text-red-500 text-center mt-[5px]">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditPasswordPage;
