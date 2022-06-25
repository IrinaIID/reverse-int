module.exports = function reverse (n) {

    let number = Math.abs(n);
    return String(number).split('').reverse().join('');
}