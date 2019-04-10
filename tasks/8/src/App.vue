<template>
  <div id="app">
    <multi-select :options="options" v-model="selected" v-if="show" />
    <div class="selected">Selected options: {{ selected }}</div>
    <button @click="selected = [1, 3]">Select 1st and 3rd</button>
    <button @click="selected = []">Clear selection</button>
    <button @click="show = !show">Show / hide</button>
  </div>
</template>

<script>
import MultiSelect from './components/MultiSelect.vue';

export default {
  name: 'app',
  components: {
    MultiSelect,
  },
  data() {
    return {
      options: [
        {
          id: 1,
          label: 'Option 1',
        },
        {
          id: 2,
          label: 'Option 2',
        },
        {
          id: 3,
          label: 'Option 3',
        },
        {
          id: 4,
          label: 'Option 4',
        },
        {
          id: 5,
          label: 'Option 5',
        },
      ],
      selected: [],
      show: true,
    };
  },
};
</script>

<style>
body,
button,
select {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
button,
select {
  font-size: 16px;
}
.selected,
button {
  display: block;
  margin-top: 10px;
}
</style>
