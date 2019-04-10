<template>
  <div style="display: flex; flex-direction: column;">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="tab._uid">
        <a
          class="nav-link"
          href="#"
          :class="{ active: tab.active }"
          @click.prevent="setActive(index)"
        >
          {{ tab.title }}
        </a>
      </li>
    </ul>
    <div class="p-3 border border-top-0" style="flex: 1">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    value: {
      validator(value) {
        return value === null || typeof value === 'number';
      },
    },
  },
  data() {
    return {
      tabs: [],
      activeIndex: null,
    };
  },
  mounted() {
    this.tabs = this.$children;
    this.setActive(this.value !== null ? this.value : 0);
  },
  methods: {
    setActive(index) {
      if (index !== this.activeIndex) {
        if (this.activeIndex !== null) {
          this.tabs[this.activeIndex].active = false;
        }
        this.tabs[index].active = true;
        this.activeIndex = index;
      }
      this.$emit('input', index);
    },
  },
  watch: {
    value(value) {
      this.setActive(value);
    },
  },
};
</script>
