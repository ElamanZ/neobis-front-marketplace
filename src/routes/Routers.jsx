import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import PasswordRecoveryPage from "../pages/PasswordRecoveryPage/PasswordRecoveryPage.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";

function Routers(props) {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/password-recovery" element={<PasswordRecoveryPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/main" element={< MainPage/>} />
        </Routes>
    );
}

export default Routers;