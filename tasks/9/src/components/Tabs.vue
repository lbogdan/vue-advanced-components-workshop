<template>
  <div style="display: flex; flex-direction: column;">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          Tab 1
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Tab 2
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Tab 3
        </a>
      </li>
    </ul>
    <div class="p-3 border border-top-0" style="flex: 1">
      Tab content goes here
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  // TODO
};
</script>
