<template>
  <div>
    <div v-if="data.loading">loading people...</div>
    <ul v-else>
      <li v-for="person in data.list" :key="person.url">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import APIFetch from './APIFetchMixin';

export default {
  name: 'people-list-2',
  mixins: [APIFetch],
  created() {
    this.loadData('https://swapi.co/api/people');
  },
};
</script>
