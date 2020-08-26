<template>
  <v-container>
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
  toRefs,
} from '@vue/composition-api';
import ReportChart from '@/components/ReportChart/ReportChart.vue';
import ReportDataTable from '@/components/ReportDataTable/ReportDataTable.vue';
import { IReport } from '@/modules/Report/state';

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

    watch(chartReport, (current, prev) => {
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
