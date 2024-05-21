import {z} from "zod"

import express from "express"

export const app = express();

app.use(express.json());

const ProdInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res)=> {
    const response = ProdInput.safeParse(req.body);

    if(!response.success) {
        return res.status(411).json({
            message: "failed"
        })
    }
    const ans = response.data.a * response.data.b

    res.json({
        ans
    })
})


