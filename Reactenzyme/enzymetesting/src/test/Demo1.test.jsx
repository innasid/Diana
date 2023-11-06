import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Demo1 from "../components/Demo1";
import Demo2 from "../components/Demo2";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Demo1 testing", () => {
  it("Testing h1 tag", () => {
    const wrapper = shallow(<Demo1 />);
    const h1tag = wrapper.find("h1");
    expect(h1tag).toHaveLength(1);
  });
  it("Testing Button value that is displayed on Button", () => {
    const wrapper = shallow(<Demo1 />);
    const btnelement = wrapper.find("#btn");
    expect(btnelement.text()).toEqual("Click me");
  });
  it("Testing Content of H1", () => {
    const wrapper = shallow(<Demo1 />);
    const h1element = wrapper.find("#h1head");
    expect(h1element.text()).toEqual("Enzyme Test Demo1");
  });
  it("Testing Button value that is displayed on Button", () => {
    const wrapper = shallow(<Demo1 />);
    const btnelement = wrapper.find("#btn");
    expect(btnelement.hasClass("btn-primary")).toBe(true);
    expect(btnelement.hasClass("btn")).toBe(true);
  });
  it("Initial value of counter in p tag", () => {
    const wrapper = shallow(<Demo1 />);
    const ptag = wrapper.find("#display1");
    expect(ptag.text()).toBe("Counter value is : 5");
  });
  it("Initial value of counter in p tag once clicked", () => {
    const wrapper = shallow(<Demo1 />);
    wrapper.find("#btn").simulate("click");
    const ptag = wrapper.find("#display1");
    expect(ptag.text()).toBe("Counter value is : 6");
    wrapper.find("#btn").simulate("click");
    const ptag1 = wrapper.find("#display1");
    expect(ptag1.text()).toBe("Counter value is : 7");
  });
});
describe("Demo2 testing Class component", () => {
  it("Testing h1 tag", () => {
    const wrapper = shallow(<Demo2 />);
    const h1tag = wrapper.find("h1");
    expect(h1tag).toHaveLength(1);
  });
  it("Testing Button value that is displayed on Button", () => {
    const wrapper = shallow(<Demo2 />);
    const btnelement = wrapper.find("#btn");
    expect(btnelement.text()).toEqual("Click me");
  });
  it("Testing Content of H1", () => {
    const wrapper = shallow(<Demo2 />);
    const h1element = wrapper.find("#h1head");
    expect(h1element.text()).toEqual("Enzyme Test Demo2");
  });
  it("Testing Button value that is displayed on Button", () => {
    const wrapper = shallow(<Demo2 />);
    const btnelement = wrapper.find("#btn");
    expect(btnelement.hasClass("btn-primary")).toBe(true);
    expect(btnelement.hasClass("btn")).toBe(true);
  });
  it("Initial value of counter in p tag", () => {
    const wrapper = shallow(<Demo2 />);
    const ptag = wrapper.find("#display1");
    expect(ptag.text()).toBe("Counter value is : 5");
  });
  it("Initial value of counter in p tag once clicked", () => {
    const wrapper = shallow(<Demo2 />);
    wrapper.find("#btn").simulate("click");
    const ptag = wrapper.find("#display1");
    expect(ptag.text()).toBe("Counter value is : 6");
    wrapper.find("#btn").simulate("click");
    const ptag1 = wrapper.find("#display1");
    expect(ptag1.text()).toBe("Counter value is : 7");
  });
});