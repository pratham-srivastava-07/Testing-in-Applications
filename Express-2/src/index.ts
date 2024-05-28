import {z} from "zod"

import express from "express"
import {prismaClient} from "./db"

export const app = express();

app.use(express.json());

const ProdInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async(req, res)=> {
    const response = ProdInput.safeParse(req.body);

    if(!response.success) {
        return res.status(411).json({
            message: "failed"
        })
    }
    const ans = response.data.a * response.data.b

    await prismaClient.sum.create({
       data: {
        a: response.data.a,
        b: response.data.b,
        result: ans
       }
    })

    res.json({
        ans
    })
})


