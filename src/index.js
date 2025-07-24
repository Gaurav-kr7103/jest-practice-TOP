import "./styles.css";
function capitalize (str) {
    if (str.length === 0) 
        return "";

    let arr = str.split('');
    let index = arr.findIndex(ch => (ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))

    if (index !== -1)
        arr[index] = arr[index].toUpperCase();
    return arr.join('');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add : (a,b) => {
        return a+b;
    }, 
    sub : (a,b) => {
        return a-b;
    },
    mul : (a,b) => {
        return a*b;
    },
    div : (a,b) => {
        if (b === 0)
            return "undefined";
        return a/b;
    }
}




function caesarCipher(str, num) {

    const code_a = 97;
    const code_z = 122;

    const code_A = 65;
    const code_Z = 90;

    num = num%26;
    return str.split('')
    .map((ch) => {
        let code = ch.charCodeAt(0);
        if (code >= code_a && code <= code_z) {
            code = code_a + (code + num - code_a + 26)%26;
            return String.fromCharCode(code);
        } else if (code >= code_A && code <= code_Z) {
            code = code_A + (code + num - code_A + 26)%26;
            return String.fromCharCode(code);
        } else {
            return ch;
        }
    }).join('');
}

function analyzeArray (arr) {
    return {
        average : () => arr.reduce((sum, curr) => {return sum + curr}, 0) / arr.length,
        min : () => arr.reduce((min, val) => Math.min(min,val) , arr[0]),
        length : () => arr.length,
        max : () => arr.reduce((max, val) => Math.max(max, val), arr[0]),
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray};