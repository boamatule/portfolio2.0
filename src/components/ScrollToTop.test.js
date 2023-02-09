import React from 'react';
import { shallow } from 'enzyme';
import ScrollToTop from './ScrollToTop';
import '../../setupTests';

it('expect to render ScrollToTop Component', () => {
  expect(shallow(<ScrollToTop />)).toMatchSnapshot();
});
