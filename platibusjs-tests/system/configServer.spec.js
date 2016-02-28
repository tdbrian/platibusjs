'use strict';

const chai = require('chai');
const request = require('request');
const platibusjs = require('../../platibusjs-core/src/main');

const expect = chai.expect;

describe('PlatibusJs server with named config', () => {

  before((done) => {
    platibusjs.start('platibus.httpserver', (err) => {
      done();
    });
  });

  it('should return a running status', (done) => {
    request('http://localhost:8611/platibus', (err, res, body) => {
      let status = JSON.parse(body).status;
      expect(status).to.equal('running');
      done();
    });
  });

});
