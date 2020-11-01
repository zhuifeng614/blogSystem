import React, { Component } from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import { Layout } from 'antd';
import "./css/home.less"
import Header from "../header/header"
import Menus from "../../components/menus/menus"
import Visualchart from "../visualchart/visualchart"
import Users from "../users/users"
import Project from "../projects/project"
const { Footer, Sider, Content } = Layout;

export default class Home extends Component {
	render() {
		return (
				<Layout className="layout">
					<Sider><Menus/></Sider>
					<Layout>
						<Header/>
						<Content>
							<Switch>
								<Route path="/home/visualchart" component={Visualchart}/>
								<Route path="/home/blog_regulator/Project" component={Project}/>
								<Route path="/home/user_regulator" component={Users}/>
								<Redirect to="/home/visualchart"/>
							</Switch>
						</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
		)
	}
}
