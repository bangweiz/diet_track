import React from "React";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Profile from "../../components/Sider/Profile";

Enzyme.configure({
  adapter: new Adapter()
});

test("Should render Profile correctly", () => {
  const wrapper = shallow(<Profile />);
  expect(wrapper).toMatchSnapshot();
});
