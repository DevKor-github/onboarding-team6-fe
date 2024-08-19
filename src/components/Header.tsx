import { Outlet, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <div className="h-[50px] bg-white flex justify-between items-center px-[20px]">
          <a
            href="/chattinglist"
            className={`text-[18px] font-9black ${
              location.pathname === '/chattinglist'
                ? 'text-black'
                : 'text-[#aaa]'
            }`}
          >
            채팅
          </a>
          <a
            href="/my"
            className={`text-[18px] font-9black ${
              location.pathname === '/my' ? 'text-black' : 'text-[#aaa]'
            }`}
          >
            MY
          </a>
        </div>
        <div className="h-[10px] bg-[#f1f1f1]" />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
