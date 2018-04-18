// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {Menu,Icon,Row,Col,Button} from 'antd';
import './App.css';
const SubMenu = Menu.SubMenu;
//moment.locale('zh-cn');

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
			<div className="leftMenu">
			<Menu
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				theme="dark"
				//inlineCollapsed={this.state.collapsed}
				>
				<SubMenu key="sub1" title={<span><Icon type="mail" /><span>基础</span></span>}>
					<Menu.Item key="1">表格</Menu.Item>
					<Menu.Item key="2">表单</Menu.Item>
					<Menu.Item key="3">图表</Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>其他</span></span>}>
					<Menu.Item key="5">交互</Menu.Item>
				
				</SubMenu>
				</Menu>
			</div>
			<div className="rightWrap">

			</div>
		</div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
 export default App;
