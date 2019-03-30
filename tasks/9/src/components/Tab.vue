<template>
  <div>
    Tab contents
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
};
</script>
