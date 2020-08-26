<template>
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
            :items="data"
            :search="search"
            @current-items="getCurrentItems"
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
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from '@vue/composition-api';

import { formatDate } from '@/helper';
import { IReport } from '@/modules/Report/state';

export default defineComponent({
  props: {
    data: Array,
  },
  setup(_, { emit }) {
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

    const getCurrentItems = (e: IReport[]) => {
      emit('set-current-items', e);
    };

    return {
      headers,
      search,
      formatDate,
      getCurrentItems,
    };
  },
});
</script>
