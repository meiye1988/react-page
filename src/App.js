// import React, { Component } from 'react';

import React from 'react';
import { Route,Switch } from 'react-router-dom'
import './App.css';
import './css/toast.css';
import LeftMenu from './leftMenu.js'
// 引入单个页面（包括嵌套的子页面）
import Table from './components/table.js'
import Form from './components/form.js'
import Charts from './components/charts.js'
import ToastShow from './components/toastShow.js'
import Todos from './components/todos/index.js'
import Notepad from './components/notepad/index.js'
//moment.locale('zh-cn');

const Rightwrap = () => (
	<div className="rightWrap">
		<Switch>
			<Route exact path='/form' component={Form}/>
			<Route path='/table' component={Table}/>
			<Route path='/charts' component={Charts}/>
			<Route path='/toastShow' component={ToastShow}/>
			<Route path='/todos' component={Todos}/>
			<Route path='/notepad' component={Notepad}/>
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
