import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import InfoPage from "./pages/infoPage/InfoPage";

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/cadastro" element={<RegisterPage />} />
            <Route exact path="/info" element={<InfoPage />} />
        </Routes>
    )
}