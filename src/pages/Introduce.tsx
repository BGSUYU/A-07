import { Button, Flex, List ,Input} from "antd"
import Nav from "../components/Nav"
import React, { useState } from "react";
import {ChildButtoncx,ChildButtonxm} from "../components/ChildButton";
import { Color } from "antd/es/color-picker";
import ChildIntroduce from "../components/ChildIntroduce";

export default function Introduce() {
    const { TextArea } = Input;
    const [isHoveredcx, setIsHoveredcx] = useState(false);
    const [isHoveredxm, setIsHoveredxm] = useState(false);

    const [isOnclickcx, setOnclickcx] = useState(false);
    const [isOnclickxm, setOnclickxm] = useState(false);
    
    const handleMouseEntercx = () => setIsHoveredcx(true);
    const handleMouseLeavecx = () => setIsHoveredcx(false);

    const handleMouseEnterxm = () => setIsHoveredxm(true);
    const handleMouseLeavexm = () => setIsHoveredxm(false);

    const handleButtoncx = () => {
        if (isOnclickcx) {
            setOnclickcx(false);
        }
        if(!isOnclickcx){
            setOnclickcx(true);
        }
    }

    const handleButtonxm = () => {
        if (isOnclickxm) {
            setOnclickxm(false);
        }
        if(!isOnclickxm){
            setOnclickxm(true);
        }
    }
    
    const [isChildIntroduce, setChildIntroduce] = useState(false);
    const [isChildren, setChildren] = useState(Number);

    // const handleChildren = (num:number) => {
    //     setChildren(num);
    // }

    const styles_cx={
        border: "solid 2px",
        borderColor:'rgb(107, 127, 207)',
        height: '50px',
        width:'100px',
        borderRadius: '10px',
        backgroundColor:(isOnclickcx||isHoveredcx) ? 'rgb(107, 127, 207)':'white',
        color:(isOnclickcx||isHoveredcx) ? 'white':'rgb(165, 192, 255)',
        cursor:'pointer',
        transition:'background-color 1s ease,color 1s ease'
    }
    const styles_xm={
        border: "solid 2px",
        borderColor:'rgb(248, 183, 123)',
        height: '50px',
        width: '200px',
        borderRadius: '10px',
        backgroundColor:(isOnclickxm||isHoveredxm) ? 'rgb(248, 183, 123)':'white',
        color:(isOnclickxm||isHoveredxm) ? 'white':'rgb(251, 197, 104)',
        cursor:'pointer',
        transition:'background-color 1s ease,color 1s ease'
    }
    return(
        
        <div style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "rgb(248, 248, 248)",
        }}>
            {isChildIntroduce?(<ChildIntroduce isChildren={isChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} />):(<div></div>)}
            <Nav/>
            <div style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
            }}>           
                <h1>基于眼底医学影像的眼科疾病智能诊断模型</h1>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginBottom: "50px",
                // position: "relative",
                // top: "30px",
            }}>
                <button style={styles_cx} 
                        onMouseEnter={handleMouseEntercx}
                        onMouseLeave={handleMouseLeavecx}
                        onClick={handleButtoncx}>创新性</button>
                <button style={styles_xm}
                        onMouseEnter={handleMouseEnterxm}
                        onMouseLeave={handleMouseLeavexm}
                        onClick={handleButtonxm}>项目方案与技术路线</button>
            </div>
            <div style={{
                // position: "relative",
                // top: "30px",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent:'space-between',
                    flexWrap: "wrap",
                    // flex:"1,1,33%",
                }}>
                    {/* <List></List> */}
                    <ChildButtoncx  id={0} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickcx={isOnclickcx} isHoveredcx={isHoveredcx} text='多数据集整合'/>
                    <ChildButtoncx  id={1} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickcx={isOnclickcx} isHoveredcx={isHoveredcx} text='OCT模型先验知识蒸馏'/>
                    <ChildButtoncx  id={2} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickcx={isOnclickcx} isHoveredcx={isHoveredcx} text='左右眼联合编码'/>
                    <ChildButtonxm  id={3} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickxm={isOnclickxm} isHoveredxm={isHoveredxm} text='OCT辅助预训练模块' />
                    <ChildButtoncx  id={4} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickcx={isOnclickcx} isHoveredcx={isHoveredcx} text='标签随机可见与LLM（大语言模型）先验知识嵌入' />
                    <ChildButtonxm  id={5} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickxm={isOnclickxm} isHoveredxm={isHoveredxm} text='Transformer-FFN联合分类模块' />
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    flexWrap: "wrap",
                    height:'150px',
                }}>
                    <ChildButtonxm  id={6} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickxm={isOnclickxm} isHoveredxm={isHoveredxm} text='整体方案' />
                    <ChildButtonxm  id={7} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickxm={isOnclickxm} isHoveredxm={isHoveredxm} text='标签-特征嵌入模块' />
                    <ChildButtoncx  id={8} setChildren={setChildren} isIntroduce={isChildIntroduce} setIntroduce={setChildIntroduce} isOnclickcx={isOnclickcx} isHoveredcx={isHoveredcx} text='基于双通道眼底反射模型的图像增强与亮度平衡方法' />
                </div>
            </div>
            <div style={{
                marginBottom: "50px",
            }}>
                <TextArea placeholder="留下你的评论吧" rows={4}/>
            </div>
        </div>
    )
}