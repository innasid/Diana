import React from 'react'
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Add from "../components/Add"

Enzyme.configure({
    adapter: new Adapter(),
  });

describe ("complete testing of Add component", () => {
    it ("check page will mount or not", () => {
        const wrapper = shallow(<Add />);
        const wrapper1 = mount(<Add/>)
    })

    // it("To test initial values of state", () => {
    //     const wrapper = shallow(<Add />);
    //     expect(wrapper.find("num1")).toHavevalue(0);
    // })

    it("Functional Testing of Add", () => {
        const wrapper = shallow(<Add />);
        wrapper.find("#num1").simulate("blur", {target: {value: "20"} })
        wrapper.find("#num2").simulate("blur", {target: {value: "10"} })
        wrapper.find("#btn1").simulate("click")
        expect (wrapper.find("#disp1").text()).toBe("The Sum is : 30")
    })

    it("Initial value of Textbox", () => {
        const wrapper = shallow(<Add/>)
        expect(wrapper.find("#num1").props().value).toBe(0);
        expect(wrapper.find("#num2").prop("value")).toBe(0)
    })
    })
