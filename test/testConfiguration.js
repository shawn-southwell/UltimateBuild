const request = require('supertest');
const expect = require('expect');
const PORT = process.env.PORT || 9090;
const HOST = `http://localhost:${PORT}`;

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
});