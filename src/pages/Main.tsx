import React from "react";
import NavIndex from "../components/Nav_index";
import MessageMain from "../components/MessageMain";
import { message } from "antd";

const h1_styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(107, 127, 207)",
}



export default function Main() {
    return (
        <div>
            <div className="MainNav" style={{
                height: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <h1 style={h1_styles}>基于眼底医学影像的眼科疾病智能诊断系统</h1>
                <NavIndex />
            </div>
            <div style={{
                marginBottom:'50px'
            }}>
                <MessageMain 
                text=''
                h1=''
                />
                <MessageMain 
                text=''
                h1=''
                />
                <MessageMain
                text=''
                h1=''
                />
            </div>
        </div>
    );
}