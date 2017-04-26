import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../jsx/Header';

describe("A suite", function() {

it("passes when the actual header matches the expected", function() {
const component = render(<Header />);
//console.log(component.html())
expect(component.find('div').hasClass('header')).to.equal(true);
 });


// test italic behaviour
it("passes when attribute exists and has value fa fa-user-o icon", function() {
    expect(shallow(<Header/>).contains(<i className="fa fa-user-o icon" aria-hidden="true"/>)).to.equal(true);
   });

   it("passes when attribute exists and has value fa fa-home icon", function() {
    expect(shallow(<Header/>).contains(<i className="fa fa-home icon" aria-hidden="true"/>)).to.equal(true);
   });

// test italic behaviour

		
 it("passes when attribute exists and has value col-md-1 col-sm-1", function() {
    expect(shallow(<Header/>).contains(<div className="col-md-1 col-sm-1"/>)).to.equal(true);
   });

 it("passes when attribute exists and has value col-md-2 col-sm-2", function() {
  expect(shallow(<Header/>).contains(<div className="col-md-2 col-sm-2"/>)).to.equal(true);
  });

   it("passes when attribute exists and has value sap-img", function() {
    expect(shallow(<Header/>).contains(<div className="sap-img"/>)).to.equal(true);
   });

it("passes when attribute exists and has value", function() {
    const wrapper1 = mount(<Header />)
      expect(wrapper1.find('header')).to.exist
    })

it('passes when specified length exists', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('div')).to.have.length(7);
  });

it('Test', function () {
const wrapper = mount(
  <div className="col-md-2 col-sm-2">
			<i className="fa fa-user-o icon" aria-hidden="true"></i>
			<i className="fa fa-home icon" aria-hidden="true"></i>
	<div className="sap-img"></div>
	</div>
);

expect(wrapper.containsAllMatchingElements([
  <i className="fa fa-user-o icon" aria-hidden="true"></i>,
	<i className="fa fa-home icon" aria-hidden="true"></i>
])).to.equal(true);
});

});


