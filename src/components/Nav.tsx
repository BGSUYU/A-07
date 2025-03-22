import React from "react";
import {Input,Button} from "antd";
import {SearchOutlined,LinkOutlined,GlobalOutlined, BorderLeftOutlined,UserOutlined,FileJpgOutlined,GithubOutlined,OpenAIOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";

export default function Nav(){
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
                </div>
        </div>
    )
}