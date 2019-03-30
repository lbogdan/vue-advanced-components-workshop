<template>
  <div id="app">
    <select-other :options="options" v-model="selected" />
    <div class="selected">{{ selectedOption }}</div>
    <div class="buttons">
      <button @click="selected = 'Option 2'">Set to "Option 2"</button>
      &nbsp;
      <button @click="selected = 'some text'">Set to "some text"</button>
      &nbsp;
      <button @click="selected = null">Clear option</button>
    </div>
  </div>
</template>

<script>
import SelectOther from './components/SelectOther.vue';

export default {
  name: 'app',
  components: {
    SelectOther,
  },
  data() {
    return {
      options: ['Option 1', 'Option 2', 'Option 3'],
      selected: null,
    };
  },
  computed: {
    selectedOption() {
      if (this.selected === null) {
        return 'No option selected';
      }
      return `Selected option: "${this.selected}"`;
    },
  },
};
</script>

<style>
body,
button,
input,
select {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
input,
button,
select {
  font-size: 16px;
}
.selected,
.buttons {
  margin-top: 10px;
}
</style>
