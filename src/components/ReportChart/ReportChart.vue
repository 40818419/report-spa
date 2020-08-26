<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <apexchart
          ref="realtimeChart"
          type="line"
          height="280"
          :options="chartOptions"
          :series="series" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';

export default defineComponent({
  props: {
    categories: Array,
    scores: Array,
  },
  setup(props: {
    categories: string[];
    scores: number[];
  }, context) {
    const { categories, scores } = toRefs(props);
    const chartConfig = reactive({
      chartOptions: {
        chart: {
          id: 'chart-report',
        },
        xaxis: {
          categories: categories.value,
        },
      },
      series: [{
        name: 'Score',
        data: scores.value,
      }],
    }) as any;

    watch([categories, scores], (next) => {
      const chart = (context as any).refs.realtimeChart;
      if (chart) {
        chart.updateSeries([{
          name: 'Score',
          data: next[1],
        }]);
        chart.updateOptions({
          xaxis: {
            categories: next[0],
          },
        });
      }
      // console.log(refs.realtimeChart.updateSeries(next[1]));
    });

    return { ...toRefs(chartConfig) };
  },
});
</script>
