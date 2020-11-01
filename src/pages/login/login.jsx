import React, { Component } from 'react'
import "./css/login.less"
import logo from "../../static/img/logo.jpg"
import { Form, Input, Button, Checkbox } from 'antd';
import {getuserList} from "../../api/interfaces.js"
const {Item} = Form
export default class Login extends Component {
	render() {
		const layout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 16 },
		}
		const tailLayout = {
			wrapperCol: { offset: 4, span: 16 },
		}
		
		const onFinish = values => {
			this.props.history.replace("/home")
			// let res = await getuserList(values)
			
		}
		return (
			<div id="login">
				<div className="header">
					<img src={logo} alt="logo"/>
					<h1>博客管理后台</h1>
				</div>
				<div className="content">
					<p>用户登录</p>
					<Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
						<Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
							<Input className="unify"/>
						</Item>
						<Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
							<Input.Password className="unify"/>
						</Item>
						<Item {...tailLayout} name="remember" valuePropName="checked">
							<Checkbox>记住密码</Checkbox>
						</Item>
						<Item {...tailLayout}>
							<Button type="primary" htmlType="submit"> 登录 </Button>
						</Item>
    			</Form>
				</div>
			</div>
		)
	}
}
