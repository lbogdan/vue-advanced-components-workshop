<template>
  <div id="app">
    <hero-list />
  </div>
</template>

<script>
import HeroList from './components/HeroList.vue';

export default {
  name: 'app',
  components: {
    HeroList,
  },
};
</script>

<style>
body,
button {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
button {
  font-size: 16px;
}
</style>
