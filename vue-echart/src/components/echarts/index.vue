<template>
  <div class="echarts">
    <div class="header">电商商品销售趋势图</div>
    <div class="content">
      <div class="content-title-wrapper">月销售增长率</div>
      <div class="content-index-wrapper"></div>
      <div id="content-chart"></div>
      <div class="content-circle-wrapper"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'echarts'
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
    background: brown;
  }
  .footer {
    width: 100%;
    height: 120px;
    border-top: 1px #eeeeee solid;
  }
</style>