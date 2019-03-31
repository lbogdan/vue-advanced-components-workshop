# Task 5

## Goal

Create a `PageLayout` component that receives 3 slots: default, `footer` and `header`. Make the three pages use the layout, like following:

- `Page1` uses default `footer` and `header` slot content
- `Page2` has its own `header` slot content
- `Page3` has its own `footer` slot content

## Bonus

- make `Page1` hide the `footer` (while the other two pages continue to work as expected)
- make the 3 pages lazy load

## Hints

- use the following markup:

```html
<header>
  here be default header
</header>
<div class="content">
  here be content
</div>
<footer>
  here be default footer
</footer>
```

- to build and serve the app use

```
yarn task5-serve
```

- use `syntax-dynamic-import` babel plugin

```json
// babel.rc
{
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

- remove the `prefetch` webpack plugin

```js
// vue.config.js
chainWebpack: config => {
  config.plugins.delete('prefetch');
};
```
