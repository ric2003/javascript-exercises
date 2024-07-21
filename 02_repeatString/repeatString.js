const repeatString = function(text,num) {
    if(num<0){
        return "ERROR";
    }
    let textRepeat = "";
    for (let index = 0; index < num; index++) {
        textRepeat+=text
    }
    return textRepeat;
};

// Do not edit below this line
module.exports = repeatString;
