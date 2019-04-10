<template>
  <div v-if="value">
    <div class="modal" id="exampleModal" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="close" @click="close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="close">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="$emit('ok')">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('input', false);
    },
  },
};
</script>
