<template>
  <div>
    <div v-if="loading">loading people...</div>
    <ul v-else>
      <li v-for="person in people" :key="person.url">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import APIFetchMixin from './APIFetchMixin';

export default {
  name: 'people-list',
  // mixins: [APIFetchMixin],
  data() {
    return {
      loading: false,
      people: [],
    };
  },
  created() {
    this.loadPeople();
  },
  methods: {
    loadPeople() {
      this.loading = true;
      axios.get('https://swapi.co/api/people').then(res => {
        this.people = res.data.results;
        this.loading = false;
      });
    },
  },
};
</script>
