<template>
  <div>
    <div>
      <select v-model="localValue">
        <option v-for="option in options" :key="option" :value="option">{{
          option
        }}</option>
        <option value="__other__">Other</option>
      </select>
    </div>
    <div class="input">
      <input v-if="localValue === '__other__'" v-model="otherOption" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-other',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      required: true,
      validator(value) {
        return value === null || typeof value === 'string';
      },
    },
  },
  data() {
    return {
      otherOption: '',
    };
  },
  computed: {
    localValue: {
      get() {
        if (this.value === null || this.options.includes(this.value)) {
          return this.value;
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.otherOption = this.value;
          return '__other__';
        }
      },
      set(value) {
        this.$emit('input', value !== '__other__' ? value : this.otherOption);
      },
    },
  },
  watch: {
    otherOption(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>
select,
input {
  width: 200px;
}
.input {
  margin-top: 10px;
}
</style>
