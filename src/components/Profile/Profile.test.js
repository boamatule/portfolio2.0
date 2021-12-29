import { shallow } from 'enzyme';
import Profile from './Profile';
import '../../../setupTests';

it('expect to render Profile Component', () => {
  expect(shallow(<Profile />)).toMatchSnapshot();
});
