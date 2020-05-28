import Echarts from 'echarts'
console.log(document.getElementById('chart'))
const chartDom = document.getElementById('chart')
const chart = Echarts.init(chartDom)
chart.setOption({
  title: {
    text: '快速入门Echarts开发'
  },
  xAxis: {
    data: ['食品', '服饰', '数码', '箱包']
  },
  yAxis: {},
  series: {
    type: 'bar',
    data: [100, 290, 50, 120]
  }
})