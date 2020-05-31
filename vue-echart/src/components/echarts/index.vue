<template>
  <div class="echarts">
    <div class="header">电商商品销售趋势图</div>
    <div class="content">
      <div class="content-title-wrapper">月销售增长率</div>
      <div class="content-index-wrapper">
        <span class="arrow-up">
          <svg t="1590894114228" class="icon" fill="rgb(58, 196, 125)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1136" width="200" height="200"><path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z" p-id="1137"></path></svg>
        </span>
        <span class="percentag">34<span>%</span></span>
        <span class="text">+14,400</span>
      </div>
      <div id="content-chart"></div>
      <div class="content-circle-wrapper">
        <div class="circle" :class="{selected: selectIndex === index}" v-for="(item, index) in 3" :key="index" @click="changeIndex(index)"></div>
      </div>
      <div class="content-bottom-wrapper">销售趋势</div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Echarts from 'echarts'
export default {
  name: 'echarts',
  data() {
    return {
      selectIndex: 0
    }
  },
  mounted() {
    this.genChart()
  },
  methods: {
    changeIndex(index) {
      this.selectIndex = index
      this.genChart()
    },
    genChart() {
      //获取数据源
      const mockData = []
      for (let i = 0; i < 10; i ++) {
        mockData.push(Math.floor(Math.random() * 100) + 200)
      }
      // 获取chart对应的dom
      const chartDom = document.getElementById('content-chart')
      // 初始化echarts对象
      const echart = Echarts.init(chartDom)
      //生成渲染参数
      const options = {
        xAxis: {
          type: 'category',
          show: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 350
        },
        series: [{
          data: mockData,
          type: 'line',
          smooth: true,
          areaStyle: {
            color: 'rgba(75, 193, 252, .5)'
          },
          lineStyle: {
            width: 4,
            color: 'rgba(75, 193, 252, 1)'
          },
          itemStyle: {
            borderWidth: 8,
            color: 'rgba(75, 193, 252, 1)'
          }
        }],
        grid: {
          left: -20,
          right: -20,
          top: 0,
          bottom: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        }
      }
      //渲染图标
      echart.setOption(options)
    }
  }
}
</script>

<style>
  .echarts {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: #dddddd 0px 0px 10px;
  }
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px #eeeeee solid;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .content {
    flex: 1;
    width: 100%;
    background: #ffffff;
    padding-left: 28px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .content-title-wrapper {
    padding-top: 28px;
    color: rgb(108, 117, 125);
    font-size: 13px;
  }
  /* .arrow-up .icon {
    color: rgb(58, 196, 125);
  } */
  .content-index-wrapper {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  svg {
    width: 25px;
    height: auto;
  }
  .percentag {
    font-size: 35px;
    font-weight: 700;
    color: #333;
    margin-left: 15px;
  }
  .percentag span {
    font-size: 28px;
    font-weight: 400;
    color: #999;
    margin-left: 2px;
  }
  .text {
    margin-left: 15px;
    color: rgb(58, 196, 125);
  }
  #content-chart {
    flex: 1;
  }
  .content-circle-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .circle {
    width: 10px;
    height: 10px;
    background: #ffffff;
    border: 3px solid rgb(63, 106, 216);
    border-radius: 50%;
    margin: 0 5px;
  }
  .selected {
    width: 12px;
    height: 12px;
    border: 5px solid rgb(63, 106, 216);
  }
  .footer {
    width: 100%;
    height: 120px;
    border-top: 1px #eeeeee solid;
  }
</style>