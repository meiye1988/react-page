import React from 'react'
import Listp from './list_p'
import { Collapse,Button } from 'antd';
const Panel = Collapse.Panel;
var panAry;
// function callback(key) {
//     console.log(key);
//     key.map(v=>{
//         console.log(v);
//     });
//     panAry = key;
// }
// const panpels = ({undoneList,doneList,cancelList,undoneToDone,cancel,deletes,getPanAry}) => {
//     panAry = getPanAry;
//     return (
//     <Collapse  activeKey={panAry} onChange={callback}>
//         <Panel header="待办事项" key="1">
//             {
//                 undoneList.map(v => (
//                     <Listp key={v.id} 
//                         text={v.text}
//                         cate="UNDONE"
//                         doneEvent={()=>undoneToDone(v.id)}
//                         cancelEvent={()=>cancel(v.id)}
//                     />
//                 ))
//             }
//         </Panel>
//         <Panel header="完成事项" key="2">
//         {
//                 doneList.map(v => (
//                     <Listp key={v.id} 
//                         text={v.text}
//                         cate="DONE"
//                         deleteEvent={()=>deletes(v.id)}
//                     />
//                 ))
//             }
//         </Panel>
//         <Panel header="取消事项" key="3">
//         {
//                 cancelList.map(v => (
//                     <Listp key={v.id} 
//                         text={v.text}
//                         cate="CANCEL"
//                         deleteEvent={()=>deletes(v.id)}
//                     />
//                 ))
//             }
//         </Panel>
//     </Collapse>
// )
// }
class panpels extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            panAry:this.props.getPanAry
        }
        this.callback = this.callback.bind(this);
    }
    

    callback(key){
        key.map(v=>{
                    console.log(v);
            });
        //this.setState({panAry:key});    
        //this.props.changePanpel(key);
        this.props.changePanpel(key);
    }
    render(){

        return (
            <Collapse  activeKey={this.props.getPanpel} onChange={this.callback}>
        <Panel header="待办事项" key="1">
            {
                this.props.undoneList.map(v => (
                    <Listp key={v.id} 
                        text={v.text}
                        cate="UNDONE"
                        doneEvent={()=>this.props.undoneToDone(v.id)}
                        cancelEvent={()=>this.props.cancel(v.id)}
                    />
                ))
            }
        </Panel>
        <Panel header="完成事项" key="2">
        {
                this.props.doneList.map(v => (
                    <Listp key={v.id} 
                        text={v.text}
                        cate="DONE"
                        deleteEvent={()=>this.props.deletes(v.id)}
                    />
                ))
            }
        </Panel>
        <Panel header="取消事项" key="3">
        {
                this.props.cancelList.map(v => (
                    <Listp key={v.id} 
                        text={v.text}
                        cate="CANCEL"
                        deleteEvent={()=>this.props.deletes(v.id)}
                    />
                ))
            }
        </Panel>
    </Collapse>
        )
    }
}

export default panpels;