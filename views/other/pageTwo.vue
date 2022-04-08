<template>
   <div class="manage">
        <el-dialog
            :title="operateType === 'add' ? '新增车辆' : '更新车辆'"
            :visible.sync="isShow"
            >
            <common-form
            :formLabel="operateFormLabel" 
            :form="operateForm" 
            :inline="true" 
            ref="form"
            ></common-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addCar">+ 新增</el-button>
            <common-form 
            :formLabel="formLabel" 
            :form="searchForm" 
            :inline="true" 
            ref="form"
            >
                <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
            </common-form>
        </div>
        <common-table 
        :tableData="tableData" 
        :tableLabel="tableLabel" 
        :config="config" 
        @changePage="getList()" 
        @edit="editCar" 
        @del="delCar"></common-table>
    </div> 
</template>

<script>
import CommonForm from '../../src/components/CommonForm.vue'
import CommonTable from '../../src/components/CommonTable.vue'
import {getUser} from '../../api/data.js'


export default {
    name: 'PageTwo',
    components:{
        CommonForm,
        CommonTable
    },
    data () {
        return{
            operateType: 'add',
            isShow: false,
            operateFormLabel:[
                            {
                    model: "name",
                    label: "车主",
                    type: "input",
                    },
                    {
                    model: "car",
                    label: "车牌号",
                    type: "input",
                    },
                    {
                    model: "over",
                    label: "是否超出年限",
                    type: "select",
                    opts: [
                        {
                        label: "是",
                        value: 1,
                        },
                        {
                        label: "否",
                        value: 0,
                        },
                    ],
                    },
                    {
                    model: "time",
                    label: "违法时间",
                    type: "date",
                    },
                    {
                    model: "addr",
                    label: "违法地址",
                    type: "input",
                    },
            ],
            operateForm: {
                name:'',
                addr:'',
                car:'',
                time:'',
                over:'',
                
            },
            formLabel:[
                 {
                    model:"keyword",
                    label:'',
                    type: "input",
                },
            ],
            searchForm:{
                keyword:'',
            },
            tableData:[],
            tableLabel:[
                {
                    prop:"name",
                    label:"车主"
                },
                {
                    prop:"car",
                    label:"车辆编号",
                    width:200

                },
                {
                    prop:"overLabel",
                    label:"是否超出使用年限",
                    width:200
                },
                {
                    prop:"time",
                    label:"违法时间",
                    width:200
                },
                {
                    prop:"addr",
                    label:"违法地址",
                    width:320
                }
            ],
            config:{
                page: 1,
                total: 30 
            }

        }
    },
    methods:{
        confirm(){
            if(this.operateType === 'edit'){
                //调用相关接口
                this.$http.post('/user/edit',this.operateForm).then(res =>{
                    console.log(res)
                    this.isShow = false
                    this.getList()
                })
            }else{
                 this.$http.post('/user/add',this.operateForm).then(res =>{
                     console.log(res)
                    this.isShow = false
                    this.getList()
                })
            }
        },
        addCar(){
            this.isShow = true
            this.operateType = 'add'
            this.operateForm = {
                name:'',
                addr:'',
                car:'',
                time:'',
                over:'',
                
            }
        },
        editCar(row) {
            this.operateType= 'edit'
            this.isShow =true
            this.operateForm=JSON.parse(JSON.stringify(row))
        },
        delCar(row) {
            this.$confirm("此操作将永久删除该文件,是否继续?","提示",{
                confirmButtonText:"确认",
                cancelButtonText:"取消",
                type:"warning"
            }).then(() =>{
                const id =row.id
                this.$http.post("/user/del",{
                    params: {id}

                }).then(() =>{
                    this.$message({
                        type:'success',
                        message:'删除成功'
                    })
                    this.getList()
                })
            })
        },

        getList(name = '') {
              this.config.loading = true
                name ? (this.config.page = 1) : ''
            getUser({
                page: this.config.page,
                name
            }).then(({data : res}) => {
                console.log(res,'res')
                this.tableData = res.list.map(item =>{
                    item.overLabel = item.over === 0 ? "否" : "是"
                    return item
                })
                this.config.total = res.count
                this.config.loading = false
            })
              
            
        }
    },
    created(){
        this.getList()
    }
}
</script>

<style lang="less" scoped>
.manage-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

