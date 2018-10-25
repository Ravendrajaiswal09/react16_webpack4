'use strict';

let assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
let React = require('react');
let skinDeep = require('skin-deep');


import Users from '../components/Users';
import * as stateConstant from './statecons';

describe('Empty test', () => {
    const userState = stateConstant.browseStateConst()

    var tree = skinDeep.shallowRender(<Users userState={userState}/>);
    console.log(<Users />)
      it('Should contain a button: Delete Node', () => {
        var saveButton = tree.subTree('.table table-bordered');
    
        expect(saveButton.length).to.eql(1);
      });
  });