var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var isEqual = require('lodash/isEqual');
var should = chai.should();

chai.use(chaiHttp);


/*
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/

// test example for GET	/posts
/** Test for  */
testCase('/GET posts', function(){
    it('it should GET all the posts', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/101')
            .end((err, res) => {
                if (res.should.have.status(404) && !isEqual(res.body, {})) {
                    // почекать как правильно сказать что тест упал в документации
                } else {
                    done();
                }
            });
    });
});

testCase('/GET posts', function(){
    it('it should GET all the posts', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=1&title=qui%20est%20esse')
            .end((err, res) => {
                console.log(res.body);
                done();
            });
    });
});
