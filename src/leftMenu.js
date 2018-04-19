import React from 'react';
import ReactDOM from 'react-dom';
import {Menu,Icon} from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

const menuListJson = [
	{"id":1,
	"name":"基础",
	"icon":"mail",
	"children":[
		{"id":2,"name":"表单","link":"/form"},
		{"id":3,"name":"表格","link":"/table"},
		{"id":4,"name":"图表","link":"/charts"},

	]},
	{"id":5,
	"name":"其他",
	"icon":"appstore",
	"children":[
		{"id":5,"name":"交互","link":"/ui"},

	]},
];
class MeunList extends React.Component{

	render(){
		return (
			<Menu
			defaultSelectedKeys={['']}
			defaultOpenKeys={['']}
			mode="inline"
			theme="dark"
			//inlineCollapsed={this.state.collapsed}
			>
			{
				menuListJson.map((p,i) => {
					console.log(p.id);
					return (
						<SubMenu key={p.id} title={<span><Icon type={p.icon} /><span>{p.name}</span></span>}>
								{
									p.children.map(v=>{
										return (
											<Menu.Item key={v.id}><Link to={v.link}>{v.name}</Link></Menu.Item>
										)
									})
								}
						</SubMenu>
					)
				})
			}	
			</Menu>
		)
	}
}

const leftMenu = () => (
		<div className="leftMenu">
			<MeunList />	
		</div>	
)
export default leftMenu;