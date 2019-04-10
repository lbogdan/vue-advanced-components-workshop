<template>
  <div class="container">
    <header>
      <slot name="header">here be default header</slot>
    </header>
    <div class="content">
      <slot />
    </div>
    <footer v-if="!('footer' in $slots) || $slots.footer">
      <slot name="footer">
        here be default footer
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'page-template',
};
</script>

<style>
header,
footer {
  padding: 20px;
}
header {
  background-color: lightyellow;
}
footer {
  background-color: lavender;
}
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
