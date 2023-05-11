// import { shallow } from 'enzyme';
// import React from 'react';
// import '../../../setupTests';
// import Navigation from './Navigation';

// it('renders the Navigation component', () => {
//   const wrapper = shallow(<Navigation />);
//   expect(wrapper.exists()).toBe(true);
// });

// it('renders a specific number of navigation items', () => {
//   const wrapper = shallow(<Navigation />);
//   const navItems = wrapper.find('NavItem'); // Assuming you have a component named 'NavItem'
//   expect(navItems.length).toBe(8); // Adjust the expected value based on the number of navigation items
// });

// it('matches the snapshot', () => {
//   const wrapper = shallow(<Navigation />);
//   expect(wrapper).toMatchSnapshot();
// });
import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe('NavBar component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates scrollNav state on changeNav', () => {
    const instance = wrapper.instance();
    instance.changeNav();
    expect(wrapper.state('scrollNav')).toBe(true);
  });

  it('updates click state on handleClick', () => {
    const instance = wrapper.instance();
    instance.handleClick();
    expect(wrapper.state('click')).toBe(true);
  });

  it('updates click state to false on closeMobileMenu', () => {
    const instance = wrapper.instance();
    instance.closeMobileMenu();
    expect(wrapper.state('click')).toBe(false);
  });
});
