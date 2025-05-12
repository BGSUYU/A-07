import React from "react";
import {Input,Button} from "antd";
import {SearchOutlined,LinkOutlined,GlobalOutlined, BorderLeftOutlined,UserOutlined,FileJpgOutlined,GithubOutlined,OpenAIOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {tag} from "../App"

export default function Nav(){
    const handleRegister = () => {
        // setIsShowRegister(true);
        ShowRegister?.setIsShowRegister(true);
    }
    const handleLogin = () => {
        ShowLogin?.setIsShowLogin(true);
    }
    const ShowRegister = useContext(tag);
    const ShowLogin = useContext(tag);
    const styles_button={
        marginRight:"30px",
        width:"100px",
        border:'0px',
    }
    return(
        <div style={
            {
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                position:'sticky',
                zIndex:'1',
                top:'0',
                backgroundColor:'rgb(217, 223, 255)',
                padding:'10px'
            }
        }>
                <div>
                <Button icon={<GlobalOutlined />} style={{
                    marginRight:'20px'
                }}>
                    <Link to='/'>首页</Link>
                </Button>
                <Input placeholder="Filled" variant="filled" prefix={<SearchOutlined />}
                style={{
                    width:'256px'
                }}/>
                </div>
                <div>
                <Button style={styles_button} icon={<OpenAIOutlined />}>
                    <Link to="/AI">AI提问</Link>
                </Button>
                <Button style={styles_button} icon={<FileJpgOutlined />}>
                    <Link to="/SubmitPage">图片提交</Link>
                </Button>
                <Button style={styles_button} icon={<GithubOutlined />}>
                    <Link to="/Introduce" >模型介绍</Link>
                </Button>                
                <Button style={styles_button} icon={<UserOutlined />}>
                    <Link to="/Person" >个人中心</Link>
                </Button>
                <button style={{
                    backgroundColor:'rgb(217, 223, 255)',
                    border:'0px',
                    cursor:'pointer',
                }}
                onClick={handleLogin}
                >登录</button>/<button style={{
                    backgroundColor:'rgb(217, 223, 255)',
                    border:'0px',
                    cursor:'pointer',
                }}
                onClick={handleRegister}
                >注册</button>
                {/* 实现Context传透 */}
                </div>
        </div>
    )
}

// function RegisterForm(){
//     return(
//         <div style={{
//             zIndex:'2',
//             display:'flex',
//             flexDirection:'column',
//             justifyContent:'center',
//             alignItems:'center',
//             height:'100vh',
//             // width:'100vw',
//             backgroundColor:'rgba(255, 255, 255, 0.5)',
//             position:'absolute',
//         }}>
//             <div style={{
//                 display:'flex',
//                 flexDirection:'column',
//                 justifyContent:'center',
//                 width:'400px',
//                 height:'300px',
//                 alignItems:'center',
//                 backgroundColor:'white',
//                 padding:'20px',
//                 borderRadius:'10px',
//                 boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)'
//             }}>
//                 <h1>注册</h1>
//                 <Input placeholder="用户名" prefix={<UserOutlined />} style={{width:'256px'}}/>
//                 <Input placeholder="密码" prefix={<UserOutlined />} style={{width:'256px'}}/>
//                 <Button type="primary">注册</Button>
//             </div>
//         </div>
//     )
// }