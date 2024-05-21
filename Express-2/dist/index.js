"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const ProdInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.post("/sum", (req, res) => {
    const response = ProdInput.safeParse(req.body);
    if (!response.success) {
        return res.status(403).json({
            message: "failed"
        });
    }
    const ans = response.data.a * response.data.b;
    res.json({
        ans
    });
});
