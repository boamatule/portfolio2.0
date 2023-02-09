import React from 'react';
import { shallow } from 'enzyme';
import ProjectList from './ProjectsList';
import '../../../setupTests';

it('expect to render ProjectsList Component', () => {
  expect(shallow(<ProjectList />)).toMatchSnapshot();
});
