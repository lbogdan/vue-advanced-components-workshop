<template>
  <div class="square" :style="style"><slot /></div>
</template>

<script>
function getProp(obj, key, def) {
  return key in obj ? obj[key] : def;
}

export default {
  name: 'square',
  inject: {
    theme: {
      default() {
        return {};
      },
    },
  },
  computed: {
    style() {
      return {
        color: getProp(this.theme, 'color', 'black'),
        backgroundColor: getProp(this.theme, 'backgroundColor', 'white'),
        padding: '10px',
        height: '200px',
        width: '200px',
      };
    },
  },
};
</script>
