const palindromes = function (phrase) {
    const cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");
    const words = cleanedPhrase.split(" ");
    const reverseW = words.map(function (word) {
        return word.split("").reverse().join("");
    })
    //could also be const reverseW = words.map(word => word.split('').reverse().join(''));//
    return reverseW.reverse().join(" ") === cleanedPhrase

};

// Do not edit below this line
module.exports = palindromes;
