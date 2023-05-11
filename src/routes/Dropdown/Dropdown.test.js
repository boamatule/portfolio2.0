import { shallow } from 'enzyme';
import React from 'react';
import '../../../setupTests';
import Dropdown from './Dropdown';

it('expect to render NavBar Component', () => {
  expect(shallow(<Dropdown />)).toMatchSnapshot();
});

