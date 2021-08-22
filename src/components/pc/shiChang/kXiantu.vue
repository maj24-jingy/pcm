<template>
  <div id="main">
    <div id='myChart'
           ref="myChart"
           >
      </div>

      <div class="line"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  name: 'echarts',
  props: {
    apiKey: String,
    desc: String
  },
  data () {
    return {
      // apiKey: 'DMIHCUVOSGNLELQTTMCYWL4E84ZKFJU2MYNJERV4',
      // desc: 'gate-io_BTC_USDT',
      resData: [],
      echartsOption: {
        // title: {
        //   text: '上证指数',
        //   left: 0
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['日K']
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: [],
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 80,
            end: 100
          },
          {
            show: true,
            type: 'slider',
            y: '90%',
            start: 0,
            end: 75
          }
        ],
        series: [
          {
            name: '日K',
            type: 'k',
            data: [],
            itemStyle: {
              // normal: {
              //   color: '#ec0000',
              //   color0: '#00da3c',
              //   borderColor: '#8A0000',
              //   borderColor0: '#008F28'
              // }
            },
            markPoint: {
              label: {
                // normal: {
                //   formatter: function (param) {
                //     return param != null ? Math.round(param.value) : ''
                //   }
                // }
              },
              data: [
                {
                  name: 'highest value',
                  type: 'max',
                  valueDim: 'highest'
                },
                {
                  name: 'lowest value',
                  type: 'min',
                  valueDim: 'lowest'
                },
                {
                  name: 'average value on close',
                  type: 'average',
                  valueDim: 'close'
                }
              ],
              tooltip: {
                formatter: function (param) {
                  return param.name + '<br>' + (param.data.coord || '')
                }
              }
            },
            markLine: {
              symbol: ['none', 'none'],
              data: [
                [
                  {
                    name: 'from lowest to highest',
                    type: 'min',
                    valueDim: 'lowest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                      // normal: { show: false },
                      emphasis: { show: false }
                    }
                  },
                  {
                    type: 'max',
                    valueDim: 'highest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                      // normal: { show: false },
                      emphasis: { show: false }
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    }
  },
  async created () {
    // console.log(this.apiKey);
    // console.log(this.desc);
    //遮罩层
    // let load = this.$loading()
    // this.$axios.get(`http://data.mifengcha.com/api/v3/kline?api_key=${this.apiKey}&desc=${this.desc}`).then(res => {
    //   console.log(res);
    // })
      const res = await this.$http.get(`/api/kline?api_key=${this.apiKey}&desc=${this.desc}`)
      console.log(res);
      this.resData = res.data
      console.log(this.resData);
      this.$nextTick(() => {
          this.setEchartOption()
          this.myChart = echarts.init(document.getElementById('myChart'))
          this.myChart.setOption(this.echartsOption)
          
      // load.close()

      }) 
  },
  mounted () {
},
  methods: {
    async setEchartOption () {
      // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
      // this.$nextTick(() => {
      

      // console.log(this.resData);
      this.resData = splitData(this.resData)
      // console.log(this.resData);
      this.echartsOption.xAxis.data = this.resData.categoryData
      this.echartsOption.series[0].data = this.resData.values
      console.log(this.echartsOption.xAxis.data)
      console.log(this.echartsOption.series[0].data)
      
      //时间戳转日期
      function add0(m){return m<10?'0'+m:m }
      // console.log(format(1628718000000));
      function format(date) {
        var date = new Date(date);
        var YY = date.getFullYear() + '-';
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return YY + MM + DD +" "+hh + mm + ss;
      }
      //遍历接口数据，取值到k线图
      function splitData (rawData) {
        var categoryData = []
        var values = []
        var temp = []
        for (var i = 0; i < rawData.length; i++) {
            // console.log(rawData[i]);
            categoryData.push(format(rawData[i].T))
            // const res = rawData[i].splic
            for(var item in rawData[i]) {
              temp.push(rawData[i][item])
            }
            temp.splice(0,1)
            temp.splice(4,1)
            values.push(temp)
            temp = []
          // }
        }
        // console.log(categoryData)
        // console.log(values)
        return {
          categoryData: categoryData,
          values: values
        }
      }
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  width: 1600px;
}
#myChart{
  width: 1300px;
  height: 550px;
  /* margin: 0 auto; */
}
.line {
  width: 100%;
  height: 2px;
  background-color: #d5d5d5;
}

</style>
