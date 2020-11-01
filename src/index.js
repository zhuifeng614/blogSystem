import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter} from "react-router-dom"
import App from './App';
import store from "./redux/store"

// store.subscribe(()=>{
//  ReactDOM.render( <BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'))
// })



ReactDOM.render( <BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'))
