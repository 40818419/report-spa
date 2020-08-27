<template>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-container class="lighten-5">
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <v-select
                    v-model="publishedAtFilter"
                    :items="items"
                    item-text="name"
                    item-value="value"
                    label="Published"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-range-slider
                    label="Score"
                    v-model="slider"
                    thumb-label
                    :max="max"
                    :min="min"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
            item-key="uuid"
            dense
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
  computed,
  reactive,
  toRefs,
} from '@vue/composition-api';

import { formatDate } from '@/helper';
import { IReport } from '@/modules/report/state';

export default defineComponent({
  props: {
    data: Array,
  },
  setup(_, { emit }) {
    const search = ref('');
    const scoreFilterSlider = reactive({
      min: 0,
      max: 200,
      slider: [0, 200],
    });
    const publishedAtFilter = ref(null);
    const items = [
      { name: 'All', value: null },
      { name: 'Published', value: true },
      { name: 'Not Published', value: false },
    ];
    const reportScoreHeaderFilter = (value: number) => {
      if (value > scoreFilterSlider.slider[0] && value < scoreFilterSlider.slider[1]) {
        return value;
      }

      return false;
    };
    const publishedAtHeaderFilter = (value: boolean | null) => {
      if (publishedAtFilter.value === true) return value != null;
      if (publishedAtFilter.value === false) return value == null;

      return true;
    };
    const headers = computed(() => [
      {
        text: 'Bank Name',
        align: 'start',
        sortable: false,
        value: 'body.bankName',
      },
      { text: 'Bank BIC', value: 'body.bankBIC' },
      {
        text: 'Score',
        value: 'body.reportScore',
        filter: reportScoreHeaderFilter,
      },
      { text: 'Type', value: 'body.type' },
      { text: 'Created', value: 'createdAt' },
      {
        text: 'Published',
        value: 'publishedAt',
        filter: publishedAtHeaderFilter,
      },
    ]);

    const getCurrentItems = (e: IReport[]) => {
      emit('set-current-items', e);
    };

    return {
      headers: headers.value,
      search,
      formatDate,
      getCurrentItems,
      items,
      publishedAtFilter,
      ...toRefs(scoreFilterSlider),
      reportScoreHeaderFilter,
      publishedAtHeaderFilter,
    };
  },
});
</script>
