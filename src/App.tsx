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
import MemberListPage from './pages/MemberListPage';
import ProfilePage from './pages/ProfilePage';

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
          <Route path="/beggarroom" element={<BeggarRoom />} />
          <Route path="/memberlist" element={<MemberListPage />} />
          <Route path="/oneononeroom" element={<OneOnOneRoom />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
