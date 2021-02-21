<template>
  <div>
    <h3>各个职场分时段出催金额</h3>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
          type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        data: ['8-10点', '11-12点', '14-16点', '17-18点', '19-20点']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['平安', '中信', '交通', '华润']
      },
      series: [
        {
          name: '8-10点',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [800, 850, 860, 860, 850, 840, 860]
        },
        {
          name: '11-12点',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '14-16点',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [570, 550, 560, 530, 540, 550, 560]
        },
        {
          name: '17-18点',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: '19-20点',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
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
  width: 600px;
  height: 500px;
  margin: 0 auto;
}
</style>
