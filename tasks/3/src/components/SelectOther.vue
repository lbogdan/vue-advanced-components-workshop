<template>
  <div>
    <div>
      <select>
        <option v-for="option in options" :key="option" :value="option">{{
          option
        }}</option>
      </select>
    </div>
    <div class="input">
      <input />
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
  },
  // TODO
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
