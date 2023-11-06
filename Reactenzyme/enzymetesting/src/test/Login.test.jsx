import React from 'react'
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Login from "../components/Login"

Enzyme.configure({
    adapter: new Adapter(),
  });

describe ("Testing Login Component", () => {
    it("Count number of DIV", () => {
        const wrapper = shallow(<Login />)
        const divtag = wrapper.find("div")
        expect(divtag).toHaveLength(5)
    })

    it("Simulate Inputbox ", () => {
        const wrapper = shallow(<Login />);
        const inplogin = wrapper.find("#ip1");
        inplogin.simulate("blur", { target: { value: "Diana" } });
        expect(wrapper.find("#disp1").text()).toEqual("Username is : Diana");
        const inpass = wrapper.find("#ip2");
        inpass.simulate("blur", { target: { value: "Password" } });
        expect(wrapper.find("#disp2").text()).toEqual("Password is : Password");
      });
})
