import {describe, it, expect} from "@jest/globals"
import {app} from "../index"
import request from "supertest"

describe("POST /sum", ()=> {
    it("should return the post req", async ()=> {
        const res = await request(app).post("/sum").send({
            a: 7,
            b: 9
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.ans).toBe(16)
    })
});

