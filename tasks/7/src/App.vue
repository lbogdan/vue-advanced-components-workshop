<template>
  <component
    :is="withTheme ? 'ThemeProvider' : 'div'"
    id="app"
    :theme="currentTheme"
  >
    <square>I am square!</square>
    <button class="toggle" @click="withTheme = !withTheme">
      With{{ withTheme ? 'out' : '' }} theme
    </button>
    <button
      class="switch"
      v-if="withTheme"
      @click="currentThemeId = 1 - currentThemeId"
    >
      Switch theme
    </button>
  </component>
</template>

<script>
import ThemeProvider from './components/ThemeProvider.vue';
import Square from './components/Square.vue';

export default {
  name: 'app',
  components: {
    ThemeProvider,
    Square,
  },
  data() {
    return {
      themes: [
        {
          color: 'orangered',
          backgroundColor: 'lightgreen',
        },
        {
          color: 'yellow',
          backgroundColor: 'navy',
        },
      ],
      withTheme: false,
      currentThemeId: 0,
    };
  },
  computed: {
    currentTheme() {
      return this.themes[this.currentThemeId];
    },
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
  display: block;
  font-size: 16px;
  margin: 10px 0;
}
</style>
