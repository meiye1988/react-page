import React from 'react'
import ReactDom from 'react-dom'
import Notice from './notice'
var isNoticeLoad = false;//防止频繁点击
class Notification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notice: '', // 存储当前有的notices
            isClose:false,
        }
        this.remove = this.remove.bind(this);
        
    }
    add(noticeAry){
        this.setState({notice:noticeAry,isClose:false});
    }    
    componentDidMount(){
        
    }
    remove(){
        this.setState({isClose:true});
        setTimeout(()=>{
            this.setState({notice:''});
            isNoticeLoad = false;
        },500);
       
    }
    render(){
        let dom = '';
        if(this.state.notice){
            
            dom = <Notice isClose={this.state.isClose}  {...this.state.notice} onRemove={this.remove} ref="NoticeClass" />;
        }
        return (
            <React.Fragment>
                {dom}
            </React.Fragment>
        )
    }

}
var noticedDiv;
const notice = function(iconType,content,duration){
    if(isNoticeLoad){
        return false;
    }
    isNoticeLoad = true;
    let noticeAry = {
        iconType:iconType,
        content:content,
        duration:duration,
    }
    const { ...props } = noticeAry;
    
    if(!noticedDiv){
        noticedDiv = document.createElement('div');
        document.body.appendChild(noticedDiv);
    }
    console.log('props--'+props.iconType);
    let getNotification = ReactDom.render(<Notification {...props} />,noticedDiv);
    getNotification.add(noticeAry);
    return getNotification;
}
var loadHandle;
export default {
    success(content,duartion){
        return notice("check",content,duartion);
    },
    error(content,duartion){
        return notice("close",content,duartion);
    },
    warning(content,duartion){
        return notice("exclamation-circle-o",content,duartion);
    },
    loading(content){
        loadHandle = notice("loading",content,0);
        return loadHandle;
    },
    hideLoading(){
        loadHandle.remove();
    }
}