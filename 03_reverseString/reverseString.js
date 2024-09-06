const reverseString = function(string) {
    let reverse_array = []

    for (let i = string.length - 1; i > -1; i--){
        reverse_array.push(string.charAt(i));
        }

    return reverse_array.join('')
};

// Do not edit below this line
module.exports = reverseString;
