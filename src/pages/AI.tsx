import {Conversations} from '@ant-design/x'
import type { ConversationsProps } from '@ant-design/x';
import { theme , type GetProp} from 'antd'
import React from 'react'

const items: GetProp<ConversationsProps, 'items'> = Array.from({ length: 4 }).map((_, index) => ({
    key: `item${index + 1}`,
    label: `Conversation Item ${index + 1}`,
    disabled: index === 3,
  }));

export default function AI(){

    const {token}=theme.useToken()

    const style ={
        width:'256px',
        background:token.colorBgContainer,
        borderRadius:token.borderRadius,
    }
    return(
        <div>
            <Conversations items={items} defaultActiveKey="item1" style={style} />
        </div>
    )
}