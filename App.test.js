import { shallow } from 'enzyme';
import App from './src/App';
import './setupTests.js';

it('expect to render App Component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
