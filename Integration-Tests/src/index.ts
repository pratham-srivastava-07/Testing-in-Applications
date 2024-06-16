import express from "express"

import {prismaClient} from "./db"

 export const app = express()

app.use(express.json());

app.post('/', async (req, res)=> {
    const a = req.body.a;
    const b = req.body.b;

    if(a > 10000000 || b > 10000000) {
        return res.status(422).json({message: "Does not support bigInt"});
    }
    const result = a + b;

    const request = await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "ADD"
        }
    })

    res.status(200).json({
        message: "Success",
        result: result,
        id: request.id
    })
})

