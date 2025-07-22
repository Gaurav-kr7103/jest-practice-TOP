import {capitalize} from "../src/index.js";

test("hello", ()=> {
    expect(capitalize("hello")).toBe("Hello");
})

test("Empty String", ()=> {
    expect(capitalize("")).toBe("");
})

test("  hello WOrd.bticaslekjf", ()=> {
    expect(capitalize("  hello WOrd.bticaslekjf")).toBe("  Hello WOrd.bticaslekjf");
})

test("123", ()=> {
    expect(capitalize("123")).toBe("123");
})