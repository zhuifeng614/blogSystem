import axios from "axios"
import qs from "querystring"
import {message} from "antd"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import {BASEURL} from "../config"
axios.defaults.baseURL = BASEURL
axios.interceptors.request.use((config)=>{
	NProgress.start()
	const {method,data} = config
	if(method.toLowerCase() === "post" && data instanceof Object){
		config.data = qs.stringify(data)
	}
	return config
})

axios.interceptors.response.use(
	(response)=>{
		NProgress.done()
		return response.data
	},
	(error)=>{
		NProgress.done()
		message.error(error.messages)
		return new Promise(()=>{})
	}
)
export default axios