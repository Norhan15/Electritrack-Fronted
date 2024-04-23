import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals.js';
import Menu from "./pages/menu.jsx";
import Login from "./pages/login.jsx";
import Rooms from "./pages/rooms.jsx";
import Alertas from "./pages/alertas.jsx";
import Informes from "./pages/informes.jsx";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route path="/alertas" element={<Alertas />} />
    <Route path="/informes" element={<Informes />} />
    </Routes>
    </Router>
);

reportWebVitals();