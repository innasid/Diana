import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Demo1 from "../components/Demo1";

Enzyme.configure({
  adapter: new Adapter(),
});
test("Testing H1 tag", () => {
  const wrapper = shallow(<Demo1 />);
  const h1tag = wrapper.find("h1");
  expect(h1tag).toHaveLength(1);
});


