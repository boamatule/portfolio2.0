import React from 'react'
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import '../../../setupTests';

it('expect to render NavBar Component', () => {
  expect(shallow(<Navigation />)).toMatchSnapshot();
});

// import React from 'react'
// import { render, screen } from '@testing-library/react';
// import Navigation from './Navigation';

// test('it should render a NavBar Component', () => { 
//   render(<Navigation />);
//   const element = screen.getByRole("HTMLElement");
//     expect(element).toBeInTheDocument();

//   screen.debug();
// });
