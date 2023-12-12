import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";

function Routers(props) {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/main" element={< MainPage/>} />
        </Routes>
    );
}

export default Routers;