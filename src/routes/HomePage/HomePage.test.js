import { shallow } from 'enzyme';
import React from 'react';
import '../../../setupTests';
import HomePage from './HomePage';

it('expect to render NavBar Component', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});

