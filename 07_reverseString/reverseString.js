const reverseString = function(string) {
    return string.split(" ").map(el => {
        el_copy = ''
        for (let i = el.length-1; i >= 0; i--) {
            el_copy += el[i]
        }
        return el_copy
    }).reverse().join(" ")
};
console.log(reverseString('hello there'))
// Do not edit below this line
module.exports = reverseString;
