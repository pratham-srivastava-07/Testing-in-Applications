// import {app} from "../index"

// import {describe, it, expect} from "@jest/globals"

// import  request  from "supertest"


// describe("POST /sum", ()=> {
//     it("should return product", async ()=> {
//         const res = await request(app).post("/sum").send({
//             a: 10,
//             b: 2000
//         })
//         expect(res.statusCode).toBe(200)
//         expect(res.body.ans).toBe(20000);
//     })
// ;

//     it("should not return 200", async ()=> {
//         const res = await request(app).post("/sum").send({
//             a: ["idwuhydh"],
//         })
//         expect(res.statusCode).toBe(411)
//         expect(res.body.ans).toBe("failed");
//     });

// })

import {describe, expect, test, it} from '@jest/globals';
import request from "supertest";
import { app } from "../index"

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(2);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("failed");
    });

});


// describe("GET /sum", () => {
//   it("should return the sum of two numbers", async () => {
//       const res = await request(app)
//         .get("/sum")
//         .set({
//           a: "1",
//           b: "2"
//         })
//         .send();
//       expect(res.statusCode).toBe(200);
//       expect(res.body.answer).toBe(3);
//   });

//   it("should return 411 if no inputs are provided", async () => {
//     const res = await request(app)
//       .get("/sum").send();
//     expect(res.statusCode).toBe(411);
//   });

// });