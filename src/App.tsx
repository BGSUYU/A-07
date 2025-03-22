import React from "react";
// import { Layout , Button , Menu , theme} from 'antd';
// import 'antd/dist/reset.css';
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import AI from './pages/AI'
import SubmitPage from "./pages/SubmitPage";
import Introduce from "./pages/Introduce"

export default function Mylayout() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/AI" element={<AI />}/>
                <Route path="/SubmitPage" element={<SubmitPage />}/>
                <Route path="/Introduce" element={<Introduce />}/>
            </Routes>
        </div>
    );
}