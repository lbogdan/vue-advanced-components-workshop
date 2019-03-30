<template>
  <div id="app" class="container mt-4">
    <button class="btn btn-primary">
      Open modal
    </button>
    <!-- TODO: this should go inside the modal -->
    <div v-if="loading">loading people...</div>
    <ul v-else>
      <li v-for="person in people" :key="person.url">
        {{ person.name }}
      </li>
    </ul>
    <!-- end of modal -->
  </div>
</template>

<script>
import axios from 'axios';
// import Modal from './components/Modal.vue';

export default {
  name: 'app',
  // components: {
  //   Modal,
  // },
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
