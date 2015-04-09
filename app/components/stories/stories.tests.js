import chai from 'chai';
import sinon from 'sinon';
import httpClient from 'services/httpClient/httpClient';
import stories from './stories';

var assert = chai.assert;
var expect = chai.expect;

describe('stories', function() {

    describe('init', function() {

        it('should get data from the stories url', function(done) {

            var getDataSpy = sinon.spy(httpClient, 'getData');
            var app = new stories(httpClient);
            app.init();

            expect(getDataSpy.calledOnce).to.be.true;

            done();
        });
    });
});