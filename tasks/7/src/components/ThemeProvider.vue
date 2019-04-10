<script>
export default {
  name: 'theme-provider',
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localTheme: { ...this.theme },
    };
  },
  render(h) {
    return h('div', this.$slots.default);
  },
  provide() {
    return { theme: this.localTheme };
  },
  watch: {
    theme(newTheme) {
      Object.assign(this.localTheme, newTheme);
    },
  },
};
</script>
