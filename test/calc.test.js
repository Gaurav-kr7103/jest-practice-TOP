import { calculator } from "../src/index.js";

console.log(calculator);

test("two numbers 1 and 2", ()=> {
    expect(calculator.add(1,2)).toBe(3);
});

test("divide two numbers 1 and 0", () => {
    expect(calculator.div(1,0)).toBe("undefined");
});