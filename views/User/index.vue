
<template>
   <el-row >
        <el-col :span="8" style="margin-top: 20px;  ">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span >绿波功能</span>
                    
                </div>
                <div class="demo-input-suffix">
                    
                    输入管理员信息：
                    <br>
                    <br>
                    <el-input placeholder="请输入管理员账号" prefix-icon="el-icon-search" v-model="input1"></el-input>
                    <br>
                    <br>
                    <el-input placeholder="请输入管理员密码" prefix-icon="el-icon-search" v-model="input2" show-password></el-input>
                </div>
                <br>
                <div class="buttonlogin">
                    <el-button  size="medium" type="primary" >登录</el-button>
                </div>
            </el-card>
            <!-- <el-card class="box-card" shadow="hover" >
                <div class="green">
                <h1 class="greenfunction">绿波功能</h1>

                </div>
            </el-card> -->
        </el-col>
        <el-col :span="8" style="margin-top: 20px;  "> 
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span >路灯控制</span>
                        
                    </div>
                    <div class="demo-input-suffix">
                        输入想要控制的路口ID:
                        <br>
                        <br>
                        <el-input placeholder="请输入路口的ID" prefix-icon="el-icon-search" v-model="input3"></el-input>
                        <br>
                        <br>
                        将路灯转变为：
                    </div>
                    <br>
                    <div class="buttonlogin">
                        
                        <el-button  size="medium" type="danger" >红灯</el-button>
                        <el-button  size="medium" type="success" >绿灯</el-button>
                        <el-button  size="medium" type="warning">黄灯</el-button>
                    </div>
                    <br>
                    <div class="demo-input-suffix">
                        输入想要控制的交通信号灯的时长
                        <br>
                        <br>
                        <el-input placeholder="请输时长" prefix-icon="el-icon-search" v-model="input4"></el-input>
                    </div>
                    <br>
                    <div class="buttonlogin">                   
                        <el-button  size="medium" type="primary" >点击完成</el-button>
                    </div>
                </el-card>
            </el-col>
        <el-col :span="8" style="margin-top: 20px;  "><el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span >车辆跟踪</span>
                    
                </div>
                <div class="demo-input-suffix">
                    
                    输入想要跟踪的车牌号：
                    <br>
                    <br>
                    <el-input placeholder="请输入车牌号" prefix-icon="el-icon-search" v-model="input5"></el-input>
                   
                </div>
                <br>
                <div class="buttonlogin">
                    <el-button  size="medium" type="primary" >点击查询</el-button>
                </div>
            </el-card></el-col>
</el-row>
</template>

<script>
export default {
    name: 'IsUser',
    data () {
        return{
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: ''
        }
    }
//     methods: {
//   jump () {
//       this.$router.push('../other/pageOne.vue')
//     }
// }

}
</script>

 <style lang="less" scoped>
//  .green{
//     .greenfunction{
//          display: table-cell;
//             vertical-align: middle;
//     }
//  }
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix{
      text-align: center;
  }

.box-card {
    width: 400px;
}
.buttonlogin{
    text-align: center;
}
</style>
