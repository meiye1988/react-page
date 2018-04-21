// import React, { Component } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link,Switch } from 'react-router-dom'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {Row,Col,Button} from 'antd';
import './App.css';
import './css/toast.css';
import LeftMenu from './leftMenu.js'
// 引入单个页面（包括嵌套的子页面）
import Table from './components/table.js'
import Form from './components/form.js'
import Charts from './components/charts.js'
import ToastShow from './components/toastShow.js'

//moment.locale('zh-cn');

const Rightwrap = () => (
	<div className="rightWrap">
		<Switch>
			<Route exact path='/form' component={Form}/>
			<Route path='/table' component={Table}/>
			<Route path='/charts' component={Charts}/>
			<Route path='/toastShow' component={ToastShow}/>
		</Switch>
	</div>
)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange() {
  
  }
  render() {
    return (
		<div>
			<LeftMenu />	
			<Rightwrap />	
		</div>
		
    );
  }
}
 export default App;
