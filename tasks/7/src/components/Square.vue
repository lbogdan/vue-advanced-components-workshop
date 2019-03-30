<template>
  <div :style="style"><slot /></div>
</template>

<script>
export default {
  name: 'square',
  computed: {
    style() {
      return {
        color: '#000',
        backgroundColor: '#eee',
        padding: '10px',
        height: '200px',
        width: '200px',
      };
    },
  },
};
</script>
