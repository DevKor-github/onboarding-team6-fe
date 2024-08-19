/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        '9black': ['Freesentation-9Black', 'sans-serif'],
        '8extrabold': ['Freesentation-8ExtraBold', 'sans-serif'],
        '7bold': ['Freesentation-7Bold', 'sans-serif'],
        '6semibold': ['Freesentation-6SemiBold', 'sans-serif'],
        '5medium': ['Freesentation-5Medium', 'sans-serif'],
        '4regular': ['Freesentation-4Regular', 'sans-serif'],
        '3light': ['Freesentation-3Light', 'sans-serif'],
        '2extralight': ['Freesentation-2ExtraLight', 'sans-serif'],
        '1thin': ['Freesentation-1Thin', 'sans-serif'],
        title: ['SangSangRock', 'sans-serif'],
      },
      backgroundColor: {
        DEFAULT: '#ffffff', // 기본 배경색을 흰색으로 설정
      },
      textColor: {
        DEFAULT: '#000000', // 기본 텍스트 색상을 검정색으로 설정
      },
    },
  },
  plugins: [],
};
