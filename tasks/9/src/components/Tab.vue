<template>
  <div v-if="active">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
