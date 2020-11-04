import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/map/js/china'
import geoJson from 'echarts/map/json/china.json'
import { geoCoordMap, provienceData } from './jeo';
import './css/visualchart.less'
export default class Visualchart extends Component {
	componentDidMount(){
		this.createLine()
		this.createpie()
		this.createscatter()
	};

	createLine = ()=>{
		let linechart = echarts.init(document.getElementById('line'))
		linechart.setOption({
		xAxis: {
				type: 'category',
				boundaryGap : false,
				axisTick:{
					show: false,
				},
				axisLabel:{
					show: true,
					interval: 0,
					rotate: 20,
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				},
				axisLine:{
					lineStyle: '#999'
				},
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
				type: 'value',
				axisLabel:{
					show: true,
					interval: 0,
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				},
    },
    series: [{
        data: [30, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
		})
	}
	createpie = ()=>{
		let piechart = echarts.init(document.getElementById('pie'))
		piechart.setOption({
			// backgroundColor: '#2c343c',
			title: {
				text: '',
				left: 'center',
				top: 0,
				textStyle: {
						color: '#ccc'
				}
		},

		tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
		},

		visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
						colorLightness: [0, 1]
				}
		},
		series: [
				{
						name: '访问来源',
						type: 'pie',
						radius: ["10%","50%"],
						center: ['50%', '50%'],
						data: [
								{value: 335, name: '直接访问'},
								{value: 310, name: '邮件营销'},
								{value: 274, name: '联盟广告'},
								{value: 235, name: '视频广告'},
								{value: 400, name: '搜索引擎'}
						].sort(function (a, b) { return a.value - b.value; }),
						roseType: 'radius',
						label: {
								color: 'rgba(255, 255, 255, 0.3)'
						},
						labelLine: {
								lineStyle: {
										color: 'rgba(255, 255, 255, 0.3)'
								},
								smooth: 0.2,
								length: 10,
								length2: 20
						},
						itemStyle: {
								color: (params)=>{
									let colorList = ['#47A474', '#47A474', '#008D89', '#006D94','#D19A5E'];
									return colorList[params.dataIndex]
								},
								shadowBlur: 200,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
						},

						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
								return Math.random() * 200;
						}
				}
			]
		})
	}
	createscatter = ()=>{
		const data = [
			{ name: '黑龙江', area: '东北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '吉林', area: '东北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '辽宁', area: '东北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '内蒙古', area: '其他', type: 'areaCenterCity', InValue: '0' },
			{ name: '北京', area: '华北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '天津', area: '华北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '河北', area: '华北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '山东', area: '华北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '山西', area: '华北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '江苏', area: '华东大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '上海', area: '华东大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '浙江', area: '华东大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '福建', area: '华南大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '广东', area: '华南大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '海南', area: '华南大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '台湾', area: '其他', type: 'areaCenterCity', InValue: '0' },
			{ name: '香港', area: '其他', type: 'areaCenterCity', InValue: '0' },
			{ name: '澳门', area: '其他', type: 'areaCenterCity', InValue: '0' },
			{ name: '河南', area: '华北大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '安徽', area: '华中大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '江西', area: '华中大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '广东', area: '华南大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '陕西', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '湖北', area: '华中大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '湖南', area: '华中大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '广西', area: '华南大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '宁夏', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '重庆', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '贵州', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '四川', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '云南', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '甘肃', area: '华西大区', type: 'areaCenterCity', InValue: '0' },
			{ name: '青海', area: '其他', type: 'areaCenterCity', InValue: '0' },
			{ name: '西藏', area: '其他', type: 'areaCenterCity', InValue: '0' },
			{ name: '新疆', area: '其他', type: 'areaCenterCity', InValue: '0' }
		]
		echarts.registerMap('china', geoJson)
		for (const item of provienceData) {
			if (item.area === '东北大区') {
					item.itemStyle = {
							normal: {
									areaColor: '#3CA2FC',
							},
							emphasis: {
									areaColor: '#3CA2FC',
							}
					}
			} else if (item.area === '华北大区') {
					item.itemStyle = {
							normal: {
									areaColor: '#6CAFBE',
							},
							emphasis: {
									areaColor: '#6CAFBE',
							}
					}
			} else if (item.area === '华中大区') {
					item.itemStyle = {
							normal: {
									areaColor: '#ADD03C',
							},
							emphasis: {
									areaColor: '#ADD03C',
							}
					}
			} else if (item.area === '华东大区') {
					item.itemStyle = {
							normal: {
									areaColor: '#A13614',
							},
							emphasis: {
									areaColor: '#A13614',
							}
					}
			} else if (item.area === '华西大区') {
					item.itemStyle = {
							normal: {
									areaColor: '#FFBA00',
							},
							emphasis: {
									areaColor: '#FFBA00',
							}
					}
			} else if (item.area === '华南大区') {
					item.itemStyle = {
							normal: {
									areaColor: '#FFD300',
							},
							emphasis: {
									areaColor: '#FFD300',
							}
					}
			} else if (item.area === '南海诸岛') {
						item.itemStyle = {
							normal: {
								borderColor: '#fff', // 区域边框颜色
								areaColor: '#fff', // 区域颜色
							},
							emphasis: {
								show: false,
								// borderColor: '#fff',
								// areaColor:"#fff",
							}
						}
			} else {
					item.itemStyle = {
							normal: {
									areaColor: '#D9D9D9',
							},
							emphasis: {
									areaColor: '#D9D9D9',
							}
					}
			}
		}

		let scatterchart = echarts.init(document.getElementById('middleView'))
		scatterchart.setOption({
			tooltip: {
				show: false, // 不显示提示标签
				// formatter: '{b}', // 提示标签格式
				//鼠标放地图的某一块，显示的提示框
				formatter(params, ticket, callback) {
						return `'批复投资额（亿元）'<br />${params.name}：${params.data.InValue}`
				},
				backgroundColor: '#ff7f50', // 提示标签背景颜色
				textStyle: { color: '#fff' } // 提示标签字体颜色
		},
		grid: {
				left: '10%',
				right: '10%',
				top: '10%',
				bottom: '10%',
				containLabel: true
		},
		geo: {
				map: 'china',
				roam: false,
				zoom: 1.2,
				tooltip: {
						show: false, // 不显示提示标签
				},
				label: {
						normal: {
								show: false, // 显示省份标签
								textStyle: { color: '#c71585' }// 省份标签字体颜色
						},
						emphasis: {// 对应的鼠标悬浮效果
								show: false,
								textStyle: { color: '#800080' }
						}
				},
				itemStyle: {
						normal: {
								borderWidth: 0.5, // 区域边框宽度
								borderColor: '#000', // 区域边框颜色
								areaColor: '#ffefd5', // 区域颜色
								label: { show: false }
						},
						emphasis: {
								show: false,
								borderWidth: 0.5,
								borderColor: '#4b0082',
								areaColor: '#ffdead',
						}
				},
		},
		series: [
				{
						type: 'scatter',
						coordinateSystem: 'geo',
						data: this.convertData(data),
						symbolSize: 1,
						symbolRotate: 40,
						label: {
								normal: {
										formatter: '{b}',
										position: 'top',
										show: true
								},
								emphasis: {
										show: false
								}
						},
						tooltip: {
								show: false, // 不显示提示标签
								// 显示提示的标签
								formatter(name) {
										return `Legend ${name}`;
								}, // 提示标签格式
								backgroundColor: '#fff', // 提示标签背景颜色
								borderColor: '#ccc',
								borderWidth: 5,
								textStyle: { color: '#000' } // 提示标签字体颜色
								},
						itemStyle: {
								normal: {
										color: 'black'
								}
						}
				},
				{
						type: 'map',
						mapType: 'china',
						roam: false,
						zoom: 1.2,
						tooltip: {
								show: false, // 不显示提示标签
						},
						label: {
								normal: {
										show: false // 显示省份标签
								},
								emphasis: {
										show: false,
								}
						},
						itemStyle: {
								normal: {
										borderWidth: 0.5, // 区域边框宽度
										borderColor: '#fff', // 区域边框颜色
										label: { show: false }
								},
								emphasis: {
										show: false,
								}
						},
						// geoIndex: 0,
						//鼠标放入地图显示提示框
						tooltip: { show: true },
						data: provienceData
				}
			]
		})
	}

	convertData(data) {
		const res = [];
		for (let i = 0; i < data.length; i++) {
				const geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
						res.push({
								name: data[i].name,
								value: geoCoord.concat(data[i].area),
								area: data[i].area,
								type: data[i].type,
								InValue: data[i].InValue
						});
				}
		}
		return res;
	}

	render() {
		return (
			<div className="visualchart">
				<div className="headerImg">数据可视化</div>
				<div className="views">
					<div className="leftView">
						<div id="line"></div>
						<div id="pie"></div>
					</div>		
					<div id="middleView"></div>
					<div className="rightView"></div>
				</div>
				
			</div>
		)
	}
}
