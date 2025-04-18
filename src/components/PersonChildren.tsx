import { url } from "inspector";
import React, { useEffect, useState } from "react";
import {Statistic,ConfigProvider} from "antd";
import { error } from "console";

interface PersonChildrenProps {
    typeOfEyes: string;
    imageEyes: string;
    numberEyes: string;
    dataEyes: { N:string,D:string,G:string,C:string,A:string,H:string,M:string,O:string };
    imgEyes: string;
}
interface PersonChildrenOCTProps {
    typeOfEyes: string;
    imageEyes: string;
    numberEyes: string;
    dataEyes: { N:string,dAMD:string,CSC:string,DR:string,GLC:string,MEM:string,MYO:string,RVO:string,wAMD:string };
    imgEyes: string;
}

export function PersonChildren(props: PersonChildrenProps){
    // const { N } = props.dataEyes;
    // console.log(props.dataEyes.N) 
    return(
        <div>
            {/* <img src="" alt="" /> */}
            <ul>图片类型：{props.imageEyes}</ul>
            <ul>编号：{props.numberEyes}</ul>
            <ul>眼睛类型：{props.typeOfEyes}</ul>
            <div style={{
                display:'flex',
                justifyContent:'flexStart',
                flexDirection:'row',
                flexWrap:'wrap',
                }}>
                <ConfigProvider theme={{
                    components: {
                        Statistic: {
                            contentFontSize:18,
                        },
                    }
                }}>
                    <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    flexWrap:'wrap',
                    }}>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='正常' value={props.dataEyes.N} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='糖尿病' value={props.dataEyes.D} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='青光眼' value={props.dataEyes.G} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='白内障' value={props.dataEyes.C} suffix="/ 1"/>
                    </div>
                    <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    flexWrap:'wrap',
                    }}>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='AMD' value={props.dataEyes.A} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='高血压' value={props.dataEyes.H} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='近视' value={props.dataEyes.M} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'150px'}} title='其他疾病/异常' value={props.dataEyes.O} suffix="/ 1"/>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        width:'100%',
                        marginTop:'20px',
                    }}>
                        <img style={{
                            width:'400px',
                            height:'200px',
                        }} src={props.imgEyes} alt="" />
                    </div>
                </ConfigProvider>
            </div>
        </div>
    )
}
export function PersonChildrenOCT(props: PersonChildrenOCTProps){
    // const { N } = props.dataEyes;
    // console.log(props.dataEyes.N) 
    return(
        <div>
            {/* <img src="" alt="" /> */}
            <ul>图片类型：{props.imageEyes}</ul>
            <ul>编号：{props.numberEyes}</ul>
            <ul>眼睛类型：{props.typeOfEyes}</ul>
            <div style={{
                display:'flex',
                justifyContent:'flexStart',
                flexDirection:'row',
                flexWrap:'wrap',
                }}>
                <ConfigProvider theme={{
                    components: {
                        Statistic: {
                            contentFontSize:18,
                            titleFontSize:12
                        },
                    }
                }}>
                    <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    flexWrap:'wrap',
                    }}>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='normal' value={props.dataEyes.N} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='dryage-relatedmacular degeneration' value={props.dataEyes.dAMD} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='central serous chorioretinopathy' value={props.dataEyes.CSC} suffix="/ 1"/>
                    
                    </div>
                    <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    flexWrap:'wrap',
                    }}>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='diabetic retinopathy' value={props.dataEyes.DR} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='glaucoma' value={props.dataEyes.GLC} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='macular epiretinal membrane' value={props.dataEyes.MEM} suffix="/ 1"/>
                    </div>
                    <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    flexWrap:'wrap',
                    }}>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='myopia' value={props.dataEyes.MYO} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='retinal vein occlusion' value={props.dataEyes.RVO} suffix="/ 1"/>
                    <Statistic style={{marginLeft:'20px', marginRight:'20px', width:'200px'}} title='andwet age-relatedmacular degeneration' value={props.dataEyes.wAMD} suffix="/ 1"/>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        width:'100%',
                        marginTop:'20px',
                    }}>
                        <img style={{
                            width:'200px',
                            height:'200px',
                        }} src={props.imgEyes} alt="" />
                    </div>
                </ConfigProvider>
            </div>
        </div>
    )
}