<template>
  <div id="app">
    <div class="menu">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'page-1' }">Page 1</router-link> |
      <router-link :to="{ name: 'page-2' }">Page 2</router-link> |
      <router-link :to="{ name: 'page-3' }">Page 3</router-link>
    </div>
    <router-view style="padding: 20px;" />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
body,
button {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
button {
  font-size: 16px;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.menu {
  padding: 20px;
}
</style>
