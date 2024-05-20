import {describe, test, expect} from "@jest/globals"

import {anotherFunc, sum} from "../index"

describe("Testiing every function", ()=> {
    
    describe('sum module', ()=> {
        test('addition', ()=> {
            expect(sum(1,5)).toBe(6);
        })
    })
    
    describe("multiply", ()=> {
        test("product", ()=> {
            expect(anotherFunc(2,89)).toBe(178);
        })
    })
})