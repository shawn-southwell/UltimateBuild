const request = require('supertest');
const expect = require('expect');
const PORT = process.env.PORT || 9090;
const HOST = `http://localhost:${PORT}`;

describe('Testing user related routes and controllers', () => {
  //Test Homepage 
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
});
