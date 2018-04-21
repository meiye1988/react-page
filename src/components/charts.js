import React from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入折线组件
require('echarts/lib/chart/line')
// 引入饼图组件
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
class charts extends React.Component {
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(this.refs.barReact);
// 绘制图表
let option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
}
myChart.setOption(option);
var myChartLine = echarts.init(this.refs.lineReact);
let optionLing = option;
      optionLing.title.text = "折线"; 
      optionLing.series[0].type = "line"; 
      myChartLine.setOption(optionLing);
      var myChartPie = echarts.init(this.refs.pieReact);
      let optionPie = {
          title : {
            text: '饼图',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
      };
    
      myChartPie.setOption(optionPie);
    }
    render(){
        return (
            <React.Fragment>
                <div ref="pieReact" style={{width: "100%", height: "200px"}}></div>
                <div ref="barReact" style={{width: "100%", height: "200px"}}></div>
                <div ref="lineReact" style={{width: "100%", height: "200px"}}></div>
            </React.Fragment>
        )
    }
}

export default charts;