// import { shallow } from 'enzyme';
// import React from 'react';
// import '../../../setupTests';
// import Navigation from './Navigation';

// it('renders the NavBar component', () => {
//   const wrapper = shallow(<Navigation />);
//   expect(wrapper.exists()).toBe(true);
// });

// it('renders a specific number of navigation items', () => {
//   const wrapper = shallow(<Navigation />);
//   const navItems = wrapper.find('NavItem'); // Assuming you have a component named 'NavItem'
//   console.log(navItems.debug());
//   expect(navItems.length).toBe(4); // Adjust the expected value based on the number of navigation items
// });

// it('matches the snapshot', () => {
//   const wrapper = shallow(<Navigation />);
//   expect(wrapper).toMatchSnapshot();
// });


// import React from 'react';
// import { shallow } from 'enzyme';

// import NavBar from './Navigation';

// describe('NavBar component', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<NavBar />);
//   });

//   it('renders without crashing', () => {
//     expect(wrapper.exists()).toBe(true);
//   });

//   it('matches the snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('updates scrollNav state on changeNav', () => {
//     const instance = wrapper.instance();
//     instance.changeNav();
//     expect(wrapper.state('scrollNav')).toBe(true);
//   });

//   it('updates click state on handleClick', () => {
//     const instance = wrapper.instance();
//     instance.handleClick();
//     expect(wrapper.state('click')).toBe(true);
//   });

//   it('updates click state to false on closeMobileMenu', () => {
//     const instance = wrapper.instance();
//     instance.closeMobileMenu();
//     expect(wrapper.state('click')).toBe(false);
//   });
// });

import { shallow } from 'enzyme';
import React from 'react';
import NavBar from './Navigation';
import { NavLinks } from './Navigation.Styles';
import '../../../setupTests';
describe('NavBar component', () => {
  it('renders without crashing', () => {
    shallow(<NavBar />);
  });

  it('renders a logo', () => {
    const wrapper = shallow(<NavBar />);
    const logo = wrapper.find('StyledLogo');
    expect(logo.exists()).toBe(true);
  });

  it('toggles the mobile menu when the menu icon is clicked', () => {
    const wrapper = shallow(<NavBar />);
    const menuIcon = wrapper.find('DropdownMobileIcon');

    // Initially, the menu should be closed
    expect(wrapper.state('click')).toBe(false);

    // Simulate a click on the menu icon
    menuIcon.simulate('click');

    // After the click, the menu should be open
    expect(wrapper.state('click')).toBe(true);
  });

  it('closes the mobile menu when a navigation link is clicked', () => {
    const wrapper = shallow(<NavBar />);
    const menuIcon = wrapper.find('DropdownMobileIcon');
    const navLinks = wrapper.find(NavLinks);

    // Open the menu by clicking the menu icon
    menuIcon.simulate('click');

    // Simulate a click on a navigation link
    navLinks.at(0).simulate('click');

    // After the click, the menu should be closed
    expect(wrapper.state('click')).toBe(false);
  });

  it('renders the correct number of navigation links', () => {
    const wrapper = shallow(<NavBar />);
    const navLinks = wrapper.find(NavLinks);
    expect(navLinks).toHaveLength(4);
  });
});
