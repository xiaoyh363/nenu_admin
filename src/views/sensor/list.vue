<template>
  <div class="app-container">

    <!-- 表格 -->
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column label="序号" width="70" align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="name" label="传感器类型"/>
      <el-table-column prop="voltage" label="额定电压"/>
      <el-table-column prop="range" label="测量范围" />
      <el-table-column prop="unit" label="单位" />
      <el-table-column prop="pm" label="功耗" />

      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="$router.push('/lab/edit/' + scope.row.id)">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"/>

    <el-dialog title="实验室传感器列表" :visible.sync="diaglogSensorVisible">
      <el-table :data="sensorData">
        <el-table-column prop="name" label="传感器名" align="center"></el-table-column>
        <el-table-column prop="unit" label="单位" align="center"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { getSensorPage, deleteById } from '@/api/user'

export default {
    data() {
      return {
        list: null,//查询之后接口返回集合
        page: 1,//当前页
        limit: 10,//每页记录数
        total: 0,//总记录数
        teacherQuery: {},
      }
    },
    created() {
      this.getList() 
    },
    methods:{
      getList(page = 1) {
        this.page = page
        getSensorPage(this.page, this.limit, this.teacherQuery)
          .then(response => {
            console.log(response)
            this.list = response.data.rows
            this.total = response.data.total
          }) 
      },
      resetData() {
        this.teacherQuery = {}
        this.getList()
      },
      removeDataById(id) {
        this.$confirm('此操作将删除实验室记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
          deleteById(id).then(_ => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            this.getList()
          })
        })
      },
    }
}
</script>