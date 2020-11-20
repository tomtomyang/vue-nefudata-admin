<template>
    <div>
    <el-form :inline="true" :model="addClassForm">
        <el-form-item label="表层级">
            <el-input v-model="addClassForm.className" placeholder="请输入文字" size="small"></el-input>
        </el-form-item>
        <el-form-item label="层级描述">
            <el-input v-model="addClassForm.classInfo" placeholder="请输入文字" size="small"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addClass()" size="small">添加</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableClassList" style="width: 100%" stripe border height="225">
        <el-table-column label="表层级">
            <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column label="层级描述">
            <template slot-scope="scope">
            <span>{{ scope.row.inf }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
            <template slot-scope="scope">
            <el-button size="mini" @click="editClass(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="deleteClass(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-form :inline="true" :model="addSourceForm" style="margin-top:20px;">
        <el-form-item label="分类名称">
            <el-input v-model="addSourceForm.sourceName" placeholder="请输入文字" size="small"></el-input>
        </el-form-item>
        <el-form-item label="分类描述">
            <el-input v-model="addSourceForm.sourceInfo" placeholder="请输入文字" size="small"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addSource()" size="small">添加</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableSourceList" style="width: 100%" stripe border height="225">
        <el-table-column label="表物理分类">
            <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column label="分类描述">
            <template slot-scope="scope">
            <span>{{ scope.row.inf }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
            <template slot-scope="scope">
            <el-button size="mini" @click="editSource(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="deleteSource(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
import { tableClassAdd } from '../../api/dbmanage_api'
import { tableClassSelect } from '../../api/dbmanage_api'
import { tableClassDelete } from '../../api/dbmanage_api'
import { tableClassUpdate } from '../../api/dbmanage_api'

import { tableSourceAdd } from '../../api/dbmanage_api'
import { tableSourceSelect } from '../../api/dbmanage_api'
import { tableSourceDelete } from '../../api/dbmanage_api'
import { tableSourceUpdate } from '../../api/dbmanage_api'

export default {
    data () {
        return {
            addClassForm: {
                className: '',
                classInfo: ''
            },
            editClassForm: {
                id:'',
                className: '',
                classInfo: ''
            },
            tableClassList: [],
            addSourceForm: {
                sourceName: '',
                sourceInfo: ''
            },
            editSourceForm: {
                id:'',
                sourceName: '',
                sourceInfo: ''
            },
            tableSourceList: []
        }
    },
    created() {
        this.getClassList()
        this.getSourceList()
    },
    methods: {
        getClassList() {
            tableClassSelect().then(res => {
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.tableClassList = res.data.Data
                }
                // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
                else if (res.data.Meta.Status == 0) {
                    this.$message.error(res.data.Meta.Msg)
                    this.$router.push('/dbManage/dbConnect/mysqlConn')
                }
                // 如果状态码为其他 提示错误信息
                else {
                    this.$message.error(res.data.Meta.Msg)
                }
            }).catch(error => {
                // console.log(error)
                this.$message.error('网络错误')
            })
        },
        getSourceList() {
            tableSourceSelect().then(res => {
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.tableSourceList = res.data.Data
                }
                // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
                else if (res.data.Meta.Status == 0) {
                    this.$message.error(res.data.Meta.Msg)
                    this.$router.push('/dbManage/dbConnect/mysqlConn')
                }
                // 如果状态码为其他 提示错误信息
                else {
                    this.$message.error(res.data.Meta.Msg)
                }
            }).catch(error => {
                // console.log(error)
                this.$message.error('网络错误')
            })
        },
        addClass() {
            // 添加
            tableClassAdd({'name': this.addClassForm.className ,'inf': this.addClassForm.classInfo}).then( res => {
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.getClassList()
                }
                // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
                else if (res.data.Meta.Status == 0) {
                    this.$message.error(res.data.Meta.Msg)
                    this.$router.push('/dbManage/dbConnect/mysqlConn')
                }
                // 如果状态码为其他 提示错误信息
                else {
                    this.$message.error(res.data.Meta.Msg)
                }
            }).catch(error => {
                this.$message.error('网络错误')
            })
        },
        addSource() {
            // 添加
            tableSourceAdd({'name': this.addSourceForm.sourceName ,'inf': this.addSourceForm.sourceInfo}).then( res => {
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.getSourceList()
                }
                // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
                else if (res.data.Meta.Status == 0) {
                    this.$message.error(res.data.Meta.Msg)
                    this.$router.push('/dbManage/dbConnect/mysqlConn')
                }
                // 如果状态码为其他 提示错误信息
                else {
                    this.$message.error(res.data.Meta.Msg)
                }
            }).catch(error => {
                // console.log(error)
                this.$message.error('网络错误')
            })
        },
        editClass(index, row) {
            console.log(index, row);
            // tableSourceUpdate({'id':row.id,'name':'student','inf':row.inf}).then( res => {
            //     console.log(res)
            // })
        },
        deleteClass(index, row) {
            tableClassDelete({'id': row.id}).then( res => {
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 0) {
                    this.$message.success(res.data.Meta.Msg)
                    this.getClassList()
                }
                // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
                // else if (res.data.Meta.Status == 0) {
                //     this.$message.error(res.data.Meta.Msg)
                //     this.$router.push('/dbManage/dbConnect/mysqlConn')
                // }
                // 如果状态码为其他 提示错误信息
                else {
                    this.$message.error(res.data.Meta.Msg)
                }
            }).catch(error => {
                // console.log(error)
                this.$message.error('网络错误')
            })
        },
        editSource(index, row) {
            console.log(index, row);
            // tableSourceUpdate({'id':row.id,'name':'student','inf':row.inf}).then( res => {
            //     console.log(res)
            // })
        },
        deleteSource(index, row) {
            tableSourceDelete({'id': row.id}).then( res => {
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 0) {
                    this.$message.success(res.data.Meta.Msg)
                    this.getSourceList()
                }
                // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
                // else if (res.data.Meta.Status == 0) {
                //     this.$message.error(res.data.Meta.Msg)
                //     this.$router.push('/dbManage/dbConnect/mysqlConn')
                // }
                // 如果状态码为其他 提示错误信息
                else {
                    this.$message.error(res.data.Meta.Msg)
                }
            }).catch(error => {
                // console.log(error)
                this.$message.error('网络错误')
            })
        }
    },
    computed: {
        
    }

}
</script>
<style lang="less" scoped>
</style>
