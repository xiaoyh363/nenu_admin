<template>
  <div class="dashboard-editor-container">

    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="fuckQuery.name" clearable placeholder="实验室">
          <el-option :value="1" label="实验室117"/>
          <el-option :value="2" label="实验室203"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="fuckQuery.sensor" clearable placeholder="传感器">
          <el-option :value="1" label="温度"/>
          <el-option :value="2" label="湿度"/>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="fuckQuery.begin"
          type="datetime"
          placeholder="选择开始时间"
          :picker-options="pickerOptions"
          value-format="timestamp"/>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="fuckQuery.end"
          type="datetime"
          placeholder="选择截止时间"
          :picker-options="pickerOptions"
          value-format="timestamp"/>
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
    </el-form>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        
        <div class="chart-wrapper">
          <el-header style="height:30px; display:flex; align-items:center; justify-content:center;">
            <span style="font-size:18px; font-weight:bold; color:#333">系统用户组成统计</span>
          </el-header>  
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <el-header style="height:30px; display:flex; align-items:center; justify-content:center;">
            <span style="font-size:18px; font-weight:bold; color:#333">传感器数据组成统计</span>
          </el-header>  
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart,
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, 
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, 
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          },
          {
            text: '半月前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 15);
              picker.$emit('pick', date);
            }
          }
        ]
      },

      lineChartData: [],

      fuckQuery: {}
    }
  },
  methods: {
    getList() {
      let unit = 1000 * 3600
      let num = (this.fuckQuery.end - this.fuckQuery.begin) / unit
      this.lineChartData = []
      for (let i = 0; i <= num; i++) {
        this.lineChartData.push([this.fuckQuery.begin + unit * i, 20 + 3 * Math.random().toFixed(1)])
      }
    },

    handleSetLineChartData(type) {
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
