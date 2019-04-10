<template>
  <div id="app" class="container pt-4">
    <tabs v-model="activeTab" style="height: 200px;">
      <tab title="Tab 1">tab 1 content</tab>
      <tab title="Tab 2">tab 2 content</tab>
      <tab title="Tab 3">
        <tabs v-model="activeSubtab">
          <tab title="Subtab 1">subtab 1 content</tab>
          <tab title="Subtab 2">subtab 2 content</tab>
        </tabs>
      </tab>
    </tabs>
    <div class="my-2">Active tab: {{ activeTab }}</div>
    <div class="my-2">Active subtab: {{ activeSubtab }}</div>
    <button class="btn btn-primary" @click="activeTab = 1">
      Activate tab 2
    </button>
    <button
      class="btn btn-primary ml-2"
      @click="
        activeTab = 2;
        activeSubtab = 1;
      "
    >
      Activate subtab 2
    </button>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

export default {
  name: 'app',
  components: {
    Tabs,
    Tab,
  },
  data() {
    return {
      activeTab: null,
      activeSubtab: null,
    };
  },
};
</script>

<style>
body,
button {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
button {
  font-size: 16px;
}
</style>
