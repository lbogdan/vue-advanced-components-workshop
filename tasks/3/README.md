# Task 3

## Goal

Create a `SelectOther` component that receives an array of strings called `options`. There should be a `select` element, having all the provided options plus an additional `Other` option, that when selected, shows an input where you can type a custom value. Make the component work with `v-model`, i.e.

```html
<select-other :options="options" v-model="selectedOption" />
```

## Bonus

- when the `v-model`'s value is `null`, clear the select

## Hints

- use a computed property with a getter and a setter for `<select>`'s `v-model`
- try to show/hide the "other" text input, without having a local boolean by detecting if "other" is selected
- use a local state and a watcher to send the data from the text input to the parent
