import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Statistic } from "../../components/Sider/Statistic";

Enzyme.configure({
  adapter: new Adapter()
});

test("Should render Statistic page", () => {
  const wrapper = shallow(<Statistic savedFood={{}} />);
  expect(wrapper.find('.statistic').length).toBe(1);
});