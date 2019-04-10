<template>
  <div id="app" class="container mt-4">
    <button class="btn btn-primary" @click="showModal = true">
      Open modal
    </button>
    <modal title="People Of Star Wars" v-model="showModal" @ok="onOk">
      <div v-if="loading">loading people...</div>
      <template v-else>
        <input type="text" v-model="filter" />
        <ul>
          <li v-for="person in filteredPeople" :key="person.url">
            {{ person.name }}
          </li>
        </ul>
      </template>
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './components/Modal.vue';

export default {
  name: 'app',
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      loading: false,
      people: [],
      filter: '',
    };
  },
  computed: {
    filteredPeople() {
      if (this.filter === '') {
        return this.people;
      }
      return this.people.filter(p =>
        p.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
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
    onOk() {
      alert('Pressed OK');
      this.showModal = false;
    },
  },
  // watch: {
  //   showModal(value) {
  //     if (value) {
  //       this.loadPeople();
  //     }
  //   },
  // },
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
