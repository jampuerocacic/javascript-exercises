const repeatString = function(givenWord,num) {
    let result = ""
    for (let i=0; i<num; i++) {
    result += givenWord
}
if (num < 0) {
    return "ERROR"
} else {
return result;
}
}

// Do not edit below this line
module.exports = repeatString;