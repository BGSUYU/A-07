import {Conversations,Bubble,Attachments, Sender, useXAgent, useXChat} from '@ant-design/x'
import type { ConversationsProps } from '@ant-design/x';
import { theme , type GetProp} from 'antd'
import { Button,message} from 'antd';
import { CloudUploadOutlined, LinkOutlined,UserOutlined } from '@ant-design/icons';
import React, {useContext, useState} from 'react'
import axios from 'axios'
import markdownit from 'markdown-it';
import Nav from '../components/Nav';
import RegisterForm from '../components/Register';
import LoginForm from '../components/Login';
import {tag} from "../App"

const roles: GetProp<typeof Bubble.List, 'roles'> = {
    ai: {
      placement: 'start',
      avatar: { icon: <UserOutlined />, style: { background: '#fde3cf' } },
      variant:"outlined",
    },
    local: {
      placement: 'end',
      avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
      variant:"outlined",
    },
  };

export default function AI(){
    const ShowRegister = useContext(tag);
    const ShowLogin = useContext(tag);
    // const { message } = App.useApp();

    const {token}=theme.useToken();

    // const [value, setValue] = useState<string>('Hello? this is X!');
    const [loading,setLoading]=useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();

    const [content, setContent] = React.useState('');
    const [H1,setH1] = React.useState('');

    const labels = ['会话1','会话2']

    const items: GetProp<ConversationsProps, 'items'> = Array.from({ length: 2 }).map((_, index) => ({
        key: `item${index + 1}`,
        label: labels[index],
        disabled: index === 3,
      }));

    // Agent for request
    const [agent] = useXAgent({
        request: async ({ message }, { onSuccess, onUpdate }) => {

        await axios.post('http://localhost:20000/api/submit', {content:message})
        .then(response => {
            const fullContent=response.data.message;
            let currentContent = '';
            const id = setInterval(() => {
                const md = markdownit({ html: true, breaks: true });
                currentContent = fullContent.slice(0, currentContent.length + 2);
                onUpdate(md.render(currentContent));

                if (currentContent === fullContent) {
                clearInterval(id);
                onSuccess(md.render(fullContent));
                }
            }, 100);
        })
        .catch(error => {
            console.error('Error submitting data:', error);
        });
        },
    });

    // Chat messages
    const { onRequest, messages } = useXChat({
        agent,
    });

    React.useEffect(() => {
        if (loading) {
          const timer = setTimeout(() => {
            setLoading(false);
            messageApi.open({
                type:'success',
                content:'Send message successfully!'
            });
          }, 3000);
          return () => {
            clearTimeout(timer);
          };
        }
      }, [loading,messageApi]);

    const style_conversation ={
        width:'256px',
        minHeight:'85vh',
        // display:'borderbox',
        marginTop:'0',
        background:token.colorBgContainer,
        borderRadius:token.borderRadius,
        backgroundColor:'rgb(243, 246, 253)',
    }
    
    return(
        <div>
            {ShowRegister?.IsShowRegister ? <RegisterForm /> : <></>}
            {ShowLogin?.IsShowLogin ? <LoginForm /> : <></>}
            {/* <RegisterForm/> */}
            <div style={{
                // overflow:'hidden',
                height:'100%',
            }}>
                <Nav/>
                <div style={
                    {
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        maxHeight:'90vh',
                    }
                }>
                    {contextHolder}
                    <div style={
                        {
                            // backgroundColor:'rgb(177, 176, 176)'
                            // height:'100vh'
                            // position:'fixed',
                            // top:'50px',
                        }
                    }>            
                        <Conversations items={items} defaultActiveKey="item1" style={style_conversation}  />
                    </div>
                    <div 
                    style={{
                        width:"960px",
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                    }}>
                        <div>
                        <h1 style={{
                            display:'flex',
                            justifyContent:'center',
                            marginBottom:0,
                            fontSize:'25px'
                        }}>
                            {H1}
                        </h1>
                            <Bubble.List 
                            roles={roles}
                            style={{ 
                                maxHeight: '70vh',
                                marginBottom:'20px',
                                marginTop:'40px',
                                overflowY:'scroll'
                            }}
                            items={messages.map(({ id, message, status }) => ({
                                key: id,
                                role: status === 'local' ? 'local' : 'ai',
                                content: <div dangerouslySetInnerHTML={{ __html: message }} />,
                            }))}
                            />
                        </div>
                        <div>
                            <Sender
                                loading={agent.isRequesting()}
                                value={content}
                                onChange={setContent}
                                onSubmit={(nextContent) => {
                                setH1(nextContent);
                                setLoading(true);
                                messageApi.open({
                                        type:'info',
                                        content: 'This is a success message',
                                    }
                                );
                                onRequest(nextContent);
                                setContent('');
                                }}
                                onCancel={() => {
                                setLoading(false);
                                messageApi.error('Cancel sending!');
                                }}
                                style={
                                    {
                                        marginBottom:'20px'
                                    }
                                }
                                prefix={
                                <Attachments
                                    beforeUpload={() => false}
                                    onChange={({ file }) => {
                                    message.info(`Mock upload: ${file.name}`);
                                    }}
                                    placeholder={{
                                    icon: <CloudUploadOutlined />,
                                    }}
                                >
                                    <Button type="text" icon={<LinkOutlined />} />
                                </Attachments>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}