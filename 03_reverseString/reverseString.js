const reverseString = function(text) {
    let reversedText = "";
    for (let index = text.length-1; index >= 0; index--) {
        reversedText+=text[index];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
