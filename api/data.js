//接口请求写在data文件里面
import axios from './axios'
//接口的调用
export const getMenu = (param) => {
    return axios .request({
        //接口相关地址
        url: '/permission/getMenu' ,
        //定义接口类型
        method:'post',
        data: param

    })
}

export const getData = () =>{
    return axios.request({
        url:'/api/home/getData'
    })
}

export const getUser = (parms) =>{
    return axios.request({
        url: '/user/getUser',
        method:'get',
        parms
    })
}