import { reverseString } from "../src/index.js";

test("abcde lsdf", ()=> {
    expect(reverseString("abcde lsdf")).toBe("fdsl edcba");
})