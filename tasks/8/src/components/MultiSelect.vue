<template>
  <select multiple size="5" v-model="localValue">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
// import $ from 'jquery';
// import 'select2';
// import 'select2/dist/css/select2.css';

export default {
  name: 'multi-select',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped>
select {
  height: 100%;
  width: 200px;
}
</style>
