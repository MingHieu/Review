//............. Ex 1.....................
function findOppositeNumber(n, inputNumber) {
    let d = n / 2;
    if (inputNumber >= d) return inputNumber - d
    else return inputNumber + d
}
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));

//.................. Ex2....................
function merge2String(s1, s2) {
    let output = '';
    if (s1.length != s2.length) {
        let len = s1.length;
        if (s1.length > s2.length) len = s2.length
        for (let i = 0; i < len; i++) {
            output += s1[i] + s2[i]
        }
        if (len == s2.length)
            output += s1[s1.length - 1]
        else
            output += s2[s2.length - 1]
        return output
    }
    else {
        for (let i = 0; i < s1.length; i++) {
            output += s1[i] + s2[i]
        }
        return output
    }
}
console.log(merge2String('abc', '123'))
console.log(merge2String('abc', '0123'))
console.log(merge2String('abcd', '123'))