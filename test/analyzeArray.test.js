import { analyzeArray} from "../src/index.js";

test ("[1,8,3,4,2,6]", ()=> {
    expect(analyzeArray([1,8,3,4,2,6]).average()).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min()).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).length()).toBe(6);
    expect(analyzeArray([1,8,3,4,2,6]).max()).toBe(8);
})