const request = require('supertest');
const expect = require('chai').expect;
const PORT = process.env.PORT || 9090;
const HOST = `http://localhost:${PORT}`;

describe('Testing user related routes and controllers', () => {
  describe('/', () => { //set route for root.
    describe('GET', () => { //set http verb. 
      it('responds with 200 status and text/html content type', done => { //giving description and callback
        request(HOST)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });
    });
  });
    describe('/createconfig', () => {
      it('responds to valid request with 200 status and application/json content type', done => {
        request(HOST)
          .get('/creatconfig')
          .set('accept','text\/html')
          .expect('Content-Type',"text\/html//; charset=utf-8")
          .expect(200, done);
      });
    })
})