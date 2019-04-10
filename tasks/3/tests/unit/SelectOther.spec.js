import { mount } from '@vue/test-utils';
import SelectOther from '@/components/SelectOther.vue';

let wrapper;

afterEach(() => {
  wrapper.destroy();
});

// we use an App wrapper to be able to test v-model
function createWrapper(selected) {
  const App = {
    template: `<SelectOther :options="options" v-model="selected" />`,
    components: {
      SelectOther,
    },
    data() {
      return {
        options: ['Option 1', 'Option 2', 'Option 3'],
        selected: selected || null,
      };
    },
  };
  return mount(App);
}

function getOptionValue($select, label) {
  const option = Array.apply(null, $select.element.options).find(
    option => option.text === label
  );
  return option.value;
}

describe('SelectOther.vue', () => {
  it('shows a select', () => {
    wrapper = createWrapper();
    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('doesn\'t show an input when "Other" option is not selected', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('input').exists()).toBe(false);
  });

  // "selects nothing" - jsdom vs. Chrome difference
  it("selects the first option when v-model's value is null", () => {
    const wrapper = createWrapper();
    expect(wrapper.find('select').element.selectedIndex).toBe(0);
  });

  it('updates the model when an option is selected', () => {
    wrapper = createWrapper();
    const $select = wrapper.find('select');
    $select.setValue(getOptionValue($select, 'Option 2'));
    expect(wrapper.vm.selected).toBe('Option 2');
  });

  it('shows an input when "Other" option is selected', () => {
    wrapper = createWrapper();
    const $select = wrapper.find('select');
    $select.setValue(getOptionValue($select, 'Other'));
    expect(wrapper.vm.selected).toBe('');
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('updates the model when "Other" options is selected and text is inputted', () => {
    wrapper = createWrapper();
    const $select = wrapper.find('select');
    $select.setValue(getOptionValue($select, 'Other'));
    wrapper.find('input').setValue('some text');
    expect(wrapper.vm.selected).toBe('some text');
  });

  it('updates the select when setting the model to an existing option', () => {
    wrapper = createWrapper();
    const $select = wrapper.find('select');
    wrapper.vm.selected = 'Option 3';
    expect($select.element.value).toBe('Option 3');
    expect($select.element.selectedIndex).toBe(2); // 3rd option in the list
  });

  it('updates the select to "Other" and shows the input with the option\'s value when setting the model to a non-existing option', () => {
    wrapper = createWrapper();
    const $select = wrapper.find('select');
    wrapper.vm.selected = 'some text';
    expect($select.element.selectedOptions[0].text).toBe('Other');
    expect($select.element.selectedIndex).toBe(3); // 4th option in the list
    const $input = wrapper.find('input');
    expect($input.exists()).toBe(true);
    expect($input.element.value).toBe('some text');
  });

  // "selects nothing" - jsdom vs. Chrome difference
  it('selects the first option when you set the value to null', () => {
    wrapper = createWrapper('Option 2');
    expect(wrapper.vm.selected).toBe('Option 2');
    wrapper.vm.selected = null;
    expect(wrapper.find('select').element.selectedIndex).toBe(0);
  });
});
