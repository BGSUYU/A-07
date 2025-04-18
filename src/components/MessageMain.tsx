import React from "react";

interface props{
    text:string,
    h1:string,
    backgroundgradient:string,
    backgroundimage:string
}

export default function MessageMain(props:props){
    return(
        <div className="MessageMain" style={{
            display:'flex',
            alignItems:'center',
            // backgroundColor:'rgb(230, 229, 229)',
            background:props.backgroundgradient,
            flexDirection:'column',
            height:'480px',
        }}>
            <h1 style={{
                marginBottom:'63px'
            }}> {props.h1} 
            </h1>
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
                     width:"45%",
                     height:"240px",
                     backgroundColor:"rgb(107, 107, 107)",
                     backgroundImage:`url(${props.backgroundimage})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     borderRadius:'10px',
                     boxShadow:'-10px 10px 10px rgba(124, 124, 124, 0.5)'
                }}>
                    <img style={{
                    }}
                    alt=""
                    title="123"
                    />
                </div> 
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    width:"50%",
                    marginTop:'30px',
                    backgroundColor:'rgb(165, 164, 164)',
                    alignItems:'center',
                    justifyContent:'center',
                    marginBottom:'30px',
                    position:'relative',
                    left:'60px',
                    borderRadius:'10px',
                    background:'linear-gradient(to bottom right, rgba(213, 215, 252, 0.8),10%, rgb(255, 255, 255))',
                    boxShadow:'10px 10px 10px rgba(187, 187, 187, 0.5)'
                }}>
                    <div style={{
                        paddingLeft:'20px'
                    }}>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}