import Nav from "../components/Nav"
import React, { JSX , useContext, useEffect, useState } from 'react';
import { Avatar, Button, Divider, List, Skeleton } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import {PersonChildren,PersonChildrenOCT} from "../components/PersonChildren";
import axios from "axios";
import {tag} from "../App"

// import InfiniteScroll from 'react-infinite-scroll-component';
class itemChildren {
    N:string;
    D:string;
    G:string;
    C:string;
    A:string;
    H:string;
    M:string;
    O:string;
    constructor(N:string,D:string,G:string,C:string,A:string,H:string,M:string,O:string){
        this.N=N;
        this.D=D;
        this.G=G;
        this.C=C;
        this.A=A;
        this.H=H;
        this.M=M;
        this.O=O;
    }
}
class itemChildrenOCT {
    N:string;
    dAMD:string;
    CSC:string;
    DR:string;
    GLC:string;
    MEM:string;
    MYO:string;
    RVO:string;
    wAMD:string;
    constructor(N:string,dAMD:string,CSC:string,DR:string,GLC:string,MEM:string,MYO:string,RVO:string,wAMD:string){
        this.N=N;
        this.dAMD=dAMD;
        this.CSC=CSC;
        this.DR=DR;
        this.GLC=GLC;
        this.MEM=MEM;
        this.MYO=MYO;
        this.RVO=RVO;
        this.wAMD=wAMD;
    }
}
const data = [
    new itemChildren('0.65374','0.125862','0.004721','0.008619','0.006123','0.109588','0.000851','0.040346'),
    new itemChildren('0.275416','0.679974','0.002341','0.008889','0.003731','0.048335','0.000765','0.044146'),
    new itemChildren('0.056664','0.327297','0.007428','0.011919','0.021665','0.393873','0.000567','0.34511'),
]
const dataOCT = [
    new itemChildrenOCT('0.84442408', '0.01195762', '0.04226319', '0.0164974' , '0.01102734', '0.0034201' , '0.03978265', '0.01922258', '0.01140504'),
    new itemChildrenOCT('0.02336856', '0.06078304', '0.0350146' , '0.62797756', '0.0192028' , '0.03800145', '0.09553419','0.02308431', '0.00103123'),
]


export default function Person(){
    async function download() {
        try{
            const response = await axios.get('http://localhost:20000/api/downloadfile',{
                responseType: 'blob', // Set the response type to 'blob'
            })
            const blob = new Blob([response.data], { type: 'application/octet-stream' });

            // 创建一个下载链接
            const href = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            // 设置下载链接和文件名
            link.href = href;
            link.download = 'example.txt'; // 设置文件名
            link.style.display = 'none'; // 隐藏链接

            // 将链接添加到文档中并触发点击
            document.body.appendChild(link);
            link.click();

            // 清理
            document.body.removeChild(link);
            window.URL.revokeObjectURL(href); // 释放对象 URL
        }
        catch (error) {
            console.error('Error downloading file:', error);
        }
    }

    const ul_style = {
        listStyleType:'none',
        paddingLeft:'30px',
        marginLeft:'0px',
        marginTop:'10px',
    }

    const [isdata,setdata] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
            setdata(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[])
    // const onChange = (key: string | string[]) => {
    //     console.log(key);
    //   };
    //   console.log(data[0])

    const items: CollapseProps['items'] = 
    [
        {
          key: '1',
          label: '测试编号：1',
          children: <PersonChildren dataEyes={data[0]} numberEyes="1" typeOfEyes="正常" imgEyes='/1.png' imageEyes="彩色眼底图片"/>,
        },
        {
          key: '2',
          label: '测试编号：4338',
          children: <PersonChildren dataEyes={data[1]} numberEyes="4338" typeOfEyes="糖尿病" imgEyes='/305.jpg' imageEyes="彩色眼底图片"/>,
        },
        {
          key: '3',
          label: '测试编号：305',
          children: <PersonChildren dataEyes={data[2]} numberEyes="305" typeOfEyes="糖尿病、高血压、其他疾病/异常" imgEyes='/4338.png' imageEyes="彩色眼底图片"/>,
        },
        {
          key: '4',
          label: '测试编号：4401',
          children:<PersonChildrenOCT dataEyes={dataOCT[0]} numberEyes="4401" typeOfEyes="Normal" imgEyes='/4401.png' imageEyes="OCT图片"/>,
        },
        {
            key: '5',
            label: '测试编号：5573',
            children:<PersonChildrenOCT dataEyes={dataOCT[1]} numberEyes="5573" typeOfEyes="Diabetic retinopathy" imgEyes='/5573.png' imageEyes="OCT图片"/>,
        }
    ];
    // class CollapseItem {
    //     key: string;
    //     label: string;
    //     children: JSX.Element;
    //     constructor(key: string, label: string, children: JSX.Element) {
    //     this.key=key;
    //     this.label=label;
    //     this.children=children;
    //     }
    // }
    // const itemsColour = [
    //     new CollapseItem('1','测试编号：1',<PersonChildren dataEyes={data[0]} numberEyes="1" typeOfEyes="正常" imgEyes='/1.png' imageEyes="彩色眼底图片"/>),
    //     new CollapseItem('2','测试编号：4338',<PersonChildren dataEyes={data[1]} numberEyes="4338" typeOfEyes="糖尿病" imgEyes='/305.jpg' imageEyes="彩色眼底图片"/>),
    //     new CollapseItem('3','测试编号：305',<PersonChildren dataEyes={data[2]} numberEyes="305" typeOfEyes="糖尿病、高血压、其他疾病/异常" imgEyes='/4338.png' imageEyes="彩色眼底图片"/>),
    //     new CollapseItem('4','测试编号：4401',<PersonChildrenOCT dataEyes={dataOCT[0]} numberEyes="4401" typeOfEyes="Normal" imgEyes='/4401.png' imageEyes="OCT图片"/>),
    //     new CollapseItem('5','测试编号：5573',<PersonChildrenOCT dataEyes={dataOCT[1]} numberEyes="5573" typeOfEyes="Diabetic retinopathy" imgEyes='/5573.png' imageEyes="OCT图片"/>),
    //     new CollapseItem('4','',<></>),
    // ]
    // const count = useContext(tag);
    // if (count && count.iscount !== undefined) {
    //     items.push(itemsColour[count.iscount]);
    //     console.log(items);
    // }
    return(
        <div>
            <Nav/>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:'30px',
                }}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    width:'20%',
                    height:'80vh',
                    backgroundColor:'#f0f2f5',
                    paddingTop:'20px',
                    borderRadius:'10px',
                    boxShadow:'0 0 10px rgba(0, 0, 0, 0.48)',
                }}>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        marginBottom:'20px',}}>
                        <img style={{height:'200px',
                                    width:'200px',
                                    objectFit:'cover',
                                    borderRadius:'50%',
                                    boxShadow:'0 0 10px rgb(0, 0, 0)',
                                    }} src="/header.png" alt="" />{/*头像(可以使用div换backimg)*/}
                    </div>
                    <ul style={ul_style}>用户名:BG</ul>
                    <ul style={ul_style}>账号:19357394830</ul>
                    <ul style={ul_style}>邮箱:19357394830@163.com</ul>
                    <ul style={ul_style}>手机号:19357394830</ul>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'flexEnd',
                    width:'70%',
                }}>
                    <Collapse accordion style={{width:'100%',marginBottom:'30px'}} items={items} defaultActiveKey={['1']}  />
                    <Button style={{width:'100px'}} onClick={download}>导出为txt</Button>
                </div>
            </div>
        </div>
    )
}