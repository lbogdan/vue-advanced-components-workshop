## Agenda

- (very) short intro to components
- ~9 tasks
  - present the concept
  - describe the task
  - 10 minutes for you to solve the task ⇄ 5 more minutes to solve the task together
- (if there's time left) one freestyle task
- 15' break

## Components

- What is an (UI) component?
  - & "a visual entity that encapsulates a piece of functionality"
  - & a custom DOM element
- & "smart" vs. "dumb" / stateful vs. stateless / [presentational vs. container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Components in Vue.js

- component object definition

```js
export default {
  name: 'component',
  props: {
    /* ... */
  },
  data() {
    return {
      /* ... */
    };
  },
  methods: {
    /* ... */
  },
  /* ... */
};
```

- single file components `Component.vue`
- component hierarchy
  - it's a tree
  - it has a main root instance
  - components have a `$parent` and zero or more `$children`

## Vue.js Components Internal API

- data()
- computed
- methods
- lifecycle hooks
- watch
- refs
- render
- mixins
- $el, $parent, \$children [etc.](https://vuejs.org/v2/api/)

## Vue.js Components External API

- props
- events
- **slots**
- provide / inject

## Tasks

1. Warm-up — props & events
2. Extracting common logic from components — mixins
3. Components with `v-model`
4. `Modal` component — slots
5. `PageLayout` component — name slots & lazy-loading
6. Customizing children UI — scoped slots
7. `ThemeProvider` component — provide / inject
8. Wrapping an [insert library here] component
9. `Tabs` & `Tab` components
10. ???

## Warming Up - Task 1

Create a component that receives props and sends events.

## Mixins

- a way to extract common functionality out of components
- a definition object, exactly like with components
- when a component uses a mixin, its definition properties are merged with those of the mixin

## Task 2

Extract the common API fetch logic from two components.

## Mixins Pros / Cons

- pros
  - DRY
  - reusability
- cons
  - hidden (implicit) dependencies — documentation
  - name clashes — "namespacing"
  - [Mixins Considered Harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)

## Components and `v-model`

```html
<component v-model="someState" />
```

is syntactic sugar for

```html
<component :value="someState" @input="someState = $event" />
```

## Task 3

Create a component for an extended select that allows for an "Other" option and works with `v-model`.

## Slots

- allow components to send markup to their children
- change the render tree

## Default slot

- in parent

```html
<child>
  <div>
    <span>some markup here</span>
  </div>
</child>
```

- in child

```html
<template>
  <slot />
</template>
```

- default content

```html
<slot>
  <div>
    <span>some default content here</span>
  </div>
</slot>
```

## Task 4

Create a modal component.

## Named Slots

- in parent

```html
<child>
  <div v-slot="header">
    <span>some markup here</span>
  </div>
</child>
```

- in child

```html
<template>
  <slot name="header">
    <span>default header markup</span>
  </slot>
</template>
```

## Task 5

Create a `PageLayout` component that takes 3 slots — default, `header` and `footer`.

## Lazy-loaded Components

- usually used with route components

```js
const Page = () => import('./path/to/Page.vue');
```

- that's pretty much it! 🙂 (thanks to webpack's magic)

## Task 5 - take 2

Make the 3 pages from task 5 lazy-loaded.

## Scoped Slots

- slots with parameters
- in parent

```html
<template v-slot:row="{ rowData }">
  <!-- use rowData here -->
</template>
```

- in child

```html
<slot name="row" v-bind:rowData="localData">
  default slot contents here
</slot>
```

## Task 6

Use scoped slots to customize how a `Hero` row from task 1 looks like.

## Provide / Inject

- allows an up the tree component to send (provide) data to all its descendants
- in the provider:

```js
export default {
  /* ... */
  provide() {
    return {
      theme: {
        color: 'orangered',
        /* ... */
      },
    };
  },
};
```

- in a descendant:

```js
export default {
  /* ... */
  inject: ['theme'], // accessible as this.theme
};
```

- the provided object is not reactive (but we can circumvent that)

## Task 7

Define a `ThemeProvider` that provides a `theme` object, with `color` and `backgroundColor` properties. Use the provided `theme` in a descendant component.

## Wrapping jQuery Components

- initialization goes in `mounted()`
- use `this.$el`, the component's root DOM element
- (two-way) react to changes during the component's lifecycle
- cleanup goes in `beforeDestroy()`

## Task 8

Refactor a `MultiSelect` component to use [select2](https://select2.org/).

## Task 9 — and the last one! 🎉

Implement `Tabs` and `Tab` components.

## Resources

- Vue.js documentation, pretty much
- Vue.js source code
- [Renderless Components in Vue.js](https://adamwathan.me/renderless-components-in-vuejs/)
- [7 Secret Patterns Vue Consultants Don’t Want You to Know](https://www.youtube.com/watch?v=7lpemgMhi0k)

## Thank you! 🙏

Questions?
