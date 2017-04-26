import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../jsx/App';
import Header from '../jsx/Header';
import Welcome from '../jsx/Welcome';
import Dashboard from '../jsx/Dashboard';

describe("Test suite", function() {
 it("passes when the actual node element exists", function() {
    expect(shallow(<App/>).contains(<div>
              <Header/>
              <Welcome/>
              <Dashboard/>
          </div>)).to.equal(true);
   });

});


