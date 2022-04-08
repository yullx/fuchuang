
<template>

    <div ref="echarts"></div>
</template>



<script>
//无版本echarts的引入
import * as echarts from 'echarts'

export default {
    props:{
        isAxisChart:{
            type:Boolean,
            default:true
        },
        //接收props传递进来的参数
        chartData:{
            type:Object,
            default(){
                return{
                    xData:[],
                    series:[]
                }
            }
        }
    },

    //对数据进行监听
    watch: {    
        //对chartData监听（当数据改变时echarts表格应该重新绘制）
        chartData:{
            handler: function(){
                this.initChart()
            },
            //首次监听时也需要触发
            deep: true
        }
        
    },
    //对echarts进行初始化逻辑
    methods:{
        initChart(){
            //处理数据
            this.initChartData()
            if(this.echart){
                this.echart.setOption(this.options)
            }else{
                //初始化echart对象进行赋值
                this.echart = echarts.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
        },
        initChartData(){
            //处理数据时分两种情况
            if(this.isAxisChart){
                this.axisOption.xAxis.data= this.chartData.xData
                this.axisOption.series=this.chartData.series
            }else{
                this.normalOption.series=this.chartData.series
            }
        }
    },
    data(){
        return{
            //柱状图
            axisOption:{
                    //图例文字颜色
                    textStyle:{
                         color:"#333",
                    },
                    
                    grid: {
                    left: "5%",
                     },
                    // 提示框
                    tooltip: {
                        trigger: "axis",
                    },
                    xAxis: {
                    type: "category", // 类目轴
                    data:[],
                    axisLine: {
                    lineStyle: {
                        color: "#17b3a3",
                    },
                    },
                    axisLabel: {
                    interval: 0,
                    color: "#333",
                    },
                    },
                    yAxis: [
                    {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                        color: "#17b3a3",
                        },
                    },
                    },
                    ],
                    color: ["#2ec7c9", "#b6a2de"],
                    series:[],
            },
            normalOption:{
                 tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [],
            },
            echart:null
        }
    },
    //对传入进来的option判断
    computed:{
        options(){
            return this.isAxisChart ? this.axisOption : this.normalOption
        }
    }
}
</script>

