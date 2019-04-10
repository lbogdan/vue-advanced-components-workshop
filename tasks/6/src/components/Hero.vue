<template>
  <div class="row">
    <slot v-bind:hero="data">
      <div>{{ data.firstName }}</div>
      <div>{{ data.lastName }}</div>
      <div>{{ data.framework }}</div>
    </slot>
    <div><input type="checkbox" v-model="selected" /></div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: this.data.selected,
    };
  },
  watch: {
    'data.selected'(value) {
      this.selected = value;
    },
    selected(value) {
      this.$emit('select', { id: this.data.id, value });
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 400px;
}
.row div {
  flex: 1;
}
</style>
