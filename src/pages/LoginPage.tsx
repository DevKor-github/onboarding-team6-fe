import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';

const LoginPage = () => {
  const messages = [
    '가지고 싶은 것은 사지 마라.',
    '강렬한 욕망의 어머니는 낭비이다.',
    '당신이 가지고 있는 것은 무엇이든 적게 소비하라',
    '풍족할 때 아끼지 않으면 가난해진 뒤에 후회한다',
    '절약하지 않는 자는 고통받게 될 것이다.',
    '티끌 모아 태산',
    '절약은 미덕의 어머니이다.',
    '절약은 훌륭한 수입원이다',
  ];

  const people = [
    '벤자민 프랭클린',
    '마르쿠스 툴리우스 키케로',
    '새뮤얼 존슨',
    '주희',
    '공자',
    '한국 속담',
    '유스티니아누스 1세',
    '데시데리위스 에라스뮈스',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="font-title text-[80px] text-black">거지방</h1>
      <h2 className="font-5medium text-[18px] text-center text-black">
        {messages[currentIndex]}
      </h2>
      <h2 className="font-8extrabold text-[18px] text-center text-black mb-[60px]">
        {people[currentIndex]}
      </h2>
      <div className="flex flex-col w-3/4">
        <h1 className="font-8extrabold text-[18px] text-black mb-[5px]">
          입장하기
        </h1>
        <form className="w-full">
          <input
            type="text"
            placeholder="아이디"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="font-6semibold text-[18px] w-full p-2 border-2 rounded-[10px] border-[#ccc] bg-transparent mb-[5px] text-black"
          />
          <button
            type="submit"
            className="font-6semibold text-[18px] w-full rounded-[10px] bg-[#8C6A5D] text-white p-2 mb-[5px]"
          >
            로그인
          </button>
        </form>
        <Link
          to="/register"
          className="font-6semibold text-[18px] text-black underline text-right"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
