const request = require('supertest');
const expect = require('expect');
const PORT = process.env.PORT || 9090;
const HOST = `http://localhost:${PORT}`;
// var User = require('./../models/userModel.js');
// var cookieController = require('./../util/cookieController.js');
// var configModel = require('./../models/configModel.js');
// var sessionController = require('./sessionController.js');
// var configTranspiler = require('./transpileController.js');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

describe('Testing configuration related routes and controllers', () => {
  describe('/creatconfig', () => {
    describe('POST', () => {
      it('responds to valid request with 200 status and application/json content type', done => {
        request(HOST)
          .post('/createconfig')
          .type('form')
          .send({
            entry: 'entry',
            output: 'output',
            test: 'test',
            loader: 'loader',
            exclude: 'exclude',
            presets: 'presets',
            refID: '57d45b412a0b465f621c58a4'
          })
          .expect(200, done);
      });
    });
  });
  describe('/configList', () => {
    describe('GET', () => {
      it('responsds with a 200 status code and application/json content-type', done => {
        request(HOST)
          .get('/configlist')
          .expect('Content-Type', /application\/json/)
          .expect(200,done);
      })
    })
  })
   describe('/configbyid/', () => {
    describe('GET', () => {
      it('responsds with a 200 status code and application/json content-type', done => {
        request(HOST)
          .get('/configbyid/57d48ac4f49f50756ad4a05f')
          .expect('Content-Type', /application\/json/)
          .expect(200,done);
      })
    })
  })
});
