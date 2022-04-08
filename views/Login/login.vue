<template>
    <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-widrh="100px"
        class="login-container"
        >
        <h3 class="login_title">系统登录 </h3>
        <el-form-item
            label="用户名"
            label-widrh="80px"
            prop="username"
            class="username"
            >
            <el-input 
            type="input"
            v-model="id"
            autocomplete="off"
            placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item
            label="密码"
            label-widrh="80px"
            prop="password"
            >
            <el-input
                type="password"
                v-model="password"
                autocomplete="off"
                placeholder="请输入密码"
            ></el-input>
        </el-form-item>
        <el-form-item class="login_submit"> 
            <el-button type="primary" @click="login()" class="login_submit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'TheLogin',
    data(){
        return {
            id:'',
            password:'',
            form:{

            },
            rules:{
                id:[
                    {required: true,message:"请输入用户名",trigger:"blur"},
                    {
                        min:2,
                        message:"用户名长度不能小于两位",
                        trigger:"biur"
                    }
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:"blur"}
                ]
            }
        }
    },
    methods:{
        login(){
            this.$request('http://82.157.62.161:8001/user/login','post',{id:this.id,password:this.password}).then(res =>{
          console.log(res);
            })
           
        }
    }
}
</script>

<style lang="less" scoped>
.login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

.login_submit{
    margin: 10px auto 0px auto;
    text-align: center;
}
</style>
