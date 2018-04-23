//输入input 添加按钮

import React from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.addToInput = this.addToInput.bind(this);
    }
    addToInput(){
        if(!this.input.value.trim()){
            return ;
        }
        console.log(this.input.value);
        this.props.dispatch(addTodo(this.input.value));
    }
    render(){
        return (
            <form action="">
                <input ref={val=>this.input = val} />
                <button onClick={this.addToInput}>添加</button>
            </form>
        )
        
    }
}
export default connect()(AddTodo);