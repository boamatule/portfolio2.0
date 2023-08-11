import { shallow } from "enzyme";
import React from "react";
import AboutPage from "./AboutPage";
import '../../../setupTests';

// it("expect to render AboutPage component", () => {
//   expect(shallow(<AboutPage />)).toMatchSnapshot();
// });

// it("expect to render AboutPage component", () => {
//   const wrapper = shallow(<AboutPage />);
//   expect(wrapper).toBeTruthy();
// });


describe('AboutPage Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper).toBeTruthy();
  });

  it('should render a <AboutPage />', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.find('AboutPage')).toHaveLength(1);
  });
  
});
