import React, { Component } from 'react'
import screenfull from "screenfull"
import {Button,Modal} from "antd"
import { FullscreenOutlined,FullscreenExitOutlined,ExclamationCircleOutlined,
MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import "./css/header.less"


export default class Header extends Component {
	state = {
		isFull:false,
		isMove:false
	};
	componentDidMount(){
		screenfull.on('change', () => {
			this.setState({isFull:!this.state.isFull})
		});
	}
	flooding = ()=>{ screenfull.toggle() }
	handMove = ()=>{
		this.setState({isMove:!this.state.isMove})
	}
	exit = ()=>{
		Modal.confirm({
			title: '退出',
			icon: <ExclamationCircleOutlined />,
			content: '确认要退出吗?',
			okText: '确认',
			cancelText: '取消',
			onOk:()=>{console.log("确认退出")}
		});
	}
	render() {
		return (
			<div className="header">
				<div className="flexible"> 
					<Button type="primary" icon={this.state.isMove? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} onClick={this.handMove}></Button>
				</div>
				<div className="headerTop">
					<Button size="small" icon={this.state.isFull? <FullscreenExitOutlined/> : <FullscreenOutlined/>} onClick={this.flooding}/>
					<span className="greetext">早上好 admin</span>
					<Button type="link" onClick={this.exit}>退出登录</Button>
				</div>
			</div>
		)
	}
}
