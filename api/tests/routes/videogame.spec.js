/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/app')

const videogame = {
  name: 'Super Mario Bros',
  description: 'A jumps game',
  platforms: 'iOS'
};

 

describe('GET /videogames?name=...', () => {
  it('should get a 15 results', () =>
    request(app)
    .get('/videogames?name=portal')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).length(15);
      })
  );
  it('should get 404 status if name does not exist', () =>
    request(app)
    .get('/videogames?name=anybadname')
      .expect(404)
  );
});


describe('/GET /genres', function()  {
 
    it('respond with 200', done => {
      request(app)
      .get('/genres')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err)=>{
        if(err) return done(err)
        done();
    })
  })
  
});

describe('/POST /videogame',() => {
  it('respond with 201 created', done =>{
      const data = {
          name:'spider man',
          description:'atrapar al duende verde y pelar con el doctor octo-pus',
          "genres":["Arcade","Strategy"],
          released: '2013-09-17',
          rating: '3',
          "platforms":"PlayStation 4"
      }
      request(app)
      .post('/videogame')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err)=>{
          if(err) return done(err)
          done();
      })
  })
  
})
