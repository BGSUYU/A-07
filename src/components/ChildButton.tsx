import { List } from 'antd';
import React, { useState } from 'react';
import ChildIntroduce from "../components/ChildIntroduce";

interface ChildButtonPropscx {
    text:string;
    isOnclickcx:boolean;
    isHoveredcx:boolean;
    isIntroduce:boolean;
    setIntroduce:React.Dispatch<React.SetStateAction<boolean>>;
    setChildren:React.Dispatch<React.SetStateAction<number>>;
    id:number;
}
interface ChildButtonPropsxm {
    text:string;
    isOnclickxm:boolean;
    isHoveredxm:boolean;
    isIntroduce:boolean;
    setIntroduce:React.Dispatch<React.SetStateAction<boolean>>;
    setChildren:React.Dispatch<React.SetStateAction<number>>;
    id:number;
}


export function ChildButtoncx(props:ChildButtonPropscx) {
    const [ChildButtonStyle, setChildButtonStyle] = useState(false);
    const handleChildBackground = () => {
        if (!ChildButtonStyle){
            setChildButtonStyle(true);
        }
        if (ChildButtonStyle){
            setChildButtonStyle(false);
        }
    }
    const handleChildIntroduce = () => {
        if (!props.isIntroduce) {
            props.setIntroduce(true);
            props.setChildren(props.id);
        }
    }
    const styles_cx_child= {
        border:'0',
        // borderColor:'rgb(107, 127, 207)',
        background:(ChildButtonStyle||(props.isOnclickcx||props.isHoveredcx)) ? 'rgb(107, 127, 207)':'white',
        height:'100px',
        // width:'200px',
        color:(ChildButtonStyle||(props.isOnclickcx||props.isHoveredcx)) ? 'white':'rgb(165, 192, 255)',                    
        flex:"0 1 400px",
        borderRadius:'10px',
        cursor:'pointer',
        transition:'background 1s ease,color 1s ease',
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)',
        fontSize:'16px',
    }


    return (
        <button onMouseEnter={handleChildBackground} onMouseLeave={handleChildBackground} onClick={handleChildIntroduce} style={styles_cx_child}>
            {props.text}
        </button>
    )
}

export function ChildButtonxm(props:ChildButtonPropsxm) {
    const [ChildButtonStyle, setChildButtonStyle] = useState(false);
    const handleChildBackground = () => {
        if (!ChildButtonStyle){
            setChildButtonStyle(true);
        }
        if (ChildButtonStyle){
            setChildButtonStyle(false);
        }
    }
    const handleChildIntroduce = () => {
        if (!props.isIntroduce) {
            props.setIntroduce(true);
            props.setChildren(props.id);
        }
    }
    const styles_xm_child = {
        border:'0',
        // borderColor:'rgb(107, 127, 207)',
        background:(ChildButtonStyle||(props.isOnclickxm||props.isHoveredxm)) ? 'rgb(248, 183, 123)':'white',
        height:'100px',
        // width:'200px',
        color:(ChildButtonStyle||(props.isOnclickxm||props.isHoveredxm)) ? 'white':'rgb(248, 183, 123)',  
        flex:"0 1 400px",
        borderRadius:'10px',
        cursor:'pointer',
        transition:'background 1s ease , color 1s ease',
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)',
        fontSize:'16px',
    }

    return (
        <button onMouseEnter={handleChildBackground} onMouseLeave={handleChildBackground} onClick={handleChildIntroduce} style={styles_xm_child}>
            {props.text}
        </button>
    )
}