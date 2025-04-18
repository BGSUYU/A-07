import React, {createContext,useContext, useState} from "react";
// import { Layout , Button , Menu , theme} from 'antd';
// import 'antd/dist/reset.css';
import { Route,Routes,BrowserRouter as Router ,} from "react-router-dom";
import Main from "./pages/Main";
import AI from './pages/AI'
import SubmitPage from "./pages/SubmitPage";
import Introduce from "./pages/Introduce"
import Person from "./pages/Person"
import { create } from "domain";
export const tag = createContext<{ iscount: number; setcount: React.Dispatch<React.SetStateAction<number>> } | null>(null);

export default function Mylayout() {
    const [iscount,setcount] = useState(-1);
    return (
        <div>
            <tag.Provider value={{ iscount, setcount }}>
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