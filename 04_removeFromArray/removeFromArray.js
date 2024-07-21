const removeFromArray = function(list) {
    for (let index = 0; index < list.length; index++) {
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] === list[index]) {
                list.splice(index, 1);
                index--;
            }
        }
    }
    return list;
}

// Do not edit below this line
module.exports = removeFromArray;
