'use strict';

const chai = require('chai');
const expect = chai.expect;
const platibusjs = require('../../platibusjs-core/src/main');

describe('test wallaby', () => {

  it('should run', (done) => {
    platibusjs.start();
    expect(true).to.be.true;
    done();
  });

});
