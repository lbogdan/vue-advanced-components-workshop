<template>
  <page-layout>
    <template v-slot:header>
      <div>
        here be page 2 special header
      </div>
    </template>
    <div>here be page 2 content</div>
  </page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'page-2',
  components: {
    PageLayout,
  },
};
</script>
