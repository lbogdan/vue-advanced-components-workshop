<template>
  <div>
    <div v-if="loading">loading planets...</div>
    <ul v-else>
      <li v-for="planet in planets" :key="planet.url">
        {{ planet.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import APIFetchMixin from './APIFetchMixin';

export default {
  name: 'planet-list',
  // mixins: [APIFetchMixin],
  data() {
    return {
      loading: false,
      planets: [],
    };
  },
  created() {
    this.loadPlanets();
  },
  methods: {
    loadPlanets() {
      this.loading = true;
      axios.get('https://swapi.co/api/planets').then(res => {
        this.planets = res.data.results;
        this.loading = false;
      });
    },
  },
};
</script>
