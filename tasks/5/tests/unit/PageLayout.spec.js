import { mount } from '@vue/test-utils';
import PageLayout from '@/components/PageLayout.vue';

let wrapper;

afterEach(() => {
  wrapper.destroy();
});

function createWrapper(content, header, footer) {
  let pageContent = `<div>${content}</div>`;
  if (header !== undefined) {
    pageContent += `<template v-slot:header><div>${header}</div></template>`;
  }
  if (footer !== undefined) {
    if (footer !== null) {
      pageContent += `<template v-slot:footer><div>${footer}</div></template>`;
    } else {
      // empty slot
      pageContent += `<template v-slot:footer />`;
    }
  }
  const Page = {
    template: `<page-layout>${pageContent}</page-layout>`,
    components: {
      PageLayout,
    },
  };
  return mount(Page);
}

describe('PageLayout.vue', () => {
  it('shows content', () => {
    wrapper = createWrapper('here be content');
    const $content = wrapper.find('.content');
    expect($content.exists()).toBe(true);
    expect($content.text()).toContain('here be content');
  });

  it('shows default header', () => {
    wrapper = createWrapper('here be content');
    const $header = wrapper.find('header');
    expect($header.exists()).toBe(true);
    expect($header.text()).toContain('default header');
  });

  it('shows default footer', () => {
    wrapper = createWrapper('here be content');
    const $footer = wrapper.find('footer');
    expect($footer.exists()).toBe(true);
    expect($footer.text()).toContain('default footer');
  });

  it('shows custom header', () => {
    wrapper = createWrapper('content', 'here be custom header');
    const $header = wrapper.find('header');
    expect($header.exists()).toBe(true);
    expect($header.text()).toContain('custom header');
  });

  it('shows custom footer', () => {
    wrapper = createWrapper('content', undefined, 'here be custom footer');
    const $footer = wrapper.find('footer');
    expect($footer.exists()).toBe(true);
    expect($footer.text()).toContain('here be custom footer');
  });

  it('can hide footer', () => {
    wrapper = createWrapper('content', undefined, null);
    const $footer = wrapper.find('footer');
    expect($footer.exists()).toBe(false);
  });
});
