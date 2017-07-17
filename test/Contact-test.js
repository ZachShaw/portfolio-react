import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Contact from '../src/routes/Contact/components/Contact'

describe("A suite", () => {
  it("should testttt", () => {
    const wrapper = shallow(<div><p>hello</p></div>, {});
    expect(wrapper.containsMatchingElement(<p>hello</p>)).to.eq(true);
  });

  it("should work  with a component", () => {
    const wrapper = shallow(<Contact />);
    const expected = wrapper.containsMatchingElement(<p>what!</p>);
    expect(expected).to.eq(true);
  });
});