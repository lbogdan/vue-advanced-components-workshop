import { mount } from '@vue/test-utils';
import Modal from '@/components/Modal.vue';

let wrapper;

afterEach(() => {
  wrapper.destroy();
});

// we use an App wrapper to be able to test v-model
function createWrapper(opened, okHandler) {
  const App = {
    template: `<Modal v-model="opened" @ok="okHandler" />`,
    components: {
      Modal,
    },
    data() {
      return {
        opened,
      };
    },
    methods: {
      okHandler: okHandler || function() {},
    },
  };
  return mount(App);
}

describe('Modal.vue', () => {
  it("doesn't show when opened is false", () => {
    wrapper = createWrapper(false);
    expect(wrapper.find('.modal').exists()).toBe(false);
  });

  it('shows when opened is true', () => {
    wrapper = createWrapper(true);
    expect(wrapper.find('.modal').exists()).toBe(true);
  });

  it('closes when you click the "Close" button', () => {
    wrapper = createWrapper(true);
    const $closeButton = wrapper.find('.btn-secondary');
    expect($closeButton.exists()).toBe(true);
    $closeButton.trigger('click');
    expect(wrapper.vm.opened).toBe(false);
  });

  it('sends "ok" event when you click "Ok" button', () => {
    const okHandler = jest.fn();
    wrapper = createWrapper(true, okHandler);
    const $okButton = wrapper.find('.btn-primary');
    expect($okButton.exists()).toBe(true);
    $okButton.trigger('click');
    expect(okHandler).toHaveBeenCalled();
  });
});
