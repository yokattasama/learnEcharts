<template>
  <div>
    <h3>机器人拨打统计数据</h3>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#5470C6', '#91CC75', '#EE6666'],
      options: {
        color: ['#5470C6', '#91CC75', '#EE6666'],

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['8-9点', '9-10点', '10-11点', '11-12点','14-15点', '15-16点', '16-17点', '17-18点', '18-19点', '19-20点']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '接通率',
            min: 0,
            max: 100,
            position: 'right',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#5470C6'
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          },
          {
            type: 'value',
            name: '还款率',
            min: 0,
            max: 100,
            position: 'right',
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#91CC75'
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          },
          {
            type: 'value',
            name: '还款金额',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EE6666'
              }
            },
            axisLabel: {
              formatter: '{value} 万元'
            }
          }
        ],
        series: [
          {
            name: '接通率',
            type: 'bar',
            data: [20, 35, 30, 20, 25, 30, 20, 15, 12, 10]
          },
          {
            name: '还款率',
            type: 'bar',
            yAxisIndex: 1,
            data: [15, 24, 26, 15, 18, 24, 14, 9, 7, 5]
          },
          {
            name: '还款金额',
            type: 'line',
            yAxisIndex: 2,
            data: [8, 12, 30, 25, 12, 17, 20, 8, 8, 4]
          }
        ]
      }
    }
  },
  mounted() {
    const chartDom = document.getElementById('container');
    const myChart = this.$charts.init(chartDom);
    myChart.setOption(this.options);
  },
  created() {
    // this.getList();
  },
  methods: {
    getList() {
      this.axios.get('/api/list').then((res)=>{
        if(res.status == 200) {
          console.log(res.data)
        }
      })
    }
  }
}
</script>

<style>
#container {
  width: 850px;
  height: 500px;
  margin: 0 auto;
}
</style>
