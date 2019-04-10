<template>
  <page-layout>
    <div>here be page 1 content</div>
    <template v-slot:footer />
  </page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'page-1',
  components: {
    PageLayout,
  },
};
</script>
