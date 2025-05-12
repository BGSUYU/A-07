import React, {createContext,useContext, useState} from "react";
import { Layout , Button , Menu , theme , Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import 'antd/dist/reset.css';
import { Route,Routes,BrowserRouter as Router ,} from "react-router-dom";
import Main from "./pages/Main";
import AI from './pages/AI'
import SubmitPage from "./pages/SubmitPage";
import Introduce from "./pages/Introduce"
import Person from "./pages/Person"
import { create } from "domain";
export const tag = createContext<{ iscount: number; setcount: React.Dispatch<React.SetStateAction<number>>;IsShowRegister: boolean; setIsShowRegister: React.Dispatch<React.SetStateAction<boolean>>,IsShowLogin: boolean; setIsShowLogin: React.Dispatch<React.SetStateAction<boolean>> } | null>(null);

export default function Mylayout() {
    const [iscount,setcount] = useState(-1);
    const [IsShowRegister,setIsShowRegister] = useState(false);
    const [IsShowLogin,setIsShowLogin] = useState(false);
    return (
        <div>
            <tag.Provider value={{ iscount, setcount , IsShowRegister,setIsShowRegister , IsShowLogin,setIsShowLogin}}>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/AI" element={<AI />}/>
                    <Route path="/SubmitPage" element={<SubmitPage />}/>
                    <Route path="/Introduce" element={<Introduce />}/>
                    <Route path="/Person" element={<Person />}/>
                </Routes>
            </tag.Provider>
        </div>
    );
}
