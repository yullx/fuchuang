<template>
<el-row class="home" :gutter="20">
       <el-col :span="8" style="margin-top: 20px">
           <el-card shadow="hover" >
               <div class="user">
                   <img :src="userImg" />
                   <div class="userinfo">
                       <p class="name">用户名</p>
                       <p class="access">超级管理员</p>

                   </div>
               </div>
               <div class="login-info">
                   <p>上次登录时间：<span>2022-3-29</span></p>
                   <p>上次登录地点：<span>天津</span></p>
               </div>
           </el-card>
           <el-card style="margin-top: 20px; height: 460px;">
               <el-table :data="tableData">             //接收一个叫data的数据(通常用接口返回)
                   <el-table-column v-for="(val,key) in tablelabel" :key="key" :prop="key" :label="val">

                   </el-table-column>
                   </el-table>    

           </el-card>
       </el-col>
       <el-col style="margin-top: 20px" :span="16">
           <div class="num">
               <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
                   <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color }"></i>
                   <div class="detail">
                       <p class="num">{{item.value}}</p>
                       <p class="txt">{{item.name}}</p>
                   </div>
               </el-card>
           </div>
           <el-card style="height: 280px">
               <div style="height: 280px" ref="todayEcharts"></div>
               <!-- <echart :chartData="echartData.today" style="height: 280px" /> -->
           </el-card>
           
            <el-card style="height: 280px">
                <div style="height: 280px" ref="weekEcharts"></div>
                <!-- <echart :chartData="echartData.week" style="height: 280px" /> -->
            </el-card>
           
       </el-col>
   </el-row>
</template>

<script>
import {getData} from '../../api/data.js'
import * as echarts from 'echarts'
// import Echart from '../../src/components/ECharts.vue'

export default {
    name: 'MyHome',
    // components:{
    //     Echart
    // },
    data () {
        return{
            userImg: require('../../src/assets/images/user.png'),
            tableData:[],
            tablelabel:{
                location:'所在地址',
                rednumber:'红灯数量',
                greennumber:'绿灯数量'
                
            },
            countData:[
                {
                    name:'今日车流量',
                    value:'580',
                    icon:'truck',
                    color:'#2ec7c9',
                },
                 {
                    name:'本周车流量',
                    value:'1800',
                    icon:'truck',
                    color:'#ffb980',
                },
                 {
                    name:'本月车流量',
                    value:'8888',
                    icon:'truck',
                    color:'#F56C6C',
                },
                {
                    name:'今日拥堵路口数',
                    value:'580',
                    icon:'map-location',
                    color:'#2ec7c9',
                },
                 {
                    name:'本周拥堵路口数',
                    value:'1800',
                    icon:'map-location',
                    color:'#ffb980',
                },
                 {
                    name:'本月拥堵路口数',
                    value:'8888',
                    icon:'map-location',
                    color:'#F56C6C',
                },
            ],
            // echartData:{
            //     today:{
            //         xData:[],
            //         series:[]
            //     },
            //     week:{
            //         xData:[],
            //         series:[]
            //     }
            // }
        }
    },
    mounted(){         //接口请求(调用api里的data.js)
        getData().then(res =>{
            const {code ,data } = res.data
            if(code === 20000) {
                this.tableData= data.tableData
                //今日拥堵路口数量柱状图
                const todayOption = {
                    title: {
                    text: '今日拥堵路口数量'
                    },
                    legend:{
                        //图例文字颜色
                        textStyle:{
                            color:"#333",
                        },
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
                    data: data.todayData.map(item=>item.date),
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
                    series:[{
                        name:'拥堵路口数',
                        data:data.todayData.map(item=>item.new),
                        type:'bar'
                    }
                    ],
                }
                // this.echartData.today.xData=data.todayData.map(item=>item.date)
                // this.echartData.today.series=[{
                //         name:'拥堵路口数',
                //         data:data.todayData.map(item=>item.new),
                //         type:'bar'
                //     }
                //     ]
                const T= echarts.init(this.$refs.todayEcharts)
                T.setOption(todayOption)
                //本周拥堵路口数量柱状图
                const weekOption ={
                    title: {
                    text: '本周拥堵路口数量'
                    },
                    legend:{
                        //图例文字颜色
                        textStyle:{
                            color:"#333",
                        },
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
                    data: data.weekData.map(item=>item.name),
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
                    series:[{
                        name:'拥堵路口数',
                        data:data.weekData.map(item=>item.value),
                        type:'bar'
                    }
                    ],
                }
                // this.echartData.week.xData=data.weekData.map(item=>item.name)
                // this.echartData.week.series=[{
                //         name:'拥堵路口数',
                //         data:data.weekData.map(item=>item.value),
                //         type:'bar'
                //     }
                //     ]
                const W=echarts.init(this.$refs.weekEcharts)
                W.setOption(weekOption)
            }
        console.log(res)
        })
    }
}
</script>

