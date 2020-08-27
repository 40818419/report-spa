<template>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card>
          <apexchart
            ref="realtimeChart"
            type="line"
            height="280"
            :options="chartOptions"
            :series="series" />
        </v-card>
      </v-col>
    </v-row>
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
    });

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
    });

    return { ...toRefs(chartConfig) };
  },
});
</script>
