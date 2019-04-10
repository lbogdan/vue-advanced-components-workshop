<template>
  <div>
    <div v-if="data.loading">loading planets...</div>
    <ul v-else>
      <li v-for="planet in data.list" :key="planet.url">
        {{ planet.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import APIFetch from './APIFetchMixin';

export default {
  name: 'planet-list-2',
  mixins: [APIFetch],
  created() {
    this.loadData('https://swapi.co/api/planets');
  },
};
</script>
