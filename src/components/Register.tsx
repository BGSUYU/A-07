import { Button, Input } from "antd";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useContext } from "react";
import {tag} from "../App"
import Password from "antd/es/input/Password";

export default function RegisterForm(){
    const ShowRegister = useContext(tag);
    const handleRegister = () => {
        ShowRegister?.setIsShowRegister(false);
    }
    const InputStyles={
        width:'256px',
        marginBottom:'20px',
        marginTop:'0px',
    }
    const [isMessage,setMessage] = useState({
        ip:'',
        password:'',
    })
    const handleRegisterMessageIp = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setMessage({
            ...isMessage,
            ip:value,
        })
        // console.log(isMessage);
    }
    const handleRegisterMessagePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setMessage({
            ...isMessage,
            password:value,
        })
        // console.log(isMessage);
    }
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    // setMessage((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    // }));
    // console.log(isMessage);
    // };
    async function PutUserMessage() {
        fetch('http://localhost:20000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: isMessage.ip,
                password: isMessage.password,
            }),
        })
    }
    return(
        <div style={{
            zIndex:3,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            width:'1280px',
            backgroundColor:'rgba(255, 255, 255, 0.5)',
            position:'absolute',
        }}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                width:'400px',
                height:'300px',
                alignItems:'center',
                backgroundColor:'white',
                padding:'20px',
                borderRadius:'10px',
                boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)',
                position:'sticky',
                top:'30%',
            }}>
                <div style={{
                    position: 'relative',
                    top: '',
                    left: '40%',
                }}>
                <Button icon={<CloseOutlined />} onClick={handleRegister}></Button>
                    {/* onClick={handleChildIntroduce} */}
                </div>
                <h1 style={{
                    fontSize:"25px"
                    }}>注册</h1>
                <Input placeholder="用户名" onChange={(e)=>handleRegisterMessageIp(e)} prefix={<UserOutlined />} style={InputStyles}/>
                <Input.Password placeholder="密码" onChange={(e)=>handleRegisterMessagePassword(e)} prefix={<UserOutlined />} style={InputStyles}/>
                <Button onClick={PutUserMessage} type="primary">注册</Button>
            </div>
        </div>
    )
}