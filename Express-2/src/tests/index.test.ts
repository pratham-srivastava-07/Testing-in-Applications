import {app} from "../index"

import {describe, it, expect, vi} from "vitest" // for vitest just replace "@jest/globals" with "vitest"

import  request  from "supertest"


vi.mock('../db');


describe("POST /sum", ()=> {
    it("should return product", async ()=> {
        const res = await request(app).post("/sum").send({
            a: 10,
            b: 2000
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.ans).toBe(20000);
    });

    it("should not return 200", async ()=> {
        const res = await request(app).post("/sum").send({
        })
        expect(res.statusCode).toBe(411)
        expect(res.body.message).toBe("failed");
    });

})

