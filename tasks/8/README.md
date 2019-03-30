# Task 8

## Goal

Refactor the `MultiSelect` component to use [select2](https://select2.org/), keeping its API.

## Hints

- select2 API:
  - initialize: `$(selectEl).select2({ multiple: true })`
  - emits `change` event - `$(selectEl).on('change', handler)`
  - get value: `$(selectEl).val()`
  - set value: `$(selectEl).val(newValue).trigger('change')`
  - destroy: `$(selectEl).select2('distroy')`
- initialize in `mounted()`, cleanup in `beforeDestroy()`
- use `this.$el`, the component's root DOM element
