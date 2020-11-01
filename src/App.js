import React,{Component} from "react"
import './App.less'
import {Redirect, Route,Switch} from "react-router-dom"
import Login from "./pages/login/login"
import Home from "./pages/home/home"

export default class App extends Component{
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Redirect to="/login"/>
      </Switch>
    )
  }
}
