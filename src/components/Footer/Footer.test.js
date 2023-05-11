import { shallow } from 'enzyme';
import React from 'react';
import '../../../setupTests';
import Footer from './Footer';

it('expect to render NavBar Component', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});

