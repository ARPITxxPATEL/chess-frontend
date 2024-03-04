import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./AuthPage/LoginPage/LoginPage";
import RegisterPage from "./AuthPage/RegisterPage/RegisterPage";
import LiveGamePage from "./LiveGamePage/LiveGamePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import Sidebar from "./utils/components/sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes element={<Sidebar />}>

          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/register" element={<RegisterPage />} />

          <Route exact path="/live" element={<LiveGamePage />} />

          <Route exact path="/profile" element={<ProfilePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
