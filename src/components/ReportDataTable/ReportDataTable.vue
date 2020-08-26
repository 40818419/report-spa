<template>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-form>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
              <v-slider
                label="Score"
                data-app
                v-model="slider"
                thumb-label
                :max="max"
                :min="min"
              ></v-slider>
              <v-select
                v-model="publishedAtFilter"
                :items="items"
                item-text="name"
                item-value="value"
                label="Standard"
              ></v-select> {{publishedAtFilter}}
            </v-form>
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
import { IReport } from '@/modules/Report/state';

export default defineComponent({
  props: {
    data: Array,
  },
  setup(_, { emit }) {
    const search = ref('');
    const scoreFilterSlider = reactive({
      min: 0,
      max: 200,
      slider: 0,
    });
    const publishedAtFilter = ref(null);
    const items = [
      { name: 'All', value: null },
      { name: 'Published', value: true },
      { name: 'Not Published', value: false },
    ];
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
        filter: (value: number) => {
          if (!scoreFilterSlider.slider) return true;

          return value > scoreFilterSlider.slider;
        },
      },
      { text: 'Type', value: 'body.type' },
      { text: 'Created', value: 'createdAt' },
      {
        text: 'Published',
        value: 'publishedAt',
        filter: (value: boolean | null) => {
          if (publishedAtFilter.value === true) return value != null;
          if (publishedAtFilter.value === false) return value == null;
          return true;
        },
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
    };
  },
});
</script>
