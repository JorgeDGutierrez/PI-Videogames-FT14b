const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);


describe("GET /videogames", () => {
  it("respond with json containing a list of all videogames", (done) => {
    request(app)
      .get("/videogames")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});