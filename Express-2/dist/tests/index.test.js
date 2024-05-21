"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
(0, globals_1.describe)("POST /sum", () => {
    (0, globals_1.it)("should return product", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 10,
            b: 2000
        });
        (0, globals_1.expect)(res.statusCode).toBe(200);
        (0, globals_1.expect)(res.body.ans).toBe(20000);
    }));
    (0, globals_1.it)("should not return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({});
        (0, globals_1.expect)(res.statusCode).toBe(411);
        (0, globals_1.expect)(res.body.message).toBe("failed");
    }));
});
// import {describe, expect, it} from '@jest/globals';
// import request from "supertest";
// import { app } from "../index"
// describe("POST /sum", () => {
//   it("should return the sum of two numbers", async () => {
//       const res = await request(app).post("/sum").send({
//         a: 10,
//         b: 20
//       });
//       expect(res.statusCode).toBe(200);
//       expect(res.body.ans).toBe(200);
//     });
//     it("should return 411 if no inputs are provided", async () => {
//       const res = await request(app).post("/sum").send({});
//       expect(res.statusCode).toBe(411);
//       expect(res.body.message).toBe("failed");
//     });
// });
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
