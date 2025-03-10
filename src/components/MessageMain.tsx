import React from "react";

interface props{
    text:string,
    h1:string
}

export default function MessageMain(props:props){
    return(
        <div className="MessageMain" style={{
            display:'flex',
            alignItems:'center',
            backgroundColor:'rgb(230, 229, 229)',
            flexDirection:'column',
            height:'480px',
        }}>
            <h1 style={{
                marginBottom:'63px'
            }}> {props.h1} </h1>
            <div className="MessageBoard" style={{
                display:'flex',
                width:'60%',
                height:'300px',
                backgroundColor:'rgb(255,255,255)',
                borderRadius:'10px',
                boxShadow:'10px 10px 10px rgba(124, 124, 124, 0.5)',
                justifyContent:'space-between'
            }}>
                <div style={{
                     display:'flex',
                     marginTop:'30px',
                     marginLeft:'5%',
                     width:"40%",
                     height:"240px",
                     backgroundColor:"rgb(104, 103, 103)"
                }}>
                    <img style={{
                    }}
                    alt=""
                    title="123"
                    />
                </div> 
                <div style={{
                    width:"50%",
                    marginTop:'30px',
                    backgroundColor:'rgb(165, 164, 164)'
                }}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}