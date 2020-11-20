<template>
  <div>
    <el-form :inline="true" :model="addThemeForm">
        <el-form-item label="主题">
            <el-input v-model="addThemeForm.themeName" placeholder="请输入文字" size="small"></el-input>
        </el-form-item>
        <el-form-item label="父主题">
            <el-select v-model="addThemeForm.fatherTheme" placeholder="根主题" size="small">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addTheme()" size="small">添加</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableThemeList" style="width: 100%" stripe border height="530">
        <el-table-column label="一级仓库主题">
            <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column label="添加人" width="300">
            <template slot-scope="scope">
            <span>{{ scope.row.owner }}</span>
            </template>
        </el-table-column>
        <el-table-column label="添加时间">
            <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.createtime }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
            <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tableThemeAdd } from '../../api/dbmanage_api'
import { tableThemeSelect } from '../../api/dbmanage_api'
import { tableThemeDelete } from '../../api/dbmanage_api'
import { tableThemeUpdate } from '../../api/dbmanage_api'

export default {
  data () {
    return {
        addThemeForm: {
            themeName: '',
            fatherTheme: ''
        },
        editThemeForm: {
            id:'',
            themeName: '',
            fatherTheme: ''
        },
        tableThemeList: []
    }
  },
  created() {
        this.getThemeList()
    },
    methods: {
        getThemeList() {
            tableThemeSelect().then(res => {
                // console.log(res.data.Data)
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.tableThemeList = res.data.Data
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
        addTheme() {
            // 添加主题 owner暂时写死
            tableThemeAdd({'name': this.addThemeForm.themeName ,'owner':'ypz'}).then( res => {
                // console.log(res.data.Data)
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.getThemeList()
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
        handleEdit(index, row) {
            console.log(index, row);
            tableThemeUpdate({'id':row.id,'name':'student','owner':row.owner}).then( res => {
                console.log(res)
            })
        },
        handleDelete(index, row) {
            tableThemeDelete({'id': row.id}).then( res => {
                // console.log(res.data.Data)
                // 如果状态码为1 说明查询成功 提示并展示信息
                if (res.data.Meta.Status == 1) {
                    this.$message.success(res.data.Meta.Msg)
                    this.getThemeList()
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
        }
    },
    computed: {
        
    }

}
</script>
<style lang="less" scoped>
</style>
