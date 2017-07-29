import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Contact from '../../src/routes/Contact/components/Contact'

describe("A suite", () => {
  it("should testttt", () => {
    const wrapper = shallow(<div><p>hello</p></div>, {});
    expect(wrapper.containsMatchingElement(<p>hello</p>)).to.eq(true);
  });

  it("should have an email anchor tag linking to zachshaw1@gmail.com", () => {
    const wrapper = shallow(<Contact />);

    expect(
      wrapper
        .find('a')
        .prop('href')
    ).to.eq('mailto:zachshaw1@gmail.com')
  });

  it("should work  with a component", () => {
    const wrapper = shallow(<Contact />);
    const expected = wrapper.containsMatchingElement(<h2>Contact</h2>);
    expect(expected).to.eq(true);
  });
});