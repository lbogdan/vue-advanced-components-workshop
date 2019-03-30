# Task 3

## Goal

Create a `SelectOther` component that receives a string array `options` and shows a select having all those options, and an additional `Other` option, that when selected, shows an input where you can type a custom value. Make it work with `v-model`, i.e.

```
<select-other :options="options" v-model="selectedOption" />
```

## Bonus

- when the `v-model`'s value is `null`, clear the select

## Hints

- use a computed property with a getter and a setter for `<select>`'s `v-model`
