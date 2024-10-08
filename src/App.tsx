import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopLogo from './components/TopLogo';
import Header from './components/Header';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChattingListPage from './pages/ChattingListPage';
import MyPage from './pages/MyPage';
import EditProfilePage from './pages/EditProfilePage';
import AddExpensePage from './pages/AddExpensePage';
import AddIncomePage from './pages/AddIncomePage';
import TransactionListPage from './pages/TransactionListPage';
import TransactionListPage2 from './pages/TransactionListPage2';
import MemberListPage from './pages/MemberListPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import EditPasswordPage from './pages/EditPasswordPage';
import SetPasswordPage from './pages/SetPasswordPage';
import SearchChattingRoomPage from './pages/SearchChattingRoomPage';

import BeggarRoom from './pages/BeggarRoom';
import OneOnOneRoom from './pages/OneOnOneRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<TopLogo />}>
          <Route element={<Header />}>
            <Route path="/chattinglist" element={<ChattingListPage />} />
            <Route path="/my" element={<MyPage />} />
          </Route>
          <Route path="/editprofile" element={<EditProfilePage />} />
          <Route path="/addexpense" element={<AddExpensePage />} />
          <Route path="/addincome" element={<AddIncomePage />} />
          <Route path="/transactionlist" element={<TransactionListPage />} />
          <Route path="/transactionlist2" element={<TransactionListPage2 />} />
          <Route path="/beggarroom" element={<BeggarRoom />} />
          <Route path="/memberlist" element={<MemberListPage />} />
          <Route path="/oneononeroom" element={<OneOnOneRoom />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/editpwd" element={<EditPasswordPage />} />
          <Route path="/setpwd" element={<SetPasswordPage />} />
          <Route
            path="/searchchattingroom"
            element={<SearchChattingRoomPage />}
          />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
