import React from 'react'
import { Button } from 'antd';
const list = ({doneEvent,cancelEvent,deleteEvent,cate,text}) => {
    switch(cate){
        case 'UNDONE':
            return (
                <p>
                {text}&nbsp;&nbsp;&nbsp;&nbsp;<Button type="primary" onClick={doneEvent}>完成</Button>&nbsp;<Button onClick={cancelEvent}>取消</Button>

            </p>
            )
        break;
        case 'DONE':
            return (
                <p>
                {text}&nbsp;&nbsp;&nbsp;&nbsp;<Button type="primary" onClick={deleteEvent}>删除</Button>

            </p>
            )
        break;
        case 'CANCEL':
            return (
                <p>
                {text}&nbsp;&nbsp;&nbsp;&nbsp;<Button type="primary" onClick={deleteEvent}>删除</Button>

            </p>
            )
        break;
    }
    
}
export default list;