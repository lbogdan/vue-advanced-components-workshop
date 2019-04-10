<template>
  <select multiple>
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';

function arrayEqual(a, b) {
  return (
    a.length === b.length &&
    a.every(el => b.includes(el)) &&
    b.every(el => a.includes(el))
  );
}

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
  mounted() {
    this.$select = $(this.$el);
    this.$select.select2();
    this.$select.val(this.value).trigger('change');
    this.$select.on('change', () => {
      const newValue = this.$select.val();
      if (!arrayEqual(this.value, newValue)) {
        this.$emit('input', this.$select.val());
      }
    });
  },
  beforeDestroy() {
    this.$select.off('change');
    this.$select.select2('destroy');
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
  watch: {
    value(newValue) {
      this.$select.val(newValue).trigger('change');
    },
  },
};
</script>

<style scoped>
select {
  height: 100%;
  width: 400px;
}
</style>
