import { shallow } from 'enzyme';
import Navigation from './Navigation';
import '../../../setupTests';

it('expect to render NavBar Component', () => {
  expect(shallow(<Navigation />)).toMatchSnapshot();
});
