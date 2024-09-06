const repeatString = function(string, times) {
    if (times < 0) return "ERROR";
    
    let return_string = "";
    for (let i = 0; i < times; i++) {
        return_string = return_string.concat(string);
    }

    return return_string;
};

// Do not edit below this line
module.exports = repeatString;
