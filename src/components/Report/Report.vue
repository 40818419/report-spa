<template>
  <v-container fluid>
    <h2>Report</h2>
    <report-chart :categories="categories" :scores="scores"  />
    <report-data-table :data="report" @set-current-items="setCurrentItems" />
  </v-container>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  watch,
} from '@vue/composition-api';
import ReportChart from '@/components/ReportChart/ReportChart.vue';
import ReportDataTable from '@/components/ReportDataTable/ReportDataTable.vue';
import { IReport } from '@/modules/report/state';

export default defineComponent({
  components: {
    ReportChart,
    ReportDataTable,
  },
  setup(_, context) {
    const report = computed(() => context.root.$store.getters['report/getReport']);
    const chartReport: { value: IReport[] } = ref([]);

    const setCurrentItems = (items: IReport[]) => {
      chartReport.value = items;
    };

    const categories: { value: string[] } = ref([]);
    const scores: { value: number[] } = ref([]);

    watch(chartReport, (current) => {
      categories.value = current.map((item: IReport) => item.body.bankName);
      scores.value = current.map((item: IReport) => Math.floor(item.body.reportScore));
    });

    return {
      report,
      categories,
      scores,
      setCurrentItems,
    };
  },
});
</script>
