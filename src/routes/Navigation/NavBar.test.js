import { shallow } from 'enzyme';
import React from 'react';
import '../../../setupTests';

import NavBar from './Navigation';

describe('NavBar Component', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallow(<NavBar />);
  // });
  // it('should match the snapshot', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('should render without crashing', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toBeTruthy();
  });

  it('should render a <Nav />', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('Nav')).toHaveLength(1);
  });
})