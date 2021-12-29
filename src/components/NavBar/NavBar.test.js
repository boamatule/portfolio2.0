import { shallow } from 'enzyme';
import NavBar from './NavBar';
import '../../../setupTests';

it('expect to render NavBar Component', () => {
  expect(shallow(<NavBar />)).toMatchSnapshot();
});
