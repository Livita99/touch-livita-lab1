import request from "supertest";
import app from "../app.js";
import { expect } from "chai";

describe("GET /", () => {
  it("should return Hello from Render!", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello from Render!");
  });
});
