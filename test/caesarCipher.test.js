const {caesarCipher : change} = require("../src/index");

test ("abc, 3", () => {
    expect(change('abc', 3)).toBe('def');
})

test ("xyz, 3", () => {
    expect(change('xyz', 3)).toBe('abc');
})

test ("Hello, World!', 3", () => {
    expect(change('Hello, World!', 3)).toBe('Khoor, Zruog!');
})
