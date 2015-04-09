import chai from 'chai';
import sinon from 'sinon';
import httpClient from './httpClient';

var assert = chai.assert;
var expect = chai.expect;

describe('httpClient', function() {

    describe('getData', function() {

        it('should request data from the url passed', function(done) {

            var httpSpy = sinon.spy(httpClient, 'http');

            httpClient.getData('http://www.reddit.com/r/all/search.json?q=betting&sort=relevance&t=all');

            expect(httpSpy.calledOnce).to.be.true;

            done();

        });

    });

});