import { mount } from '@vue/test-utils';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';

let wrapper;

afterEach(() => {
  wrapper.destroy();
});

function createTabWrapper() {
  const App = {
    template: `<Tab title="test" ref="tab">here be content</Tab>`,
    components: {
      Tab,
    },
  };
  return mount(App);
}

function createTabsWrapper() {
  const App = {
    template: `
    <Tabs v-model="selectedTab">
      <Tab title="Tab 1">1st tab content</Tab>
      <Tab title="Tab 2">2nd tab content</Tab>
    </Tabs>
    `,
    components: {
      Tabs,
      Tab,
    },
    data() {
      return {
        selectedTab: 0, // 1st tab
      };
    },
  };
  return mount(App);
}

describe('Tab.vue', () => {
  it("doesn't show any content by default", () => {
    wrapper = createTabWrapper();
    const $tab = wrapper.find('div');
    expect($tab.exists()).toBe(false);
  });

  it('shows the content when active is set to true', () => {
    wrapper = createTabWrapper();
    wrapper.vm.$refs.tab.active = true;
    const $tab = wrapper.find('div');
    expect($tab.text()).toContain('content');
  });
});

describe('Tabs.vue', () => {
  it('shows tab titles', () => {
    wrapper = createTabsWrapper();
    expect(wrapper.text()).toContain('Tab 1');
    expect(wrapper.text()).toContain('Tab 2');
  });

  it('sets active on the active tab', () => {
    wrapper = createTabsWrapper();
    expect(
      wrapper
        .findAll('a')
        .at(0)
        .classes()
    ).toContain('active');
  });

  it('doesn`t set active on inactive tabs', () => {
    wrapper = createTabsWrapper();
    expect(
      wrapper
        .findAll('a')
        .at(1)
        .classes()
    ).not.toContain('active');
  });

  it('shows the active tab contents', () => {
    wrapper = createTabsWrapper();
    expect(wrapper.text()).toContain('1st tab content');
  });

  it("doesn't show inactive tabs contents", () => {
    wrapper = createTabsWrapper();
    expect(wrapper.text()).not.toContain('2nd tab content');
  });

  it('selects the tab when v-model changes', () => {
    wrapper = createTabsWrapper();
    wrapper.vm.selectedTab = 1; // 2nd tab
    expect(
      wrapper
        .findAll('a')
        .at(0)
        .classes()
    ).not.toContain('active');
    expect(
      wrapper
        .findAll('a')
        .at(1)
        .classes()
    ).toContain('active');
    expect(wrapper.text()).not.toContain('1st tab content');
    expect(wrapper.text()).toContain('2nd tab content');
  });

  it('changes v-model when a tab is activated', () => {
    wrapper = createTabsWrapper();
    wrapper
      .findAll('a')
      .at(1)
      .trigger('click');
    expect(wrapper.vm.selectedTab).toBe(1);
  });
});
