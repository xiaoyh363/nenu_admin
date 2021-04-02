<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: '温度',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [179, 152, 200, 334, 390, 330, 220],
            animationDuration
          }, 
          {
            name: '湿度',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [180, 152, 200, 334, 390, 330, 220],
            animationDuration
          }, 
          {
            name: '光照强度',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [130, 152, 200, 334, 390, 330, 220],
            animationDuration
          },
          {
            name: '一氧化碳浓度',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [130, 152, 200, 334, 390, 330, 220],
            animationDuration
          },
          {
            name: '酒精浓度',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [130, 152, 200, 334, 390, 330, 220],
            animationDuration
          },
        ]
      })
    }
  }
}
</script>
