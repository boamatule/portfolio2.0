import { shallow } from "enzyme";
import React from "react";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("should render correctly", () => {
    const component = shallow(<AboutPage />);
    expect(component).toMatchSnapshot();
  });
});