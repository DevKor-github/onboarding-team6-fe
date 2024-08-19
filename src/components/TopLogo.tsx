import { Outlet } from 'react-router-dom';

const TopLogo = () => {
  return (
    <>
      <header>
        <div className="h-[54px] bg-[#8C6A5D] flex items-center px-[20px]">
          <h1
            className="font-title text-[28px] text-white"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            거지방
          </h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default TopLogo;
