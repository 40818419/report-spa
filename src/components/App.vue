<template>
    <v-app id="app">
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import Loading from 'vue-loading-overlay';
import '../../node_modules/vue-loading-overlay/dist/vue-loading.css';

export default defineComponent({
  setup(_, context) {
    onMounted(() => context.root.$store.dispatch('report/fetchReport'));
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
