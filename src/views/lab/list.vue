<template>
  <div class="app-container">

    <!-- 表格 -->
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column label="序号" width="70" align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="name" label="实验室"/>
      <el-table-column prop="lab" label="所属学院"/>
      <el-table-column prop="user" label="负责人" />

      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-search" @click="showSensorDialog(scope.row.id)">查看传感器</el-button>
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
        <el-table-column label="操作" align="center">
          <el-button type="info" size="mini" icon="el-icon-s-data" @click="diaglogLineVisible = true">查看实时数据</el-button>
        </el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog :visible.sync="diaglogLineVisible" @open="createTimer" @close="clearTimer">
      <el-container>
        <el-header style="font-size:32px; text-align: center">{{ lineChartData.length === 0 ? null : lineChartData[lineChartData.length - 1][1] }}</el-header>
        <line-chart :chart-data="lineChartData" />
      </el-container>
    </el-dialog>
  </div>
</template>

<script>
import { getLabPage, deleteById } from '@/api/user'
import LineChart from './components/LineChart'
import { MessageBox, Message } from 'element-ui'

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      list: null,//查询之后接口返回集合
      page: 1,//当前页
      limit: 10,//每页记录数
      total: 0,//总记录数
      teacherQuery: {},

      sensorData: [],

      diaglogSensorVisible: false,
      diaglogLineVisible: false,

      lineChartData: [],

      timer: null,
    }
  },
  created() {
    this.getList() 
  },
  methods: {
    getList(page = 1) {
      this.page = page
      getLabPage(this.page, this.limit, this.teacherQuery)
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

    showSensorDialog(id) {
      this.list.forEach(row => {
        if (row.id === id) this.sensorData = row.sensors
      });
      this.diaglogSensorVisible = true
    },

    createTimer() {
      Message({
        message: '连接成功',
        type: 'success',
        duration: 5 * 1000
      })
      this.timer = setInterval(() => {
        let data = 20 + 3 * Math.random().toFixed(1)
        console.log(data)

        if (this.lineChartData.length >= 60) this.lineChartData.shift()
        this.lineChartData.push([Date.now(), data])
      }, 1000);
    },

    clearTimer() {
      clearInterval(this.timer)
      this.lineChartData = []
    }
  }
}
</script>