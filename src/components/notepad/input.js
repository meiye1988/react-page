import React from 'react'
import { Row, Col ,Input,Button } from 'antd';
import { connect } from 'react-redux'
import {addList,changePanpel} from './actions'

class inputBox extends React.Component{
    constructor(props){
        super(props);
        this.addToInput = this.addToInput.bind(this);
    }
    addToInput(){
        if(!this.input.value.trim()){
            return ;
        }
        this.props.dispatch(addList(this.input.value));
        this.props.dispatch(changePanpel(1));
        this.input.value = '';
    }
    render(){
        return (
            <Row>
            <Col span={8}><input placeholder="输入要办的事项" ref={input=>this.input=input}  /></Col>
            <Col span={4}><Button onClick={this.addToInput} type="primary">添加</Button></Col>
                
            </Row>
        )
        
    }
}
export default connect()(inputBox);