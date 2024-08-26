import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { logout } from '../api/token';
import { withdraw } from '../api/user';
import { clearUser } from '../redux/userActions';

const SettingPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/my');
  };

  const handleEditPwdClick = () => {
    navigate('/editpwd');
  };

  const handleLogoutClick = () => {
    clearUser();
    logout();
  };

  const handleWithdrawClick = () => {
    withdraw();
    navigate('/');
  };

  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
        <IoIosArrowBack
          className="text-[24px] text-black"
          onClick={handleBackClick}
        />
        <h1 className="text-[18px] text-black font-9black">설정</h1>
      </div>
      <div className="h-[10px] bg-[#f1f1f1]" />
      <div className="flex flex-col mt-[20px] px-[20px]">
        <div
          className="font-6semibold text-black text-[18px] mb-[20px]"
          onClick={handleEditPwdClick}
        >
          비밀번호 변경
        </div>
        <div
          className="font-6semibold text-black text-[18px] mb-[20px]"
          onClick={handleLogoutClick}
        >
          로그아웃
        </div>
        <div
          className="font-6semibold text-black text-[18px] mb-[20px]"
          onClick={handleWithdrawClick}
        >
          탈퇴하기
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
