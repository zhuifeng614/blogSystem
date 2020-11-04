import React, { Component } from 'react'
import {Link,withRouter} from "react-router-dom"
import {Menu} from "antd"
import "./css/menus.less"
import logo from "../../static/img/logo.jpg"
import menus from "../../config/menu-config"
const { Item,SubMenu } = Menu

@withRouter
class Menus extends Component {
	creatMenus = (menuArr)=>{
		return menuArr.map(item => {
			if(!item.children){
				return(
					<Item key={item.key} icon={item.icon}>
						<Link to={item.path}>
							{item.title}
						</Link>
					</Item>
				)
			}else{
				return(
					<SubMenu key={item.key} icon={item.icon} title={item.title}>
						{this.creatMenus(item.children)}
					</SubMenu>
				)
			}
		})
	}
	render() {
		const {pathname} = this.props.location
		let openKey = pathname.split("/")
		let pitchKey = pathname.split("/").reverse()[0]
		return (
			<div>
				<div className="hearLogo">
					<img src={logo} alt="logo"/>
					<div className="hearText">博客管理后台</div>
				</div>
				<div>
					<Menu
						selectedKeys={[pitchKey]}
						defaultOpenKeys={openKey}
						mode="inline"
						theme="dark"
					>
						{this.creatMenus(menus)}
					</Menu>
      </div>
			</div>
		)
	}
}
export default Menus
