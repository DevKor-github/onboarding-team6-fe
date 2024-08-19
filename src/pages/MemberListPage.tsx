import { IoIosArrowBack } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';

const MemberListPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/beggarroom');
  };

  const handleMemberClick = () => {
    navigate('/profile');
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
        <div
          className="w-full flex flex-row items-center mt-[20px]"
          onClick={handleMemberClick}
        >
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
          <h1 className="font-9black text-[18px] text-black mr-[5px]">
            강민선
          </h1>
        </div>
        <div
          className="w-full flex flex-row items-center mt-[20px]"
          onClick={handleMemberClick}
        >
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
          <h1 className="font-9black text-[18px] text-black mr-[5px]">
            김예락
          </h1>
        </div>
        <div
          className="w-full flex flex-row items-center mt-[20px]"
          onClick={handleMemberClick}
        >
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full shrink-0 mr-[20px]" />
          <h1 className="font-9black text-[18px] text-black mr-[5px]">
            안지형
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MemberListPage;
