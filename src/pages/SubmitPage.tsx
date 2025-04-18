import React, { useState,MouseEvent,useEffect, useContext } from "react";
import Nav from "../components/Nav";
import { Input,Checkbox } from "antd";
import axios from "axios";
import {FileAddOutlined,CloseOutlined,FileZipOutlined} from '@ant-design/icons'
import { truncate } from "fs";
import { tag } from "../App";

export default function SubmitPage() {
    const [imgdata,setimgdata] = React.useState({
        name:'',
        testnum:'',
        phonenum:'',
        email:''
    })

    const [isHovered, setIsHovered] = useState(false);
 
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const [isCheckboxOCT,setCheckboxOCT]=useState(false);
    const [isCheckboxColour,setCheckboxColour]=useState(false);
    const [labelstyleOCT,setlabelstyleOCT]=useState<React.CSSProperties>({
        display:'flex',
        justifyContent:'center',
        backgroundColor:'rgb(210, 210, 210)',
        height:'200px',
        borderRadius:'5px',
        boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
        cursor:'not-allowed'
    })
    const [labelstyleColour,setlabelstyleColour]=useState<React.CSSProperties>({
        display:'flex',
        justifyContent:'center',
        backgroundColor:'rgb(210, 210, 210)',
        height:'200px',
        borderRadius:'5px',
        boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
        cursor:'not-allowed'
    })

    const handlecheckboxOCT = ()=>{
        if(!isCheckboxOCT){
            setCheckboxOCT(true);//下一步进行渲染
            setlabelstyleOCT({
                display:'flex',
                justifyContent:'center',
                backgroundColor:'white',
                // backgroundImage:`url(${Isinput1})`,
                height:'200px',
                borderRadius:'5px',
                boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                cursor:'pointer'
            })
            setIsinput1(false)
            setZip(false)
            if(isCheckboxColour){
                setlabelstyleColour({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'white',
                    // backgroundImage:`url(${Isinput1})`,
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'pointer'
                })
                setIsinput2(false)
                setZip(false)
            }
            // setIsinput2(false)
        }
        else{
            setCheckboxOCT(false);
            if(isCheckboxColour){
                setlabelstyleOCT({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'white',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'pointer'
                })
                setlabelstyleColour({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'white',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'pointer'
                })
                setIsinput1(false);
                setIsinput2(false);
                setZip(false)
            }
            else{
                    setlabelstyleOCT({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'rgb(210, 210, 210)',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'not-allowed'
                })
                setIsinput1(false);
                setZip(false)
            }
        }
    }

    const handlecheckboxColour = ()=>{
        if(!isCheckboxColour){
            setCheckboxColour(true);//下一步进行渲染
            // setCheckboxOCT(true);
            setlabelstyleColour({
                display:'flex',
                justifyContent:'center',
                backgroundColor:'white',
                height:'200px',
                borderRadius:'5px',
                boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                cursor:'pointer'
            })
            setlabelstyleOCT({
                display:'flex',
                justifyContent:'center',
                backgroundColor:'white',
                height:'200px',
                borderRadius:'5px',
                boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                cursor:'pointer'
            })
            setIsinput1(false);
            setIsinput2(false);
            setZip(false)
        }
        else{
            setCheckboxColour(false)
            if(isCheckboxOCT){
                setlabelstyleOCT({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'white',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'pointer'
                })
                setlabelstyleColour({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'rgb(210, 210, 210)',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'not-allowed'
                })
                setIsinput1(false)
                setZip(false)
            }
            else{
                setlabelstyleOCT({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'rgb(210, 210, 210)',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'not-allowed'
                })
                setlabelstyleColour({
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'rgb(210, 210, 210)',
                    height:'200px',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                    cursor:'not-allowed'
                })
                // setIsinput1(false)
                // setIsinput2(false)
            }
        }
    }

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

    const [Isinput1,setIsinput1] =  useState(false);
    const [Isinput2,setIsinput2] =  useState(false);
    const [Iszip,setZip]=useState(false)

    const handlefile1 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        console.log(file?.type);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target) {
                // setIsinput1(e.target.result as string);
                if(file.type==='image/jpeg' || file.type==='image/png'){
                    setIsinput1(true)
                    }
                if(isCheckboxOCT || isCheckboxColour){
                    setlabelstyleOCT({
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor:'white',
                        height:'200px',
                        backgroundImage:`url(${e.target.result})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:'5px',
                        boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                        cursor:'pointer'
                    })
                }
                if(file.type==='application/x-zip-compressed'){
                    setZip(true);
                }
                // console.log(e.target.result)
              }
            };
            reader.readAsDataURL(file);
            // console.log(reader.readAsDataURL(file))
          }
    }

    const handlefile2 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        // console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target) {
                // setIsinput2(e.target.result as string);
                if(file.type==='image/jpeg' || file.type==='image/png'){
                setIsinput2(true)
                }
                // console.log(e.target.result)
                if(isCheckboxColour){
                    setlabelstyleColour({
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor:'white',
                        height:'200px',
                        backgroundImage:`url(${e.target.result})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:'5px',
                        boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                        cursor:'pointer'
                    })
                }
                if(file.type==='application/x-zip-compressed'){
                    setZip(true);
                }
              }
            }
            reader.readAsDataURL(file);
            // console.log(reader.readAsDataURL(file))
          }
    }
    const count = useContext(tag);

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            background:'linear-gradient(to bottom right, rgb(201, 217, 251),2%,rgb(235, 239, 255),rgb(201, 217, 251))',
            paddingBottom:'50px'
        }}>
            <Nav/>
            <div style={{
                marginTop:'40px',
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
                    // marginTop:'50px'
                }}>
                    <header>
                        PS：当同时选择OCT模式与彩色眼底模式的时候，只能上传各一张图片，而彩色眼底可以上传左右眼各一张图片
                    </header>
                    <label htmlFor="OCT">
                        <input type="file" id="OCT" onChange={(e)=>{handlefile1(e)}} disabled={(!isCheckboxOCT && !isCheckboxColour)} accept=".jpg,.png,.zip" style={{
                            display:'none',
                        }}/>
                        <div style={labelstyleOCT}>
                            {/* <img src="" alt="眼睛图片"/> */}
                            {
                                ((isCheckboxColour||isCheckboxOCT)) ? ((Isinput1)?(''):((Iszip)?(<FileZipOutlined style={{
                                    fontSize:'50px'}} />):(                                   
                                    <FileAddOutlined style={{
                                            fontSize:'50px'
                                            }}
                                        ></FileAddOutlined>)
                                    )):(
                                        <CloseOutlined style={{
                                            fontSize:'50px'
                                            }}
                                        ></CloseOutlined>
                                    )
                            }
                        </div>
                    </label>
                    <label htmlFor="colour">
                    <input type="file" id="colour" onChange={(e)=>{handlefile2(e)}} disabled={!isCheckboxColour} accept=".jpg,.png,.zip" style={{
                            display:'none',
                    }}/>
                        <div style={labelstyleColour}>
                            {/* display:'flex',
                            justifyContent:'center',
                            backgroundColor:'white',
                            height:'200px',
                            borderRadius:'5px',
                            boxShadow:'1px 1px 5px 5px rgb(141, 141, 141)',
                            cursor:'pointer'
                             */}
                            { isCheckboxColour ? ((Isinput2)?(''):((Iszip)?(<FileZipOutlined style={{
                                fontSize:'50px'
                            }} />):(                                    
                                <FileAddOutlined style={{
                                        fontSize:'50px'
                                        }}
                                    ></FileAddOutlined>)
                                )):(
                                    <CloseOutlined style={{
                                        fontSize:'50px'
                                        }}
                                    ></CloseOutlined>
                                )
                            }
                            {/* <img src="" alt="彩色眼底"/> */}
                        </div>
                    </label>
                    <div>
                        <Checkbox onChange={(e)=>{
                            handlecheckboxOCT()
                        }}>OCT</Checkbox> 
                        {/* 使用onchange */}
                        <Checkbox onChange={(e)=>{
                            handlecheckboxColour()
                        }}>彩色眼底</Checkbox>
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
                        if (count) {
                            count.setcount(count.iscount + 1);
                        }
                    }
                }
                style={{
                    height:'50px',
                    width:'150px',
                    fontSize:'20px',
                    border:'solid 1px',
                    borderColor:'rgb(154, 184, 255)',
                    borderRadius:'20px',
                    backgroundColor:isHovered ? 'rgb(200, 216, 253)':'white',
                    color:isHovered ? 'white':'rgb(165, 192, 255)',
                    transition:'background-color 1s ease,color 1s ease',
                    cursor:'pointer',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >Submit</button>
                {/*提交事件*/}
            </div>
        </div>
    );
}