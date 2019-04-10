<template>
  <page-layout>
    <div>here be page 3 content</div>
    <template v-slot:footer>
      <div>
        here be page 3 special footer
      </div>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'page-3',
  components: {
    PageLayout,
  },
};
</script>
