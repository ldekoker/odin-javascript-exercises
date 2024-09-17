const fibonacci = function(n) {
    const num = String(n);
    if (num < 0) {return 'OOPS'};
    if (num == 0) {return 0};
    if (num == 1 || num == 2) {return 1};
    return fibonacci(n-1) + fibonacci(n-2);

};

// Do not edit below this line
module.exports = fibonacci;
