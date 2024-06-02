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
const vitest_1 = require("vitest"); // for vitest just replace "@jest/globals" with "vitest"
const supertest_1 = __importDefault(require("supertest"));
vitest_1.vi.mock('../db');
(0, vitest_1.describe)("POST /sum", () => {
    (0, vitest_1.it)("should return product", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 10,
            b: 2000
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.ans).toBe(20000);
    }));
    (0, vitest_1.it)("should not return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({});
        (0, vitest_1.expect)(res.statusCode).toBe(411);
        (0, vitest_1.expect)(res.body.message).toBe("failed");
    }));
});
