<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">

        <v-card>
          <v-card-title>
            Reports
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="report"
            :search="search"
          >
            <template v-slot:[`item.body.reportScore`]="{ item }">
              {{ Math.floor(item.body.reportScore) }}
            </template>
            <template v-slot:[`item.createdAt`]="{ item }">
              {{ formatDate(item.createdAt) }}
            </template>
            <template v-slot:[`item.publishedAt`]="{ item }">
              {{ formatDate(item.publishedAt) }}
            </template>
          </v-data-table>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  computed,
} from '@vue/composition-api';

import { formatDate } from '@/helper';

export default defineComponent({
  setup(_, context) {
    const search = ref('');
    const headers = ref([
      {
        text: 'Bank Name',
        align: 'start',
        sortable: false,
        value: 'body.bankName',
      },
      { text: 'Bank BIC', value: 'body.bankBIC' },
      { text: 'Score', value: 'body.reportScore' },
      { text: 'Type', value: 'body.type' },
      { text: 'Created', value: 'createdAt' },
      { text: 'Published', value: 'publishedAt' },
    ]);

    const report = computed(() => context.root.$store.getters['report/getReport']);

    onMounted(() => context.root.$store.dispatch('report/fetchReport'));

    return {
      headers,
      search,
      report,
      formatDate,
    };
  },
});
</script>
