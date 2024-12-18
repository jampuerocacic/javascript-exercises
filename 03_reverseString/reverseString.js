const reverseString = function(text) {
    let reversed = "";
for (i=0; i < text.length; i++) {
   reversed = text.at(i) + reversed;
}
return reversed;
};

// Do not edit below this line
module.exports = reverseString;
    