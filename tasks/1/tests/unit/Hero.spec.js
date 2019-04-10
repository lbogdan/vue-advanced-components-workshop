import { mount } from '@vue/test-utils';
import Hero from '@/components/Hero.vue';

let wrapper;

afterEach(() => {
  wrapper.destroy();
});

function createWrapper(onSelect) {
  return mount(Hero, {
    propsData: {
      data: {
        id: 1,
        firstName: 'Bogdan',
        lastName: 'Luca',
        framework: 'Vue.js',
        selected: false,
      },
    },
    listeners: {
      select: onSelect || function() {},
    },
  });
}

describe('Hero.vue', () => {
  it('shows the hero data', () => {
    wrapper = createWrapper();
    expect(wrapper.text()).toContain('Bogdan');
    expect(wrapper.text()).toContain('Luca');
    expect(wrapper.text()).toContain('Vue.js');
  });

  it('shows a checkbox', () => {
    wrapper = createWrapper();
    const $checkbox = wrapper.find('input');
    expect($checkbox.exists()).toBe(true);
    expect($checkbox.element.type).toBe('checkbox');
  });

  it('updates the checkbox when "selected" property changes', () => {
    wrapper = createWrapper();
    wrapper.vm.data.selected = true;
    const $checkbox = wrapper.find('input');
    expect($checkbox.element.value).toBe('on');
  });

  it('emits a "select" event with the specified payload when clicking the checkbox', () => {
    const onSelect = jest.fn();
    wrapper = createWrapper(onSelect);
    const $checkbox = wrapper.find('input');
    $checkbox.trigger('click');
    expect(onSelect).toHaveBeenCalledWith({ id: 1, value: true });
  });
});
