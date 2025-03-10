import React from "react";
import { Link,Route,Routes,BrowserRouter as Router } from "react-router-dom";
import { Button } from "antd";
import AI from "../pages/AI";

const styles = {
    display: "flex",
    justifyContent: "center",
};

// interface style_0{
//     backgroundColor:string;
// }

// const style_1:style_0 ={
//     backgroundColor:'blue',
// };

export default function NavIndex() {
    return (
            <div className="Nav" style={ styles }>
                <Button type="primary" style={{
                    width:'96px',
                    marginRight:'25px',
                    borderRadius:'15px',
                    backgroundColor:'rgb(79, 90, 249)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    <Link to='/introduce' className="Link" style={{
                        fontSize:'15px',
                        padding:'5px',
                        paddingBottom:'5px',
                        paddingTop:'5px'
                        }}>
                        介绍</Link>
                </Button>
                <Button type="primary" style={{
                    borderRadius:'15px',
                    width:'96px',
                    backgroundColor:'rgb(79, 90, 249)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                    <Link to='/AI' className="Link" style={{
                        fontSize:'15px',
                        padding:'5px',
                        paddingBottom:'5px',
                        paddingTop:'5px',
                        }} >
                        AI 提 问</Link>
                </Button>
                <Button type="primary" style={{
                    marginLeft:'25px',
                    borderRadius:'15px',
                    width:'96px',
                    backgroundColor:'rgb(79, 90, 249)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    <Link to='API' className="Link" style={{
                        fontSize:'15px',
                        padding:'5px',
                        paddingBottom:'5px',
                        paddingTop:'5px'
                        }}>
                        API</Link>
                </Button> 
            </div>

    );
}