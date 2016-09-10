const request = require('supertest');
const expect = require('expect');
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
});
describe('Testing configuration related routes and controllers', () => {
  describe('/creatconfig', () => {
  describe('POST', () => {
    it('responds to valid request with 200 status and application/json content type', done => {
      const configTemplate = {
            entry: 'entry',
            output: 'output',
            test: 'test',
            loader: 'loader',
            exclude: 'exclude',
            presets: 'presets',
            refID: 'refID',
          };
      request(HOST)
        .post('/createconfig')
        .send(configTemplate)
        .expect('Content-Type', /application\/json/)
        .expect(200, done);
      });
    });
  });
})
  
