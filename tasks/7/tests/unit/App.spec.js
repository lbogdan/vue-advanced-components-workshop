// we'll test the whole App

import { mount } from '@vue/test-utils';
import Vue from 'vue';
import App from '@/App.vue';

let wrapper;

afterEach(() => {
  wrapper.destroy();
});

function createWrapper() {
  return mount(Vue.extend(App));
}

describe('App.vue', () => {
  it('shows the unthemed component', () => {
    wrapper = createWrapper();
    const $square = wrapper.find('.square');
    expect($square.exists()).toBe(true);
    expect($square.attributes().style).toContain('color: black');
  });

  it('shows the themed component after clicking "With theme"', () => {
    wrapper = createWrapper();
    wrapper.find('.toggle').trigger('click');
    const $square = wrapper.find('.square');
    expect($square.attributes().style).toContain('color: orangered');
  });

  it('switches the theme when clicking "Switch theme"', () => {
    wrapper = createWrapper();
    wrapper.find('.toggle').trigger('click');
    wrapper.find('.switch').trigger('click');
    const $square = wrapper.find('.square');
    expect($square.attributes().style).toContain('color: yellow');
  });
});
