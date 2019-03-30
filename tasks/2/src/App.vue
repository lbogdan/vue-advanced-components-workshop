<template>
  <div id="app">
    <div class="container">
      <people-list style="flex: 1" />
      <planet-list style="flex: 1" />
    </div>
  </div>
</template>

<script>
import PeopleList from './components/PeopleList.vue';
import PlanetList from './components/PlanetList.vue';

export default {
  name: 'app',
  components: {
    PeopleList,
    PlanetList,
  },
};
</script>

<style>
body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
.container {
  display: flex;
  width: 400px;
}
</style>
