// import React from 'react';
// import { shallow } from 'enzyme';
// import Profile from './Profile';
// import '../../../setupTests';

// it('expect to render Profile Component', () => {
//   expect(shallow(<Profile />)).toMatchSnapshot();
// });
import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Heading and Subtitle correctly', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find('Heading')).toHaveLength(1);
    expect(wrapper.find('Subtitle')).toHaveLength(1);
  });

  it('renders correct text in Heading and Subtitle', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find('Heading').text()).toEqual('Boa Matule');
    expect(wrapper.find('Subtitle').text()).toContain(
      "I'm a Full Stack Software Developer with background in hospitality's industry as a Chef and E-commerce Manager as a Founder. I'm based in beautiful Oslo, Norway. I'm originally from the pearl of Indian Ocean, Mozambique. I love building, architecting, and scaling web and mobile applications using the latest tech's stack in the market."
    );
  });
});
