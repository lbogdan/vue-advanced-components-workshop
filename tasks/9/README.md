# Task 9 — and the last one! 🎉

# Goal

Implement `Tabs` and `Tab` components with the following API:

```html
<tabs v-model="selectedTab">
  <tab title="Tab 1">
    tab 1 contents here
  </tab>
  <tab title="Tab 2">
    tab 2 contents here
  </tab>
  <tab title="Tab 3">
    tab 3 contents here
  </tab>
</tabs>
```

where `selectedTab` is the index of the currently selected tab.

# Hints

- use slots
- use `this.$children` in `Tabs` to get the children tabs
