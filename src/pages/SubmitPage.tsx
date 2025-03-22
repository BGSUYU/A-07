import React, { useState,MouseEvent,useEffect } from "react";
import Nav from "../components/Nav";
import { Input,Checkbox} from "antd";
import axios from "axios";

export default function SubmitPage() {
    const [imgdata,setimgdata] = React.useState({
        name:'',
        testnum:'',
        phonenum:'',
        email:''
    })

    // useEffect(() => {
    //     // 组件挂载时重置表单
    //     setimgdata({ name: '',testnum:'', phonenum:'',email: '' });
    //   }, []);

    async function Submitdata(event: React.MouseEvent<HTMLButtonElement>) {
        // event.preventDefault(); // 阻止默认行为
        try{
            // console.log(imgdata)
            await axios.post('http://localhost:20000/api/submitdata', {data:imgdata})
        }
        catch (error) {
            console.error('Error submitting data:', error);
          }
    }

    const handledataName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setimgdata({
            ...imgdata,
            name:e.target.value
        })
    };
    const handledataTestnum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setimgdata({
            ...imgdata,
            testnum:e.target.value
        })
    };
    const handledataPhonenum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setimgdata({
            ...imgdata,
            phonenum:e.target.value
        })
    };
    const handledataEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setimgdata({
            ...imgdata,
            email:e.target.value
        })
    };
    return (
        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <Nav/>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    minHeight:'600px',
                    width:'40%',
                    justifyContent:'space-around',
                    marginTop:'50px'
                }}>
                    <label htmlFor="OCT">
                        <input type="file" id="OCT" style={{
                            display:'none',
                        }}/>
                        <div style={{
                            backgroundColor:'gray',
                            height:'200px',
                            borderRadius:'5px',
                            boxShadow:'5px 5px 5px rgb(92, 92, 92)'
                        }}>
                            {/* <img src="" alt="眼睛图片"/> */}
                        </div>
                    </label>
                    <label htmlFor="colour">
                    <input type="file" id="colour" style={{
                            display:'none',
                    }}/>
                        <div style={{
                            backgroundColor:'gray',
                            height:'200px',
                            borderRadius:'5px',
                            boxShadow:'5px 5px 5px rgb(92, 92, 92)'
                            // marginTop:'20px'
                        }}>
                            {/* <img src="" alt="彩色眼底"/> */}
                        </div>
                            {/* <img src="" alt="OCI"/>
                            <img src="" alt="彩色眼底"/> */}
                    </label>
                    <div>
                        <Checkbox>OCT</Checkbox> 
                        {/* 使用onchange */}
                        <Checkbox>彩色眼底</Checkbox>
                        {/* 图片提交 */}
                    </div>
                </div>
                <div style={{
                    width:'40%',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-around'
                }}>
                    <Input value={imgdata.name} onChange={handledataName} placeholder="请输入你的姓名" />
                    <Input value={imgdata.testnum} onChange={handledataTestnum} placeholder="请输入你的测试编号"/>
                    <Input value={imgdata.phonenum} onChange={handledataPhonenum} placeholder="请输入你的手机号"/>
                    <Input value={imgdata.email} onChange={handledataEmail} placeholder="请输入你的邮箱"/>
                    {/* 姓名、身份证号、手机号、邮箱 
                        测试编号可以使用手机发送验证码方式*/}
                </div>
            </div>
            <div
            style={{
                display:'flex',
                justifyContent:"center",
                alignItems:'center'
            }}>
                <button 
                onClick={(e)=>{
                    Submitdata(e)
                        setimgdata({
                            name:'',
                            testnum:'',
                            phonenum:'',
                            email:''
                        })
                    }
                }
                style={{
                    height:'50px',
                    width:'150px',
                    fontSize:'20px',
                    border:'0',
                    borderRadius:'20px',
                    backgroundColor:'rgb(200, 216, 253)',
                }}
                >Submit</button>
                {/*提交事件*/}
            </div>
        </div>
    );
}