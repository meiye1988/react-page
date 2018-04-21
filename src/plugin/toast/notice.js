import React from 'react'
import {Icon} from 'antd'
//开启或关闭由父组件控制
class notice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           // isClose:false
        }
    }
    static defaultProps = {
        duration:2000,
        iconType:'question',
        content:'无提示',
        isClose:false
    }
    componentDidMount(){
        console.log(this.props.duration);
        if(this.props.duration > 0){
            this.timer = setTimeout(()=>{
                this.close();
            },this.props.duration);
        }
       
    }
    clearTimer(){
        if (this.closeTimer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        

    }
    close(){
        this.clearTimer();
       // this.setState({isClose:true});
       
        this.props.onRemove();
        
    }
    
    render(){
        console.log(this.props.isClose);
        return (
            <div className={`react-toast toast-center ${this.props.isClose==true?'toast-close':''}`}>
                <div className="toast-icon">
                    <Icon type={this.props.iconType} className="fontbold toastIcon" />
                </div>
                <div className="toast-content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default notice;