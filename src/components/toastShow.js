
import React from 'react'
import Toast from '../plugin/toast/toast'
import {Button} from 'antd'

class toastShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            notices: [], // 存储当前有的notices
            hasMask: true, // 是否显示蒙版
        }
    }
    successToast(){
        Toast.success('操作成功！', 2000);
    }
    errorToast(){
        Toast.error('错误', 2000);
    }
    warningToast(){
        Toast.warning('警告', 2000);
    }
    loadingToast(){
        Toast.loading('请求中');
        setTimeout(()=>{
            Toast.hideLoading();
        },1500);
    }
    render () {
        return (
            <React.Fragment>
                <Button type="primary" onClick={this.successToast}>成功提示</Button><br/>
                <Button type="primary" onClick={this.errorToast}>错误提示</Button><br/>
                <Button type="primary" onClick={this.warningToast}>警告提示</Button><br/>
                <Button type="primary" onClick={this.loadingToast}>loading提示</Button>
            </React.Fragment>
        )
    }
}

export default toastShow