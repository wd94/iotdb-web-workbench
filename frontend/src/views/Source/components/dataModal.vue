<template>
  <div id="main" class="main-contain"></div>
</template>

<script>
// @ is an alias to /src
import { onMounted, onActivated, ref, onDeactivated } from 'vue';
import * as echarts from 'echarts';
// import { ElButton } from 'element-plus';
import { useI18n } from 'vue-i18n';
import axios from '@/util/axios.js';
// import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import img1 from '../../../assets/storage.png';
import img2 from '../../../assets/data.png';
import img3 from '../../../assets/device.png';
var MyCharts = '';
export default {
  name: 'DataModal',
  //   props: ['func'],
  //   setup(props) {
  setup() {
    const { t } = useI18n();
    const x = ref(0);
    const router = useRouter();
    const datas = ref({});

    const getModalTreeData = (func) => {
      axios.get(`/servers/${router.currentRoute.value.params.serverid}/dataModel`, {}).then((res) => {
        if (res && res.code == 0) {
          datas.value = res.data || {};
          func && func();
        }
      });
    };
    const initCharts = () => {
      MyCharts = echarts.init(document.getElementById('main'));

      let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: (params) => {
            let data = params.data;
            if (data.name == 'root') {
              //root
              return t('sourcePage.storageNum') + ':' + data.groupCount || 0;
            } else if (data.isGroup) {
              return t('sourcePage.entityNum') + ':' + data.deviceCount || 0;
            } else if (data.isDevice) {
              return t('sourcePage.physicalNum') + ':' + data.measurementCount || 0;
            } else if (data.isMeasurement) {
              return (
                t('device.datatype') + ':' + data.dataInfo.dataType + '</Br>' + t('sourcePage.dataNum') + ':' + data.dataInfo.dataCount + '</Br>' + t('device.newValue') + ':' + data.dataInfo.newValue
              );
            } else {
              return data.name;
            }
          },
        },
        series: [
          {
            type: 'tree',
            edgeShape: 'polyline',
            data: [datas.value],
            left: '2%',
            right: '2%',
            top: '8%',
            bottom: '8%',
            roam: true,
            symbol: 'emptyCircle',
            symbolSize: 0,
            orient: 'vertical',
            // rootLocation: { x: 'center', y: '6%' },
            nodePadding: 80,
            // layerPadding: 33,
            expandAndCollapse: true,
            initialTreeDepth: 1,
            itemStyle: {
              normal: {
                color: '#fff',
                borderWidth: 0,
                borderColor: '#000',
                lineStyle: {
                  color: '#DBDFEAFF',
                  width: 1,
                  type: 'broken', // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                },
              },
            },
            label: {
              position: 'bottom',
              rotate: 0,
              verticalAlign: 'middle',
              align: 'center',
              fontSize: 9,
              borderWidth: 1,
              borderColor: '#EAEDF2FF',
              padding: [4, 10, 4, 10],

              textStyle: {
                color: '#000',
                backgroundColor: '#fff',
                fontSize: 12,
                fontWeight: 500,
                baseline: 'middle',
              },
              rich: {
                img: {
                  backgroundColor: {
                    image: img1,
                  },
                },
                img1: {
                  backgroundColor: {
                    image: img2,
                  },
                },
                img2: {
                  backgroundColor: {
                    image: img3,
                  },
                },
                style: {
                  padding: [0, 0, 0, 6],
                },
              },
              formatter: (params) => {
                if (params.data.isGroup) {
                  return '{img|}' + '{style|' + `${params.data.name}` + '}';
                } else if (params.data.isDevice) {
                  return '{img2|}' + '{style|' + `${params.data.name}` + '}';
                } else if (params.data.isMeasurement) {
                  return '{img1|}' + '{style|' + `${params.data.name}` + '}';
                }
              },
            },

            leaves: {
              label: {
                position: 'bottom',
                rotate: 0,
                verticalAlign: 'middle',
                align: 'center',
              },
            },

            animationDurationUpdate: 750,
          },
        ],
      };

      MyCharts.setOption(option);
    };

    onMounted(() => {
      // getModalTreeData(() => {
      //   initCharts();
      // });
    });
    onActivated(() => {
      getModalTreeData(() => {
        initCharts();
      });
    });
    onDeactivated(() => {
      MyCharts && MyCharts.dispose();
    });
    return {
      t,
      x,
      datas,
      getModalTreeData,
      initCharts,
    };
  },
  components: {
    // ElButton,
  },
};
</script>

<style scoped lang="scss">
.main-contain {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
