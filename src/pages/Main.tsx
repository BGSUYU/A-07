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
                text='眼科疾病是指影响眼睛及其附属结构（如眼睑、泪腺、视神经等）的疾病。这些疾病可能影响视力、引起眼部不适，甚至导致失明。'
                h1='什么是眼科疾病？'
                backgroundgradient='linear-gradient(to bottom right, rgba(215, 215, 215,0.8),10%, rgb(255, 255, 255))'
                backgroundimage="/colour01.jpg"
                />
                <MessageMain 
                text='眼科疾病的类型有：屈光不正(近视、远视、散光)、白内障、青光眼、视网膜疾病、结膜炎、眼底病、眼睑疾病、泪道疾病、眼外伤等。'
                h1='眼科疾病的类型有哪些？'
                backgroundgradient='linear-gradient(to top right, rgba(215, 215, 215,0.8),10%,rgb(255, 255, 255))'
                backgroundimage="/OCT01.png"
                />
                <MessageMain
                text='人工智能（AI）技术开发高效、精准的眼科疾病智能诊断系统具有重要现实意义。近年来，随着深度学习、计算机视觉等技术的快速发展，基于眼底图像的计算机辅助诊断（CAD）系统逐步兴起，并开始广泛应用于临床实践。这些系统能有效辅助医生进行眼科疾病的自动化分类、病变区域的定位与分析，大幅提高眼疾诊断的效率和精准性'
                h1='AI对于眼科疾病的帮助'
                backgroundgradient='linear-gradient(to bottom right, rgba(215, 215, 215,0.8),10%,rgb(255, 255, 255))'
                backgroundimage="/AI01.jpg"
                />
            </div>
        </div>
    );
}