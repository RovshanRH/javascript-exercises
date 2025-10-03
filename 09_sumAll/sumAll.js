const sumAll = function(num_1, num_2) {
    sum = 0
    for (let i = num_1; i <= num_2; i++) {
        sum += i
    }
    return sum


};
console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
