import { Button, Input } from "antd";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useContext } from "react";
import {tag} from "../App"
import Password from "antd/es/input/Password";

export default function LoginForm(){
    const ShowLogin = useContext(tag);
    const handleLogin = () => {
        ShowLogin?.setIsShowLogin(false);
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
    const handleLoginMessageIp = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setMessage({
            ...isMessage,
            ip:value,
        })
        // console.log(isMessage);
    }
    const handleLoginMessagePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
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
        fetch('http://localhost:20000/api/Login', {
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
                <Button icon={<CloseOutlined />} onClick={handleLogin}></Button>
                    {/* onClick={handleChildIntroduce} */}
                </div>
                <h1 style={{
                    fontSize:"25px"
                    }}>登录</h1>
                <Input placeholder="用户名" onChange={(e)=>handleLoginMessageIp(e)} prefix={<UserOutlined />} style={InputStyles}/>
                <Input.Password placeholder="密码" onChange={(e)=>handleLoginMessagePassword(e)} prefix={<UserOutlined />} style={InputStyles}/>
                <Button onClick={PutUserMessage} type="primary">登录</Button>
            </div>
        </div>
    )
}